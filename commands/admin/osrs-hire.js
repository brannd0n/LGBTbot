const commando = require('discord.js-commando');
const discord = require('discord.js');

class OsrsHiringCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'osrs-hire',
            group: 'admin',
            memberName: 'osrs-hire',
            description: 'Looking for osrs team members'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
        .setColor(0x00FDFF)
        .addField("__**Status:**__", ":gem: We are currently looking for OSRS admins :gem:")
        .setFooter("Last updated")
        .setTimestamp();
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = OsrsHiringCommand;
