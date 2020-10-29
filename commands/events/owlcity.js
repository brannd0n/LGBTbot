const commando = require('discord.js-commando');
const discord = require('discord.js');

class OwlcityCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'owlcity',
            group: 'events',
            memberName: 'owlcity',
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
                    prompt: 'What time is the event at?',
                    type: 'string'
                },
                {
                    key: 'world',
                    prompt: 'What world is it on?',
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
        var myInfo = new discord.MessageEmbed()
        .setTitle(args.event)
        .setColor(0x4F2095)
        .setThumbnail("https://media0.giphy.com/media/J4bAUi0AIif1Kwo8XK/giphy.gif")
        .addField("\u200b","**Date:** " + args.date + "\n**Time:** " + args.time + "\n**World:** " + args.world + "\n**Host: **" + message.author +"\n**Where:** " + args.where)
        .addField("\u200b",args.description, true);
        message.channel.send(myInfo)
    }
}

module.exports = OwlcityCommand;
