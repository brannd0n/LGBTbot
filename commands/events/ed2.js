const commando = require('discord.js-commando');
const discord = require('discord.js');

class Ed2Command extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'ed2',
            group: 'events',
            memberName: 'ed2',
            description: 'Elite dungeon 2 event details',
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
        .setTitle("⚔️ __**Dragonkin Laboratory Event**__ ⚔️")
        .setColor(0x00AE86)
        .setFooter("Please remember that this is completely for fun! Please feel free to PM me. All loot will be traded to me and split equally between attendees.", "https://runescape.wiki/images/thumb/a/a3/Black_stone_dragon.png/1200px-Black_stone_dragon.png?be0ef")
        .setThumbnail("https://runescape.wiki/images/thumb/a/a3/Black_stone_dragon.png/1200px-Black_stone_dragon.png?be0ef")
        .addField("\u200b","📅 **Date:** " + args.date + "\n🕘 **Time:** " + args.time + " game-time\n🌍 **World:** 23\n**Host:** " + message.author)
        .addField("\u200b", "[Strategies for Dragonkin Laboratory](https://runescape.wiki/w/Dragonkin_Laboratory/Strategies)")
        .addField("\u200b", "**Requirements:**\nAt least Tier 70 weapon and armour \nSuper Antifires or Reg Antifires \nBeast of Burden \nAt least 43 Prayer", true)
        .addField("\u200b", "**Recommended:**\nTier 80 weapons or higher \n Supreme Overload Salves \nMobile Perk \nRing of Death", true)
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = Ed2Command;