const commando = require('discord.js-commando');
const discord = require('discord.js');

class HardgraarCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'hardgraar',
            group: 'events',
            memberName: 'hardgraar',
            description: 'Hard Mode Graardor event details',
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
        .setTitle("⚔️ __**HARDMODE Graardor MASS**__ ⚔️")
        .setColor(0x00AE86)
        .setFooter("Please remember that this is completely for fun! Just hit Graardor and avoid the specials. That's all the advice you need but if you are nervous, please feel free to PM me. All loot will be traded to myself and split equally between attendees.", "https://runescape.wiki/images/thumb/b/b8/General_Graardor.png/375px-General_Graardor.png?3b673")
        .setThumbnail("https://runescape.wiki/images/thumb/b/b8/General_Graardor.png/375px-General_Graardor.png?3b673")
        .addField("\u200b","📅 **Date:** " + args.date + "\n🕘 **Time:** " + args.time + " game-time\n🌍 **World:** 23\n**Host:** " + message.author)
        .addField("\u200b", "[Hard mode strategies for General Graardor](https://runescape.wiki/w/General_Graardor/Strategies/Hard_mode)")
        .addField("\u200b", "**Requirements:**\nTroll Stronghold \n70 Strength", true)
        .addField("\u200b", "**Recommended:**\nTier 70 Armour or higher \n Overloads \n Soulsplit", true)
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = HardgraarCommand;