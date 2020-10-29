const commando = require('discord.js-commando');
const discord = require('discord.js');

class ClannieGregCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'clanniegreg',
            group: 'events',
            memberName: 'clanniegreg',
            description: 'Clannie Greg event details',
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
                },
                {
                    key: 'host',
                    prompt: 'Who is the host?',
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
        };
        
        message.delete();
        var myInfo = new discord.MessageEmbed()
        .setTitle("⚔️ __**GREG MASS**__ ⚔️")
        .setColor(0x00AE86)
        .setFooter("Please remember that this is completely for fun! If you are nervous, please feel free to PM me. All loot will be traded to myself and split equally between attendees.", "https://runescape.wiki/images/7/71/Gregorovic.png?d97e5")
        .setThumbnail("https://runescape.wiki/images/7/71/Gregorovic.png?d97e5")
        .addField("\u200b","📅 **Date:** " + new_args.date + "\n🕘 **Time:** " + new_args.time + " game-time\n🌍 **World:** 23\n**Host:** " + "<@!"+  new_args.host.id +">"t)
        .addField("\u200b", "[Strategies for Gregorovic](https://runescape.wiki/w/Gregorovic/Strategies)\n\nProtect range, and try not to step on the shadowed spots on the ground")
        .addField("\u200b", "**Requirements:**\n80 prayer\n40 Sliske killcount", true)
        .addField("\u200b", "**Recommended:**\nAntipoison, Venomblood perk, or Irit incense\nFood\nPrayer potions", true)
        message.channel.send(myInfo)
    }
}

module.exports = ClannieGregCommand;
