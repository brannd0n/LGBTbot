const commando = require('discord.js-commando');
const discord = require('discord.js');

class VoiceRoomCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'voicerooms',
            group: 'room',
            memberName: 'voicerooms',
            description: 'Voice rooms info.'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
        .setTitle("Voice Room")
        .setColor(0x00B8FF)
        .setDescription("<#397852754619662336> - If you can't talk in voice please type in here")
        .setFooter("Last updated")
        .setTimestamp();
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = VoiceRoomCommand;