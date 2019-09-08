const commando = require('discord.js-commando');
const discord = require('discord.js');

class BeastmasterCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'beastmaster',
            group: 'events',
            memberName: 'beastmaster',
            description: 'Beastmaster event details',
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
        .setTitle("⚔️ __**Beastmaster Durzag**__ ⚔️")
        .setColor(0x00AE86)
        .setFooter("Please remember that this is completely for fun! Please feel free to PM me if you have any questions.", "https://runescape.wiki/images/b/b3/Beastmaster_Durzag.png?51849")
        .setThumbnail("https://runescape.wiki/images/b/b3/Beastmaster_Durzag.png?51849")
        .addField("\u200b","📅 **Date:** " + args.date + "\n🕘 **Time:** " + args.time + " game-time\n🌍 **World:** 23\n**Host:** " + message.author)
        .addField("\u200b", "[Strategies for Beastmaster](https://runescape.wiki/w/Beastmaster_Durzag/Strategies)")
        .addField("\u200b", "**Requirements:**\nTier 60 weapons/armor \nBeast of Burden \nAccess to protection prayers/curses \nBuff potion(s)", true)
        .addField("\u200b", "**Recommended:**\nTier 75 weapons and armor \nOverloads \nExcalibur \nRing of Death \nSign of life", true)
        .addField("\u200b", args.description, true)
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = BeastmasterCommand;
