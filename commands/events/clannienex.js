const commando = require('discord.js-commando');
const discord = require('discord.js');

class ClannieNexCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'clannienex',
            group: 'events',
            memberName: 'clannienex',
            description: 'Nex event details',
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
        .setTitle("⚔️ __**NEX MASS**__ ⚔️")
        .setColor(0x00AE86)
        .setFooter("Please remember that this is completely for fun! If you are nervous, please feel free to PM me. All loot will be traded to myself and split equally between attendees.", "https://runescape.wiki/images/thumb/f/fe/Nex.png/500px-Nex.png?67c8a")
        .setThumbnail("https://runescape.wiki/images/thumb/f/fe/Nex.png/500px-Nex.png?67c8a")
        .addField("\u200b","📅 **Date:** " + new_args.date + "\n🕘 **Time:** " + new_args.time + " game-time\n🌍 **World:** 23\n**Host:** " + new_args.host)
        .addField("\u200b", "[Strategies for Nex](https://runescape.wiki/w/Nex/Strategies)\nPlease try not to bleed Nex during blood phase.")
        .addField("\u200b", "**Requirements:**\nA charged frozen key\nEither 40 Zaros kills or Ancient ceremonial robes", true)
        .addField("\u200b", "**Recommended:**\nTwo combat styles \nFood \nPrayer Potions \nA trip to glacor caves", true)
        message.channel.send(myInfo)
    }
}

module.exports = ClannieNexCommand;
