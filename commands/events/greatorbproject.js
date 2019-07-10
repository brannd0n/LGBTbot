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
                    prompt: 'What date is the capping event? (e.g. 28 September)',
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
        message.delete();
        var myInfo = new discord.RichEmbed()
        .setTitle(":sparkles: __**Great Orb Project Event**__ :sparkles:")
        .setColor(0x4F2095)
        .setFooter("Please remember that this is completely for fun! We will have two friendly teams compete to collect orbs while preventing the other team from collecting theirs. Winners of each round gain Runecrafting rewards.", "https://vignette.wikia.nocookie.net/runescape2/images/d/da/Mg_orbproject.jpg/revision/latest?cb=20080812130710")
        .setThumbnail("https://vignette.wikia.nocookie.net/runescape2/images/d/da/Mg_orbproject.jpg/revision/latest?cb=20080812130710")
        .addField("\u200b","**Date:** " + args.date + "\n**Time:** " + args.time + "\n**Host: **" + message.author +"\n**World:** W23")
        .addField("\u200b", "**Requirements:** \n50 Runecrafting  ", true)
        message.channel.send(myInfo);
    }
}

module.exports = GreatorbprojectCommand;
