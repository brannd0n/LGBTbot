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
        "[Click here to visit the forum thread](http://services.runescape.com/m=forum/c=w9VNiocRUOQ/sl=0/forums.ws?290,291,31,66034838)\n\n"+
        "[Click here to view the warning spreadsheet](https://docs.google.com/spreadsheets/d/19y9dEi98kO0loHWhzZpe0a-fPSa1CXZ8b4p_PYC7L7g)\n\n"+
        "[Click here for image resources](https://drive.google.com/drive/folders/1DcAYqV-PNgKpVonMWEsV4SpnFvjRDeJw)")
        .setThumbnail("https://www.smashbros.com/wiiu-3ds/images/character/toon_link/main.png")
        .setFooter("Last updated")
        .setTimestamp();
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = AdminLinksCommand;
