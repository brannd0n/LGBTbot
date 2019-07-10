const commando = require('discord.js-commando');
const discord = require('discord.js');

class StealingcreationCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'stealingcreation',
            group: 'events',
            memberName: 'stealingcreation',
            description: 'Stealing Creation event details',
            examples: ['./stealingcreation "28 September" "20:00" "Describe where to meet and a basic premise here"'],
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
        .setTitle(":hammer_pick:  __**Stealing Creation Event**__ :hammer_pick: ")
        .setColor(0x4F2095)
        .setFooter("Please remember that this is completely for fun! This is a friendly team-based minigame where teams compete for the most points. Players make and use armour and weaponry to engage in combat, or gain further points through item creation and refinement.", "https://vignette.wikia.nocookie.net/runescape2/images/6/6a/Mg_stealingcreation.jpg/revision/latest?cb=20081111151006")
        .setThumbnail("https://vignette.wikia.nocookie.net/runescape2/images/6/6a/Mg_stealingcreation.jpg/revision/latest?cb=20081111151006")
        .addField("\u200b","**Date:** " + args.date + "\n**Time:** " + args.time + "\n**Host: **" + message.author +"\n**World:** W23")
        message.channel.send(myInfo);
    }
}

module.exports = StealingcreationCommand;
