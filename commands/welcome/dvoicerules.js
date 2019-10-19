const commando = require('discord.js-commando');
const discord = require('discord.js');

class DvoiceRulesCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'dvoicerules',
            group: 'welcome',
            memberName: 'dvoicerules',
            description: 'Diversity Server Voice Chat Rules.'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
        .setColor(0xFD6600)
        .setTimestamp()
        .addField(" __**VOICE CHAT RULES**__", "\n **1)** Under NO circumstances should sexual material be brought into voice channels. \n \n **2)** Please be considerate of everyone in voice. \n \n **3)** Please don't loiter, we have a limited amount of channels, so please try not to sit in a channel by yourself for hours.\n \n **4)** Please allow everyone to have a chance to talk, although it might get busy/crowded, everyone deserves to talk.\n \n ***Should you witness something in the server that you believe a <@&630489074360123392> should see, please take some screenshots and forward any evidence to a <@&630489074360123392> directly via private message.*** \n \n", true)
        .setThumbnail("https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/230/studio-microphone_1f399.png")
        .setFooter("Last updated")
        .setTimestamp()
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = DvoiceRulesCommand;
