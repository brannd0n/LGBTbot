const commando = require('discord.js-commando');
const discord = require('discord.js');

class ClannieEd1Command extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'clannieed1',
            group: 'events',
            memberName: 'clannieed1',
            description: 'Clannie Elite dungeon event details',
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
        .setTitle("⚔️ __**Temple of Aminishi**__ ⚔️")
        .setColor(0x00AE86)
        .setFooter("Please remember that this is completely for fun! Please feel free to PM me. All loot will be traded to me and split equally between attendees.", "https://runescape.wiki/images/e/ea/Seiryu_the_Azure_Serpent.png?932ac")
        .setThumbnail("https://runescape.wiki/images/e/ea/Seiryu_the_Azure_Serpent.png?932ac")
        .addField("\u200b","📅 **Date:** " + args.date + "\n🕘 **Time:** " + args.time + " game-time\n🌍 **World:** 23\n**Host:** " + args.host)
        .addField("\u200b", "[Strategies for Dragonkin Laboratory](https://runescape.wiki/w/Dragonkin_Laboratory/Strategies)")
        .addField("\u200b", "**Requirements:**\nAt least Tier 80+ combat stats \nTier 80+ armour & weapons \nDevotion", true)
        .addField("\u200b", "**Recommended:**\nPrayer renewal \nOverloads \nSuper restore flasks \nRange or Magic Style", true)
        .addField("\u200b", args.description, true)
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = ClannieEd1Command;
