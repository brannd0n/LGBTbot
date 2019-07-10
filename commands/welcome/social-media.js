const commando = require('discord.js-commando');
const discord = require('discord.js');

class SocialMediaCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'social-media',
            group: 'welcome',
            memberName: 'social-media',
            description: 'Social Media info.'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
        .setColor(0x6F00FF)
        .addField("🏳️‍🌈 **The LGBT Corner on social media** 🏳️‍🌈", "🐦 [Twitter @TheLGBTCorner](https://twitter.com/TheLGBTCorner)\n\n" + 
        "🇫 [Facebook @LGBTCornerClan](https://www.facebook.com/LGBTCornerClan/)\n\n" + 
        "📷 [Instagram @the.lgbt.corner](https://www.instagram.com/the.lgbt.corner/)")
        .setThumbnail("https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/180/rainbow_1f308.png")
        .setFooter("Last updated")
        .setTimestamp();
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = SocialMediaCommand;
