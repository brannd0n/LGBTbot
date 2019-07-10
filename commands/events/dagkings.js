const commando = require('discord.js-commando');
const discord = require('discord.js');

class DagkingsCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'dagkings',
            group: 'events',
            memberName: 'dagkings',
            description: 'Dag Kings event details',
            args: [
                {
                    key: 'date',
                    prompt: 'What date is the event? (e.g. Friday 28 September)',
                    type: 'string'
                },
                {
                    key: 'time',
                    prompt: 'What time is the event? (e.g. 21:00)',
                    type: 'string'
                }
            ]
        });
    }

    async run(message, args)
    {
        message.delete();
        var myInfo = new discord.RichEmbed()
        .setTitle("⚔️ __**DAGANNOTH KINGS MASS**__ ⚔️")
        .setColor(0x00AE86)
        .setFooter("Please remember that this is completely for fun! Attack the King that's weak to the combat style you bring! That's all the advice you need but if you are nervous, please feel free to PM me. All loot will be traded to myself and split equally between attendees.", "https://runescape.wiki/images/thumb/b/b4/Dagannoth_Supreme.png/800px-Dagannoth_Supreme.png?8fbad")
        .setThumbnail("https://runescape.wiki/images/thumb/b/b4/Dagannoth_Supreme.png/800px-Dagannoth_Supreme.png?8fbad")
        .addField("\u200b","📅 **Date:** " + args.date + "\n🕘 **Time:** " + args.time + " game-time\n🌍 **World:** 23\n**Host:** " + message.author)
        .addField("\u200b", "[Strategies for Dagannoth Kings](https://runescape.wiki/w/Dagannoth_Kings/Strategies)")
        .addField("\u200b", "**Requirements:**\nNone", true)
        .addField("\u200b", "**Recommended:**\nDag Kings TeleTab\n90+ Herb for extremes\nAnything above barrows armour", true)
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = DagkingsCommand;
