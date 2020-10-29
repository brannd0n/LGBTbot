const commando = require('discord.js-commando');
const discord = require('discord.js');

class WigLinksCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'wig-links',
            group: 'welcome',
            memberName: 'wig-links',
            description: 'Links of all platforms.'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.MessageEmbed()
        .setColor(0xEF563D)
        .addField("**Women in Games links**", "🐦 [Twitter @wigj](https://twitter.com/wigj)\n\n" +
        "🇫 [Facebook Group @womeningameswigj](https://www.facebook.com/groups/womeningameswigj/)\n\n" +
        ":office: [LinkdIN Company Page](https://www.linkedin.com/company/wigj/)\n\n" +
        ":speech_left: [LinkdIN Group](https://www.linkedin.com/groups/2739553/)")
        .setThumbnail("https://i.gyazo.com/84dccabc771c5e451be4117a34ea9aab.png")
        .setFooter("Last updated")
        .setTimestamp();
        message.channel.send(myInfo)
    }
}

module.exports = WigLinksCommand;
