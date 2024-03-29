const commando = require('discord.js-commando');
const discord = require('discord.js');

class ClannieBeastmasterCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'clanniebeastmaster',
            group: 'events',
            memberName: 'clanniebeastmaster',
            description: 'Clannie Beastmaster event details',
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
        const arg_string = Object.values(args).map(val => val);
        const updated_args = arg_string.join(' ').split(']').join(' ').split('[').slice(1);
        const filtered = updated_args.filter(el => el && el != '');
        const new_args = {
            date: filtered[0] || '',
            time:  filtered[1] || '',
            host:  filtered[2] || '',
            description: filtered[3] || '',
        };
        
        message.delete();
        var myInfo = new discord.MessageEmbed()
        .setTitle("⚔️ __**Beastmaster Durzag**__ ⚔️")
        .setColor(0x00AE86)
        .setFooter("Please remember that this is completely for fun! Please feel free to PM me if you have any questions.", "https://runescape.wiki/images/b/b3/Beastmaster_Durzag.png?51849")
        .setThumbnail("https://runescape.wiki/images/b/b3/Beastmaster_Durzag.png?51849")
        .addField("\u200b","📅 **Date:** " + new_args.date + "\n🕘 **Time:** " + new_args.time + " game-time\n🌍 **World:** 23\n**Host:** " + new_args.host)
        .addField("\u200b", "[Strategies for Beastmaster](https://runescape.wiki/w/Beastmaster_Durzag/Strategies)")
        .addField("\u200b", "**Requirements:**\nTier 60 weapons/armor \nBeast of Burden \nAccess to protection prayers/curses \nBuff potion(s)", true)
        .addField("\u200b", "**Recommended:**\nTier 75 weapons and armor \nOverloads \nExcalibur \nRing of Death \nSign of life", true)
        .addField("\u200b", new_args.description, true)
        message.channel.send(myInfo)
    }
}

module.exports = ClannieBeastmasterCommand;
