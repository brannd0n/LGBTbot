const commando = require('discord.js-commando');
const discord = require('discord.js');

class EventCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'event',
            group: 'events',
            memberName: 'event',
            description: 'Generic event details',
            examples: ['./event "Max party "28 September" "20:00" "world and place" "Describe where to meet and a basic premise here"'],
            args: [
                {
                    key: 'event',
                    prompt: 'What is the event?',
                    type: 'string'
                },
                {
                    key: 'date',
                    prompt: 'What date is the event? (e.g. 28 September)',
                    type: 'string'
                },
                {
                    key:'time',
                    prompt: 'What time is the event at? (In game time)',
                    type: 'string'
                },
                {
                    key: 'where',
                    prompt: 'Where is the event?',
                    type: 'string'
                },
                {
                    key: 'description',
                    prompt: 'Describe the event',
                    type: 'string'
                }
            ]
        });
    }

    async run(message, args)
    {
        message.delete();
        var myInfo = new discord.RichEmbed()
        .setTitle(args.event)
        .setColor(0x4F2095)
        .addField("\u200b","**Date:** " + args.date + "\n**Time:** " + args.time + "\n**Host: **" + message.author +"\n**Where:** " + args.where)
        .addField("\u200b",args.description, true);
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = EventCommand;