const commando = require('discord.js-commando');
const discord = require('discord.js');

class OsrsClannieCallistoCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'osrsclanniecallisto',
            group: 'events',
            memberName: 'osrsclanniecallisto',
            description: 'Generic event details',
            examples: ['./osrsclanniecallisto "28 September" "20:00" "world" "host" "Describe where to meet and a basic premise here"'],
            args: [
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
            date:  filtered[0] || '',
            time:  filtered[1] || '',
            world: filtered[2] || '',
            host: filtered[3] || '',
            description: filtered[4] || '\u200B',
        };
        message.delete();
        var myInfo = new discord.MessageEmbed()
        .setTitle("⚔️ __**Callisto Mass**__ ⚔️")
        .setColor(0x00AE86)
        .setFooter("Please remember that this is completely for fun!", "https://oldschool.runescape.wiki/images/d/d4/Callisto.png?4612a")
        .setThumbnail("https://oldschool.runescape.wiki/images/d/d4/Callisto.png?4612a")
        .addField("\u200b","**Date:** " + new_args.date + "\n**Time:** " + new_args.time + "\n**World:** " + new_args.world + "\n**Host: **" + new_args.host)
        .addField("\u200b", "[Strategies for Callisto](https://oldschool.runescape.wiki/w/Callisto/Strategies)")
        .addField("\u200b", "**Requirements:**\n70+ Melee Stats", true)
        .addField("\u200b", "**Recommended:**\nVeracs Set Or Range With Diamond Bolt (e) \nAnnakarl Teleport Tabs", true)
        .addField('\u200b', '\u200b')
        .addField("\u200b", new_args.description, true)
        message.channel.send(myInfo)
    }
}

module.exports = OsrsClannieCallistoCommand;

