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
        const arg_string = Object.values(args).map(val => val);
        const updated_args = arg_string.join(' ').split(']').join(' ').split('[').slice(1);
        const filtered = updated_args.filter(el => el && el != '');
        const new_args = {
            event: filtered[0] || '',
            date:  filtered[1] || '',
            time:  filtered[2] || '',
            where: filtered[3] || '',
            description: filtered[4] || '\u200B',
        };
        message.delete();
        var myInfo = new discord.MessageEmbed()
        .setTitle(new_args.event)
        .setColor(0x4F2095)
        .addField("\u200b","**Date:** " + new_args.date + "\n**Time:** " + new_args.time + "\n**Host: **" + "<@!"+ message.author.id +">" +"\n**Where:** " + new_args.where)
        .addField("\u200b",new_args.description, true);
        message.channel.send(myInfo)
    }
}

module.exports = EventCommand;
