const commando = require('discord.js-commando');
const discord = require('discord.js');

class AdminLinksCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'admin-links',
            group: 'admin',
            memberName: 'admin-links',
            description: 'Links for admins'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
        .setColor(0x991919)
        .addField("🔗 __**HELPFUL LINKS**__ 🔗",
        "[Click here to visit the clan forum thread](http://services.runescape.com/m=forum/c=WfmoI4xdajU/forums.ws?290,291,452,66119156,goto,1)\n\n"+
        "[Click here to visit the recruitment forum thread](http://services.runescape.com/m=forum/c=mceHK8S1nWA/sl=0/forums.ws?94,95,goto,1)\n\n"+
        "[Click here to view the warning spreadsheet](https://docs.google.com/spreadsheets/d/1PCatwsY5JnrsBl01Z8srx8d2xr0gyrfb-BS7NXy4iXs/edit?usp=sharing)\n\n"+
        "[Click here for clan calendar](https://docs.google.com/spreadsheets/d/19sW_GnhAl-EqepFAZxp69ZyxiSfMAzmBUeh-xyM9hSc/edit?usp=sharing)\n\n"+
        "[Click here for promotions spreadsheet](https://docs.google.com/spreadsheets/d/1zPtnid4-boHb04PXO8QNaohRkMQGaMp2Gs5w8_pgNHA/edit?usp=sharing)\n\n"+
        "[Click here for clan twitter](https://twitter.com/TheLGBTCorner)\n\n"+
        "[Click here for clan facebook](https://www.facebook.com/LGBTCornerClan/)\n\n"+
        "[Click here for image resources](https://drive.google.com/drive/folders/1DcAYqV-PNgKpVonMWEsV4SpnFvjRDeJw)\n\n")
        .setThumbnail("https://www.smashbros.com/wiiu-3ds/images/character/toon_link/main.png")
        .setFooter("Last updated")
        .setTimestamp();
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = AdminLinksCommand;
