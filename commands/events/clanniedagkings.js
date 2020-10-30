const commando = require('discord.js-commando');
const discord = require('discord.js');

class ClannieDagkingsCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'clanniedagkings',
            group: 'events',
            memberName: 'clanniedagkings',
            description: 'Clannie Dag Kings event details',
            args: [
                {
                    key: 'date',
                    prompt: 'What date is the event? (e.g. Friday 28 September)',
                    type: 'string'
                },
                {
                    key: 'host',
                    prompt: 'Who is the host?',
                    type: 'string'
                },
                {
                    key: 'time',
                    prompt: 'What time is the event? (e.g. 21:00)',
                    type: 'string'
                },
                                {
                    key: 'description',
                    prompt: 'Describe the event.',
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
            host:  filtered[1] || '',
            time:  filtered[2] || '',
            description:  filtered[3] || '',

        };
        
        message.delete();
        var myInfo = new discord.MessageEmbed()
        .setTitle("⚔️ __**DAGANNOTH KINGS MASS**__ ⚔️")
        .setColor(0x00AE86)
        .setFooter("Please remember that this is completely for fun! Attack the King that's weak to the combat style you bring! That's all the advice you need but if you are nervous, please feel free to PM me. All loot will be traded to myself and split equally between attendees.", "https://runescape.wiki/images/thumb/b/b4/Dagannoth_Supreme.png/800px-Dagannoth_Supreme.png?8fbad")
        .setThumbnail("https://runescape.wiki/images/thumb/b/b4/Dagannoth_Supreme.png/800px-Dagannoth_Supreme.png?8fbad")
        .addField("\u200b","📅 **Date:** " + new_args.date + "\n🕘 **Time:** " + new_args.time + " game-time\n🌍 **World:** 23\n**Host:** " + new_args.host)
        .addField("\u200b", "[Strategies for Dagannoth Kings](https://runescape.wiki/w/Dagannoth_Kings/Strategies)")
        .addField("\u200b", "**Requirements:**\nNone", true)
        .addField("\u200b", "**Recommended:**\nDag Kings TeleTab\n90+ Herb for extremes\nAnything above barrows armour", true)
        .addField('\u200b', '\u200b')
        .addField("\u200b",new_args.description, true);
        message.channel.send(myInfo)
    }
}

module.exports = ClannieDagkingsCommand;
