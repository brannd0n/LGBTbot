const commando = require('discord.js-commando');
const discord = require('discord.js');
const admin = require('firebase-admin');
const firebase = require('../../FirebaseServiceAccount.json');
const db = admin.firestore();

class setWelcomeChannel extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'setwelcomechannel',
            group: 'admin',
            memberName: 'setwelcomechannel',
			description: 'set the channel for welcome messages',
			args: [
				{
					key: 'channel_id',
					prompt: 'channel ID',
					type: 'string',
				},
			],
        });
    }

    async run(message, {channel_id}) {
		try {
			await db.collection('guilds').doc(message.guild.id).update({
				welcomeChannel: channel_id
			})
			message.channel.send('Welcome channel updated!');
		} catch (error) {
			message.channel.send('Unable to update welcome channel.');
			console.log(error);
		}
    }
}

module.exports = setWelcomeChannel;
