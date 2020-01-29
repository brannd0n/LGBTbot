const commando = require('discord.js-commando');
const discord = require('discord.js');

class OsrsEventCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'osrsevent',
            group: 'events',
            memberName: 'osrsevent',
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
        .setThumbnail("https://oldschool.runescape.wiki/images/4/46/Old_School_RuneScape_Mobile_icon.png?6b7d1")
        .addField("\u200b","**Date:** " + args.date + "\n**Time:** " + args.time + "\n**Host: **" + message.author +"\n**Where:** " + args.where)
        .addField("\u200b",args.description, true);
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = OsrsEventCommand;
