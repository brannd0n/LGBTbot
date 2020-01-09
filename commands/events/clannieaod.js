const commando = require('discord.js-commando');
const discord = require('discord.js');

class ClannieAodCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'clannieaod',
            group: 'events',
            memberName: 'clannieaod',
            description: 'Clannie Hosted Angel of Death event details',
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
        .setTitle("⚔️ __**Angel of Death Event**__ ⚔️")
        .setColor(0x00AE86)
        .setFooter("Please remember that this is completely for fun! If you are nervous, please feel free to PM me. All loot will be traded to myself and split equally between attendees.", "https://runescape.wiki/images/2/2b/Nex_%28Angel_of_Death%29.png?00050")
        .setThumbnail("https://runescape.wiki/images/2/2b/Nex_%28Angel_of_Death%29.png?00050")
        .addField("\u200b","📅 **Date:** " + args.date + "\n🕘 **Time:** " + args.time + " game-time\n🌍 **World:** 23\n**Host:** " + args.host)
        .addField("\u200b", "[Hard mode strategies for Angel of Death](https://runescape.wiki/w/Nex:_Angel_of_Death/Strategies)")
        .addField("\u200b", "**Requirements:**\nFreedom \nAtleast Tier 80 Weapons and Armour \nAntipoision ++ \nMagic or Range Style \nOverloads \nBeast of Burden \nAtleast 71 Prayer", true)
        .addField("\u200b", "**Recommended:**\nVenomblood Perk \nDouble Surge/Escape \nTier 95 Prayers \nVulnerability \nWeapon Poison++ \nManiacal/Reckless Aura \nSign of Life", true)
        .addField("\u200b", args.description, true);
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = ClannieAodCommand;
