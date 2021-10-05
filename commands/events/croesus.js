const commando = require('discord.js-commando');
const discord = require('discord.js');

class CroesusCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'croesus',
            group: 'events',
            memberName: 'croesus',
            description: 'Croesus event details',
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
            description:  filtered[2] || '\u200B',
        }; 
        
        message.delete();
        var myInfo = new discord.MessageEmbed()
        .setTitle("__**Croesus**__")
        .setColor(0x00AE86)
        .setFooter("Please remember that this is completely for fun! Please feel free to PM me. All loot will be traded to me and split equally between attendees.", "https://runescape.wiki/images/8/8e/Croesus.png?b260c")
        .setThumbnail("https://runescape.wiki/images/8/8e/Croesus.png?b260c")
        .addField("\u200b","📅 **Date:** " + new_args.date + "\n🕘 **Time:** " + new_args.time + " game-time\n🌍 **World:** 23\n**Host: **" + "<@!"+ message.author.id +">")
        .addField("\u200b", "[Strategies for Croesus](https://runescape.wiki/w/Croesus/Strategies)")
        .addField("\u200b", "**Requirements:**\nProtean logs, Orthen Furnace Core or the new woodcutting off-hand \n5 Super restores \nMinimum 15 empty inventory spaces \nA pickaxe, Net and Hatchet (toolbelt is fine, augmented is ideal)", true)
        .addField("\u200b", "**Recommended:**\n- Level 80+ in Fishing, Hunter, Woodcutting & Mining \nElite skilling outfit for your chosen starting plot \nAugmented tools with honed perk \n      - Pickaxe\n     - Hatchet \n        - Rod-O-Matic / Enhanced Rod-O-Matic \nMagic Butterfly Net \nBladed Dive \nDouble surge \nFreedom \nArtificer's Measure \nRunes for Crystal Mask spell \nUpgraded Pontifex shadow Ring \nGrace of the Elves \nStat boosting potions \nSkilling Auras \nGatherer's cape", true)
        .addField('\u200b', '\u200b')
        .addField("\u200b", new_args.description, true)
        message.channel.send(myInfo)
    }
}

module.exports = CroesusCommand;
