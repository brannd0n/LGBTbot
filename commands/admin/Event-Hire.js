const commando = require('discord.js-commando');
const discord = require('discord.js');

class EventHiringCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'event-hire',
            group: 'admin',
            memberName: 'event-hire',
            description: 'Looking for events team members'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.MessageEmbed()
        .setColor(0xFD00FF)
        .addField("__**Status:**__", ":calendar: We are currently recruiting for the events team :calendar:")
        .setFooter("Last updated")
        .setTimestamp();
        message.channel.send(myInfo)
    }
}

module.exports = EventHiringCommand;
