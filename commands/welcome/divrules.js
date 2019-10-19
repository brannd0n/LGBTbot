const commando = require('discord.js-commando');
const discord = require('discord.js');

class DivRulesCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'divrules',
            group: 'welcome',
            memberName: 'divrules',
            description: 'Diversity Server Rules.'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
        .setColor(0xFD6600)
        .setTimestamp()
        .addField(" __**SERVER RULES**__", "**1)** Any form of hate speech or abusive behaviour will not be tolerated and will result in immediate removal from the server. \n \n**2)** Nothing NSFW to be posted ANYWHERE in the server. \n \n **3)** Please respect each other’s pronouns and try your best to use them correctly. \n \n **4)** Some sensitive topics are allowed to be discussed in this server, however please avoid topics of self harm or suicide.\n **5)** Please set your nickname to include rsn to avoid confusion.", true)
        .setThumbnail("https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/228/scroll_1f4dc.png")      
        .setFooter("Last updated")
        .setTimestamp()
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = DivRulesCommand;
