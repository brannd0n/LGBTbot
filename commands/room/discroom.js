const commando = require('discord.js-commando');
const discord = require('discord.js');

class DiscRoomCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'discrooms',
            group: 'room',
            memberName: 'discrooms',
            description: 'Discord Room info.'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
        .setTitle("Because there has been confusion regarding rooms and where to post please use this list to help make it a bit more clear.")
        .setColor(0xFF0000)
        .setFooter("Last updated")
        .setTimestamp();
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = DiscRoomCommand;

