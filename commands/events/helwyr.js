const commando = require('discord.js-commando');
const discord = require('discord.js');

class HelwyrCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'helwyr',
            group: 'events',
            memberName: 'helwyr',
            description: 'Helwyr event details',
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
        .setTitle("⚔️ __**HELWYR MASS**__ ⚔️")
        .setColor(0x00AE86)
        .setFooter("Please remember that this is completely for fun! Please get your kill count before the event start time, you keep your kc even though you leave GWD2! Keep moving! Don't stand in the mushrooms! That's all the advice you need but if you are nervous, please feel free to PM me. All loot will be traded to myself and split equally between attendees.", "https://runescape.wiki/images/0/0b/Helwyr.png?b49a5")
        .setThumbnail("https://runescape.wiki/images/0/0b/Helwyr.png?b49a5")
        .addField("\u200b","📅 **Date:** " + args.date + "\n🕘 **Time:** " + args.time + " game-time\n🌍 **World:** 23\n**Host:** " + message.author)
        .addField("\u200b", "[Strategies for Helwyr (wiki)](https://runescape.wiki/w/Helwyr/Strategies)")
        .addField("\u200b", "**Requirements:**\n80 Magic\n40 Seren kill count", true)
        .addField("\u200b", "**Recommended:**\n70+ Prayer (for piety)\n90+ Herb for extremes\nAnything above barrows armour\nAny style works \nHeart tele tabs \nBoB filled with food.", true)
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = HelwyrCommand;