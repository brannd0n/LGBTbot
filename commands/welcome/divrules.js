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
        var myInfo = new discord.MessageEmbed()
        .setColor(0xFD6600)
        .setTimestamp()
        .setTitle("__SERVER RULES__")
        .setDescription("**1)** Diversity RS is a platform to bring the community together. We ask all members to research the subject before joining a discussion to avoid conflict and miscommunication. It is okay to ask questions but please be mindful of how you approach certain topics. \n \n :white_small_square: Please be respectful of everyone's opinions, regardless of their race, ethnicity, sexuality or gender. \n \n :white_small_square: Do not assume each others identities, as your assumptions may not always be correct.\n \n :white_small_square: Please respect each other’s pronouns and try your best to use them correctly. \n \n **2)** Any form of hate speech or abusive behaviour will not be tolerated and will result in immediate removal from the server. \n \n **3)** Nothing NSFW to be posted ANYWHERE in the server.  \n \n **4)** Some sensitive topics are allowed to be discussed in this server, however please avoid topics of self harm or suicide.\n\n **5)** __**We cannot help with banned accounts in this server,**__ so please don’t request any of the Jmods investigate a banned account, visit the official [help pages](https://support.runescape.com/hc/en-gb/articles/115002238729) for further information. \n \n **6)** Any screenshots taken of the server should not be used in an antagonising way, and must block out names of other members. This is to protect server integrity, and player safety. \n \n ***Should you witness something in the server that you believe a <@&630489074360123392> should see, please take some screenshots and forward any evidence to a <@&630489074360123392> directly via private message.***", true)
        .setThumbnail("https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/228/scroll_1f4dc.png")
        .setFooter("Last updated")
        .setTimestamp()
        message.channel.send(myInfo)
    }
}

module.exports = DivRulesCommand;
