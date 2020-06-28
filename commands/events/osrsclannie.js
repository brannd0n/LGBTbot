const commando = require('discord.js-commando');
const discord = require('discord.js');

class OsrsClannieCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'osrsclannie',
            group: 'events',
            memberName: 'osrsclannie',
            description: 'Generic event details',
            examples: ['./osrsclannie "Max party" "28 September" "20:00" "world" "host" "place" "Describe where to meet and a basic premise here"'],
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
                    key: 'host',
                    prompt: 'Who is the host?',
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
        .addField("\u200b","**Date:** " + args.date.replace(/[“”‘’"']/g,'') + "\n**Time:** " + args.time.replace(/[“”‘’"']/g,'') + "\n**World:** " + args.world.replace(/[“”‘’"']/g,'') + "\n**Host: **" + args.host.replace(/[“”‘’"']/g,'') +"\n**Where:** " + args.where.replace(/[“”‘’"']/g,''))
        .addField("\u200b", args.description.replace(/[“”‘’"']/g,''), true)
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = OsrsClannieCommand;
