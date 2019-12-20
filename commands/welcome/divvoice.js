const commando = require('discord.js-commando');
const discord = require('discord.js');

class DivVoiceCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'divvoice',
            group: 'welcome',
            memberName: 'divvoice',
            description: 'Diversity Server Voice Rules.'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
        .setColor(0xFD6600)
        .setTimestamp()
        .addField(" __VOICE CHAT RULES__",
         "**1)** Under NO circumstances should sexual material be brought into voice channels. \n\n**2)** Please be considerate of everyone in voice. \n\n**3)** Please don't loiter, we have a limited amount of channels, so please try not to sit in a channel by yourself for hours.\n\n**4)** Please allow everyone to have a chance to talk, although it might get busy/crowded, everyone deserves to talk.", true)
        .setThumbnail("https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/lg/57/speaker-with-three-sound-waves_1f50a.png")
        .setFooter("Last updated")
        .setTimestamp()
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = DivVoiceCommand;
