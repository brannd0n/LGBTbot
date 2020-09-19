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
        const arg_string = Object.values(args).map(val => val);
        const updated_args = arg_string.join(' ').split(']').join(' ').split('[').slice(1);
        const filtered = updated_args.filter(el => el && el != '');
        const new_args = {
            date: filtered[0] || '',
            time:  filtered[1] || '',
            location:  filtered[2] || '',
            description: filtered[3] || '\u200B',
        };
        message.delete();
        var myInfo = new discord.RichEmbed()
        .setTitle("📊 __**Portables and Pulsecores**__ 📊")
        .setColor(0x00AE86)
        .setThumbnail("https://runescape.wiki/images/5/52/Completionist_cape_%28t%29_detail.png?9fa02")
        .addField("\u200b","**Date:** " + new_args.date + "\n**Time:** " + new_args.time + "\n**Host: **" + message.author +"\n**Location: ** " + new_args.location)
        .addField("\u200b", new_args.description, true);
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = SkillingCommand;
