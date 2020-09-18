const commando = require('discord.js-commando');
const discord = require('discord.js');

class GreatorbprojectCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'greatorbproject',
            group: 'events',
            memberName: 'greatorbproject',
            description: 'Great Orb Project event details',
            examples: ['./greatorbproject "28 September" "20:00" "Describe where to meet and a basic premise here"'],
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
        var myInfo = new discord.RichEmbed()
        .setTitle(":sparkles: __**Great Orb Project Event**__ :sparkles:")
        .setColor(0x4F2095)
        .setFooter("Please remember that this is completely for fun! We will have two friendly teams compete to collect orbs while preventing the other team from collecting theirs. Winners of each round gain Runecrafting rewards.", "https://vignette.wikia.nocookie.net/runescape2/images/d/da/Mg_orbproject.jpg/revision/latest?cb=20080812130710")
        .setThumbnail("https://runescape.wiki/images/thumb/9/9b/Master_runecrafter_hat_detail.png/261px-Master_runecrafter_hat_detail.png")
        .addField("\u200b","**Date:** " + new_args.date + "\n**Time:** " + new_args.time + "\n**Host: **" + message.author +"\n**World:** W23")
        .addField("\u200b", "**Requirements:** \n50 Runecrafting  ", true)
        .addField("\u200b",new_args.description, true);
        message.channel.send(myInfo);
    }
}

module.exports = GreatorbprojectCommand;
