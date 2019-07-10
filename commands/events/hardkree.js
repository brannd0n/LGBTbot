const commando = require('discord.js-commando');
const discord = require('discord.js');

class HardkreeCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'hardkree',
            group: 'events',
            memberName: 'hardkree',
            description: 'Hard Mode Kree event details',
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
        .setTitle("⚔️ __**HARDMODE Kree MASS**__ ⚔️")
        .setColor(0x00AE86)
        .setFooter("Please remember that this is completely for fun! Just hit Kree and avoid the specials. That's all the advice you need but if you are nervous, please feel free to PM me. All loot will be traded to myself and split equally between attendees.", "https://runescape.wiki/images/f/fd/Kree%27arra.png")
        .setThumbnail("https://runescape.wiki/images/f/fd/Kree%27arra.png")
        .addField("\u200b","📅 **Date:** " + args.date + "\n🕘 **Time:** " + args.time + " game-time\n🌍 **World:** 23\n**Host:** " + message.author)
        .addField("\u200b", "[Hard mode strategies for Kree'arra](https://runescape.wiki/w/Kree%27arra/Strategies/Hard_mode)")
        .addField("\u200b", "**Requirements:**\nTroll Stronghold \n70 Ranged", true)
        .addField("\u200b", "**Recommended:**\nTier 70 Armour or higher \n Overloads \n Soulsplit", true)
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = HardkreeCommand;
