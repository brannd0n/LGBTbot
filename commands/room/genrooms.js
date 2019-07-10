const commando = require('discord.js-commando');
const discord = require('discord.js');

class GenRoomCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'genrooms',
            group: 'room',
            memberName: 'genrooms',
            description: 'General room info.'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
        .setTitle("General Rooms")
        .setColor(0xFD6600)
        .setDescription("<#177035196346925056> - For general everyday chit chat\n \n <#308940788400652288> - Please read this when you first join for vital information about the clan and discord. \n \n <#308711801166626816> - Where staff @ everyone with upcoming clan events or important clan related information. \n \n <#329752955651620878> - Check here for available staff positions")
        .setFooter("Last updated")
        .setTimestamp();
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = GenRoomCommand;
