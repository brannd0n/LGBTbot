const commando = require('discord.js-commando');
const discord = require('discord.js');

class NexCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'nex',
            group: 'events',
            memberName: 'nex',
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
                }
            ]
        });
    }

    async run(message, args)
    {
        message.delete();
        var myInfo = new discord.RichEmbed()
        .setTitle("⚔️ __**NEX MASS**__ ⚔️")
        .setColor(0x00AE86)
        .setFooter("Please remember that this is completely for fun! If you are nervous, please feel free to PM me. All loot will be traded to myself and split equally between attendees.", "https://runescape.wiki/images/thumb/f/fe/Nex.png/500px-Nex.png?67c8a")
        .setThumbnail("https://runescape.wiki/images/thumb/f/fe/Nex.png/500px-Nex.png?67c8a")
        .addField("\u200b","📅 **Date:** " + args.date + "\n🕘 **Time:** " + args.time + " game-time\n🌍 **World:** 23\n**Host:** " + message.author)
        .addField("\u200b", "[Strategies for Nex](https://runescape.wiki/w/Nex/Strategies)\nPlease try not to bleed Nex during blood phase.")
        .addField("\u200b", "**Requirements:**\nA charged frozen key\nEither 40 Zaros kills or Ancient ceremonial robes", true)
        .addField("\u200b", "**Recommended:**\nTwo combat styles \nFood \nPrayer Potions \nA trip to glacor caves", true)
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = NexCommand;
