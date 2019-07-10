const commando = require('discord.js-commando');
const discord = require('discord.js');

class CharCommsCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'charcomms',
            group: 'room',
            memberName: 'charcomms',
            description: 'Character commands.'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
        .setTitle("Character Related Commands")
        .setColor(0x00B8FF)
        .setDescription("`!stats` <username> -- Displays the stats of <username>. \n \n `!gainz` -- Displays xp gained across all skills for Today/Yesterday/Week \n \n `!alog` <username> -- Displays the adventure log of <username>.")
        .setFooter("Last updated")
        .setTimestamp();
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = CharCommsCommand;