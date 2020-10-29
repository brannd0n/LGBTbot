const commando = require('discord.js-commando');
const discord = require('discord.js');

class HeistCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'heist',
            group: 'events',
            memberName: 'heist',
            description: 'Heist event details',
            examples: ['./heist "28 September" "20:00" "Describe where to meet and a basic premise here"'],
            args: [
                {
                    key: 'date',
                    prompt: 'What date is the event? (e.g. 28 September)',
                    type: 'string'
                },
                {
                    key:'time',
                    prompt: 'What time is the event at? (In game time)',
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
        .setTitle(":spy:  __**Heist Event**__ :spy: ")
        .setColor(0x4F2095)
        .setFooter("Please remember that this is completely for fun! This minigame involves a team of robbers try to secure loot undetected while another team of guards attempt to uncover and arrest the robbers before time runs out.", "https://vignette.wikia.nocookie.net/runescape2/images/d/df/Reward_points.png/revision/latest?cb=20170130174417")
        .setThumbnail("https://runescape.wiki/images/d/df/Reward_points.png")
        .addField("\u200b","**Date:** " + new_args.date + "\n**Time:** " + new_args.time + "\n**Host: **" + message.author +"\n**World:** W23")
        .addField("\u200b", new_args.description, true)
      message.channel.send(myInfo);
    }
}

module.exports = HeistCommand;
