const fs = require('fs');
const Discord = require('discord.js');
const Commando = require('discord.js-commando');
const http = require('http');
const { nextTick } = require('process');
const TOKEN = process.env.token || JSON.parse(fs.readFileSync('./config.json')).token;
const admin = require('firebase-admin');
const firebase = require('./FirebaseServiceAccount.json');
// Initialize DB
admin.initializeApp({ credential: admin.credential.cert(firebase) });
const db = admin.firestore();

const bot = new Commando.Client({
    commandPrefix: './',
    ws: { intents: new Discord.Intents(Discord.Intents.ALL) },
});

bot.registry
    .registerGroup('welcome', 'Welcome info')
    .registerGroup('fun', 'Fun')
    .registerGroup('events', 'Events')
    .registerGroup('room', 'Rooms')
    .registerGroup('admin', 'Admin')
    .registerDefaults()
    .registerCommandsIn(__dirname + '/commands')
    ;

bot.on('guildMemberAdd', async member => {
    const embed = new Discord.MessageEmbed()
        .setColor('#32CD32')
        .setDescription(`📥 **${member.user.username}#${member.user.discriminator}** has joined the server.`)
        .setFooter(`User Join | ${new Date(Date.now()).toLocaleDateString()}`, member.user.displayAvatarURL());

    const snapshot = await db.collection('guilds').doc(member.guild.id).get();
    const welcomeChannel = snapshot.data().welcomeChannel;
    const channel = member.guild.channels.cache.get(welcomeChannel);

    if (channel) channel.send(embed);
});

bot.on('guildMemberRemove', async member => {
    const embed = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setDescription(`📤 **${member.user.username}#${member.user.discriminator}** has left the server.`)
        .setFooter(`User Leave | ${new Date(Date.now()).toLocaleDateString()}`, member.user.displayAvatarURL());

        const snapshot = await db.collection('guilds').doc(member.guild.id).get();
        const welcomeChannel = snapshot.data().welcomeChannel;
        const channel = member.guild.channels.cache.get(welcomeChannel);

    if (channel) channel.send(embed);
})

bot.on('guildMemberUpdate', async (oldMember, newMember) => {
    if (oldMember.nickname !== newMember.nickname) {
        const embed = new Discord.MessageEmbed()
            .setAuthor('User Added Nickname', newMember.user.displayAvatarURL())
            .setColor('#34ebe1')
            .addField('User', `<@!${newMember.user.id}>`)
            .addField('Old', oldMember.nickname || 'None')
            .addField('New', newMember.nickname)
            .setFooter(`${new Date(Date.now()).toLocaleDateString()}`);

        const snapshot = await db.collection('guilds').doc(newMember.guild.id).get();
        const welcomeChannel = snapshot.data().welcomeChannel;
        const channel = newMember.guild.channels.cache.get(welcomeChannel);

        if (channel) channel.send(embed);
    }
});

bot.on('guildCreate', async guild => {
    try {
        await db.collection('guilds').doc(guild.id).set({
            messages: {}
        });
        console.log(`${guild.name} added`);
    }
    catch (error) {
        console.error(error);
    }
});

bot.on('guildDelete', async guild => {
    try {
        await db.collection('guilds').doc(guild.id).delete();
        console.log(`${guild.name} deleted`);
    }
    catch (error) {
        console.error(error);
    }
});


bot.on('raw', async event => {
    const eventName = event.t;
    if (eventName === 'MESSAGE_REACTION_ADD') {
        const snapshot = await db.collection('guilds').doc(event.d.guild_id).get();
        const messages = snapshot.data().messages;
        const message_id_array = Object.keys(messages).map(function (key, index) {
            return key;
        });
        if (message_id_array.includes(event.d.message_id)) {
            const reactionChannel = await bot.channels.fetch(event.d.channel_id);
            if (await reactionChannel.messages.fetch(event.d.message_id)) {
                return;
            }
            else {
                reactionChannel.messages.fetch(event.d.message_id)
                    .then(message => {
                        let messageReaction = message.reactions.get(`${event.d.emoji.name}:${event.d.emoji.id}`);
                        if (!messageReaction)
                            messageReaction = message.reactions.get(`${event.d.emoji.name}`);

                        const user = bot.users.cache.get(event.d.user_id);
                        bot.emit('MessageReactionAdd', messageReaction, user);
                    })
                    .catch(error => console.log(error));
            }
        }
    }
    else if (eventName === 'MESSAGE_REACTION_REMOVE') {
        const snapshot = await db.collection('guilds').doc(event.d.guild_id).get();
        const messages = snapshot.data().messages;
        const message_id_array = Object.keys(messages).map(function (key, index) {
            return key;
        });
        if (message_id_array.includes(event.d.message_id)) {
            const reactionChannel = await bot.channels.fetch(event.d.channel_id);
            console.log(reactionChannel,"REACTION CHANNEL")
            if (await reactionChannel.messages.fetch(event.d.message_id)) {
                return;
            }
            else {
                reactionChannel.messages.fetch(event.d.message_id)
                    .then(message => {
                        let messageReaction = message.reactions.get(`${event.d.emoji.name}:${event.d.emoji.id}`);
                        if (!messageReaction)
                            messageReaction = message.reactions.get(`${event.d.emoji.name}`);

                        const user = bot.users.cache.get(event.d.user_id);
                        bot.emit('MessageReactionRemove', messageReaction, user);
                    })
                    .catch(error => console.log(error));
            }
        }
    }
})

bot.on('messageReactionAdd', async (messageReaction, user) => {
    const guild_id = messageReaction.message.channel.guild.id;
    const message_id = messageReaction.message.id;
    const snapshot = await db.collection('guilds').doc(guild_id).get();
    const messages = snapshot.data().messages;
    const required_message_info = messages[message_id];
    console.log(snapshot,messages)
    const emojiName = messageReaction.emoji.name;
    const emojiID = messageReaction.emoji.id;
    const emoji = emojiID ? `<:${emojiName}:${emojiID}>` : emojiName;

    console.log(emoji);

    const role_id = required_message_info.find(el => el.emoji === emoji).role_id;
    const role = await messageReaction.message.guild.roles.fetch(role_id);
    console.log(role_id, role);
    if (role) {
        const member = messageReaction.message.guild.members.fetch(user.id);
        if (member) {
            member.roles.add(role.id);
            console.log('success');
        }
    }
});

bot.on('messageReactionRemove', async (messageReaction, user) => {
    const guild_id = messageReaction.message.channel.guild.id;
    const message_id = messageReaction.message.id;
    const snapshot = await db.collection('guilds').doc(guild_id).get();
    const messages = snapshot.data().messages;
    const required_message_info = messages[message_id];

    const emojiName = messageReaction.emoji.name;
    const emojiID = messageReaction.emoji.id;
    const emoji = emojiID ? `<:${emojiName}:${emojiID}>` : emojiName;

    console.log(emoji);

    const role_id = required_message_info.find(el => el.emoji === emoji).role_id;
    const role = await messageReaction.message.guild.roles.fetch(role => role.id === role_id);
    console.log(role_id, role);
    if (role) {
        const member = messageReaction.message.guild.members.find(member => member.id === user.id);
        if (member) {
            member.roles.remove(role.id);
            console.log('success');
        }
    }
})

bot.on('ready', function () {
    console.log("Ready");
});

// respond to messages
bot.on("message", function (message) {
    // don't run if the message was sent by a bot
    if (message.author.bot) {
        return;
    }

    // if the message includes a reference to the old RS Wikia site hosted by Fandom, let the
    // author know the Official RS Wiki is hosted elsewhere now.
    if (message.content.includes("runescape.fandom.com") || message.content.includes("runescape.wikia.com")) {
        var responseString = "Hey " + message.author + "! That's the old RuneScape Wiki! It's gross and out of date.";
        responseString += " Check out the new RuneScape Wiki at https://runescape.wiki/";
        message.channel.send(responseString);
    }
});

bot.login(TOKEN);

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.write('Baby shark do do do do');
    res.end();
}).listen(process.env.PORT || 5000);
