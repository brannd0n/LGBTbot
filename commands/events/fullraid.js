const commando = require('discord.js-commando');
const discord = require('discord.js');

class FullRaidCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'fullraid',
            group: 'events',
            memberName: 'fullraid',
            description: 'Full raid event details',
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
        .setTitle("⚔️ __**Full Raid**__ ⚔️")
        .setColor(0x00AE86)
        .setFooter("Please remember that this is completely for fun! Please feel free to PM me if you have any questions.", "https://runescape.wiki/images/b/b3/Beastmaster_Durzag.png?51849")
        .setThumbnail("https://runescape.wiki/images/7/76/Raids_concept_art.png?92ae9")
        .addField("\u200b","📅 **Date:** " + new_args.date + "\n🕘 **Time:** " + new_args.time + " game-time\n🌍 **World:** 23" + "\n**Host: **" + "<@!"+ message.author.id +">")
        .addField("\u200b", "[Strategies for Beastmaster](https://runescape.wiki/w/Beastmaster_Durzag/Strategies)")
        .addField("\u200b", "[Strategies for Yakamaru](https://runescape.wiki/w/Yakamaru/Strategies)")
        .addField('\u200b', '\u200b')
        .addField("\u200b", new_args.description, true)
        message.channel.send(myInfo)
    }
}

module.exports = FullRaidCommand;
