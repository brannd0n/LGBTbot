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
        "[Click here for OSRS forum thread](https://secure.runescape.com/m=forum/a=13/c=dQIcfFmIau4/sl=0/forums?320,321,846,66218050)\n\n"+
        "[Click here for OSRS twitter](https://twitter.com/OSRS_LGBT)\n\n" +
        "[Click here for Member Spreadsheet](https://docs.google.com/spreadsheets/d/1s1qQqClG3YRV_6ClvQEKp2_WAitniALypcJg2E0YCSI/edit#gid=0)\n\n"+
        "[Click here for OSRS Events Calendar](https://docs.google.com/spreadsheets/d/1s1qQqClG3YRV_6ClvQEKp2_WAitniALypcJg2E0YCSI/edit#gid=1164803532)\n\n")
        .setThumbnail("https://www.smashbros.com/wiiu-3ds/images/character/toon_link/main.png")
        .setFooter("Last updated")
        .setTimestamp();
        message.channel.send(myInfo)
    }
}

module.exports = OsrsLinksCommand;
