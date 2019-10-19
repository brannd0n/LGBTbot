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
        .addField(" __SERVER RULES__", "\n **1)** Any form of hate speech or abusive behaviour will not be tolerated and will result in immediate removal from the server. \n \n**2)** Nothing NSFW to be posted ANYWHERE in the server. \n \n **3)** Please respect each other’s pronouns and try your best to use them correctly. \n \n **4)** Some sensitive topics are allowed to be discussed in this server, however please avoid topics of self harm or suicide.\n \n **5)** Please set your nickname to include rsn to avoid confusion. \n \n", true)
        .addField(" __VOICE CHAT RULES__", "**1)** Under NO circumstances should sexual material be brought into voice channels. \n\n**2)** Please be considerate of everyone in voice. \n\n**3)** Please don't loiter, we have a limited amount of channels, so please try not to sit in a channel by yourself for hours.\n\n**4)** Please allow everyone to have a chance to talk, although it might get busy/crowded, everyone deserves to talk.\n\n***Should you witness something in the server that you believe a <@&630489074360123392> should see, please take some screenshots and forward any evidence to a <@&630489074360123392> directly via private message.*** \n \n", true)
        .setThumbnail("https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/228/scroll_1f4dc.png")      
        .setFooter("Last updated")
        .setTimestamp()
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = DivRulesCommand;