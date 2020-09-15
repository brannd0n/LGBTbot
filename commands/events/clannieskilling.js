const commando = require('discord.js-commando');
const discord = require('discord.js');

class ClannieSkillingCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'clannieskilling',
            group: 'events',
            memberName: 'clannieskilling',
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
                    key: 'host',
                    prompt: 'Who is the host?',
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
            host:  filtered[2] || '',
            location: filtered[3] || '',
            description: filtered[4] || '',
        };
        
        message.delete();
        var myInfo = new discord.RichEmbed()
        .setTitle("📊 __**Skilly Sundays**__ 📊")
        .setColor(0x00AE86)
        .setThumbnail("https://runescape.wiki/f/current/5/51/457px-20121217034631%21Max_cape_detail.png")
        .addField("\u200b","**Date:** Sunday " + new_args.date + "\n**Time:** " + new_args.time + "\n**Host: **" + new_args.host +"\n**Location: ** " + new_args.location)
        .addField("\u200b", new_args.description, true);
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = ClannieSkillingCommand;
