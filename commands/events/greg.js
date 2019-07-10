const commando = require('discord.js-commando');
const discord = require('discord.js');

class GregCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'greg',
            group: 'events',
            memberName: 'greg',
            description: 'Greg event details',
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
        .setTitle("⚔️ __**GREG MASS**__ ⚔️")
        .setColor(0x00AE86)
        .setFooter("Please remember that this is completely for fun! If you are nervous, please feel free to PM me. All loot will be traded to myself and split equally between attendees.", "https://runescape.wiki/images/7/71/Gregorovic.png?d97e5")
        .setThumbnail("https://runescape.wiki/images/7/71/Gregorovic.png?d97e5")
        .addField("\u200b","📅 **Date:** " + args.date + "\n🕘 **Time:** " + args.time + " game-time\n🌍 **World:** 23\n**Host:** " + message.author)
        .addField("\u200b", "[Strategies for Gregorovic](https://runescape.wiki/w/Gregorovic/Strategies)\n\nProtect range, and try not to step on the shadowed spots on the ground")
        .addField("\u200b", "**Requirements:**\n80 prayer\n40 Sliske killcount", true)
        .addField("\u200b", "**Recommended:**\nAntipoison, Venomblood perk, or Irit incense\nFood\nPrayer potions", true)
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = GregCommand;
