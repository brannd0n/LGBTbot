const commando = require('discord.js-commando');
const discord = require('discord.js');

class BarrowSixCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'barrowsix',
            group: 'events',
            memberName: 'barrowsix',
            description: 'Barrows Rise of The Six event details',
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
        const arg_string = Object.values(args).map(val => val);
        const updated_args = arg_string.join(' ').split(']').join(' ').split('[').slice(1);
        const filtered = updated_args.filter(el => el && el != '');
        const new_args = {
            date: filtered[0] || '',
            time:  filtered[1] || '',
            description:  filtered[2] || '',
        };
        
        message.delete();
        var myInfo = new discord.MessageEmbed()
        .setTitle("⚔️ __**Barrows Rise of The Six Event**__ ⚔️")
        .setColor(0x00AE86)
        .setFooter("Please remember that this is completely for fun!", "https://runescape.wiki/images/2/23/Ahrim_the_Blighted_%28Shadow%29.png?7d4ce")
        .setThumbnail("https://runescape.wiki/images/2/23/Ahrim_the_Blighted_%28Shadow%29.png?7d4ce")
        .addField("\u200b","📅 **Date:** " + new_args.date + "\n🕘 **Time:** " + new_args.time + " game-time\n🌍 **World:** 23\n**Host: **" + "<@!"+ message.author.id +">")
        .addField("\u200b", "[Strategies for Barrows Rise of The Six (wiki)](https://runescape.wiki/w/Barrows:_Rise_of_the_Six/Strategies)")
        .addField("\u200b", "**Requirements:**\n95+ Combat stats \nTier 80+ power armour \nTier 90+ two handed weapon \nYak with food \nOverloads", true)
        .addField("\u200b", "**Recommended:**\nTier 90+ Ranged weapon \nTier 95 prayers \nTier 90 power armour \nEnhanced Excalibur \nAdrenaline/Replenishment potions \nDouble Surge, Bladed Dive, Scrimsham of Cruelty/Elements, Reaper necklace ", true)
        .addField("\u200b", new_args.description, true);
        message.channel.send(myInfo)
    }
}

module.exports = BarrowSixCommand;
