const commando = require('discord.js-commando');
const discord = require('discord.js');

class FlashpowderfactoryCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'flashpowderfactory',
            group: 'events',
            memberName: 'flashpowderfactory',
            description: 'trouble brewing event details',
            examples: ['./flashpowderfactory "28 September" "20:00" "Describe where to meet and a basic premise here"'],
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
        .setTitle(":gear: __**Flash Powder Factory Event**__ :gear:")
        .setColor(0x4F2095)
        .setFooter("Please remember that this is completely for fun! This is a minigame that uses Agility, Thieving and Herblore, requiring players to collect the reagents for making flash powder and take them to the powder making machines, while traversing obstacles and pickpocketing other players (or being pickpocketed themselves). Reward points from the game can be swapped for experience or parts of the factory outfit. ", "https://vignette.wikia.nocookie.net/runescape2/images/c/c4/Mg_roguesden.jpg/revision/latest?cb=20080728143017")
        .setThumbnail("https://vignette.wikia.nocookie.net/runescape2/images/c/c4/Mg_roguesden.jpg/revision/latest?cb=20080728143017")
        .addField("\u200b","**Date:** " + args.date + "\n**Time:** " + args.time + "\n**Host: **" + message.author +"\n**World:** W23")
        .addField("\u200b", "**Requirements:**\n75 Theiving & Agility \n50 Herblore  ", true)
        message.channel.send(myInfo);
    }
}

module.exports = FlashpowderfactoryCommand;
