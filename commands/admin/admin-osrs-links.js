const commando = require('discord.js-commando');
const discord = require('discord.js');

class OsrsLinksCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'osrs-links',
            group: 'admin',
            memberName: 'osrs-links',
            description: 'Links for osrs admins'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.MessageEmbed()
        .setColor(0x991919)
        .addField("🔗 __**HELPFUL LINKS**__ 🔗",
        "[Click here for OSRS forum thread](http://services.runescape.com/m=forum/c=I4WKxSmKkbU/forums.ws?320,321,327,66099564)\n\n"+
        "[Click here for OSRS twitter](https://twitter.com/OSRS_LGBT)\n\n" +
        "[Click here for Member Spreadsheet](https://docs.google.com/spreadsheets/d/1s1qQqClG3YRV_6ClvQEKp2_WAitniALypcJg2E0YCSI/edit#gid=0)\n\n"+
        "[Click here for OSRS Events Calendar](https://docs.google.com/spreadsheets/d/1XVtckJASREoF5E6HMNiFJSdnSZEPaycP0kuhY_HRXao/edit?usp=sharing)\n\n")
        .setThumbnail("https://www.smashbros.com/wiiu-3ds/images/character/toon_link/main.png")
        .setFooter("Last updated")
        .setTimestamp();
        message.channel.send(myInfo)
    }
}

module.exports = OsrsLinksCommand;
