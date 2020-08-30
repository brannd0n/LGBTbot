const commando = require('discord.js-commando');
const discord = require('discord.js');
const admin = require('firebase-admin');
const firebase = require('../../FirebaseServiceAccount.json');
const db = admin.firestore();

class React extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'react',
            group: 'admin',
            memberName: 'react',
            description: 'add a reaction to <message id>'
        });
    }

    async run(message, args) {
        const args_array = args.split(' ');
        const message_id = args_array[0];
        const role_id = args_array[1].substring(3, args_array[1].length - 1);
        const emoji = args_array[2];
        const guild_id = message.guild.id;

        const snapshot = await db.collection('guilds').doc(guild_id).get();
        const guildMessages = snapshot.data().messages;
        if (!guildMessages[message_id]) {
            const newMessages = { ...guildMessages, [message_id]: [{ role_id: role_id, emoji: emoji }] };
            console.log(newMessages);
            await db.collection('guilds').doc(guild_id).update({
                messages: { ...newMessages }
            });
            message.channel.send('Role successfully added.');
        }
        else {
            const flag = guildMessages[message_id].filter(element => element.role_id === role_id).length;
            if (flag) {
                return message.channel.send('The specified role is already added.');
            }
            else {
                guildMessages[message_id].push({ role_id: role_id, emoji: emoji });
                await db.collection('guilds').doc(guild_id).update({
                    messages: { ...guildMessages }
                });
                message.channel.send('Role successfully added!');
            }
        }
    }
}

module.exports = React;
