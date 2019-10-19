const commando = require('discord.js-commando');
const discord = require('discord.js');

class DivWelcome2Command extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'divwelcome2',
            group: 'welcome',
            memberName: 'divwelcome2',
            description: 'Welcome info.'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
        .addField("\u200b", "The aim of the discord is to create a safe space for players to talk about aspects of the game & community which could be improved to make people feel more included." +
        " Examples of this are suggestions for more NPCs in game which represent how you identify, raising accessibility issues or bringing situations to our attention which you found alienating or hurtful." +
        " We cannot guarantee that all suggestions will make it to the game, but we aim to implement them where possible or find compromises." +
        " We want to enable open conversations and create better mutual understanding between JMods and players.\n\n")
        .addField("\u200b", "This server has been endorsed by RuneScape community management and JMods within the discord can clearly be identified by the “JMod” role. Please be aware to not excessively tag as their involvement is in their own personal time.")
        .setColor(0x00FF00)
        .setFooter("Last updated")
        .setTimestamp();
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = DivWelcome2Command;
