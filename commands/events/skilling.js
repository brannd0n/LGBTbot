const commando = require('discord.js-commando');
const discord = require('discord.js');

class SkillingCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'skilling',
            group: 'events',
            memberName: 'skilling',
            description: 'Skilling event details',
            args: [
                {
                    key: 'date',
                    prompt: 'What date is the event? (e.g. 28 September)',
                    type: 'string'
                },
                {
                    key: 'time',
                    prompt: 'What time is the event? (e.g. 21:00)',
                    type: 'string'
                },
                {
                    key: 'location',
                    prompt: 'Where is the event? (e.g. citadel)',
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
        .setTitle("📊 __**Portables and Pulsecores**__ 📊")
        .setColor(0x00AE86)
        .setThumbnail("https://runescape.wiki/images/5/52/Completionist_cape_%28t%29_detail.png?9fa02")
        .addField("\u200b","**Date:** Sunday " + args.date + "\n**Time:** " + args.time + "\n**Host: **" + message.author +"\n**Location: ** " + args.location)
        .addField("\u200b", args.description, true);
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = SkillingCommand;
