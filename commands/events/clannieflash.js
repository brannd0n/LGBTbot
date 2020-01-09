const commando = require('discord.js-commando');
const discord = require('discord.js');

class ClannieFlashCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'clannieflash',
            group: 'events',
            memberName: 'clannieflash',
            description: 'flash powder factory event details',
            examples: ['./clannieflash "28 September" "20:00"'],
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
                    key: 'host',
                    prompt: 'Who is the host?',
                    type: 'string'
                }
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
        .setThumbnail("https://runescape.wiki/images/thumb/8/8f/Factory_top_detail.png/261px-Factory_top_detail.png?152ce")
        .addField("\u200b","**Date:** " + args.date + "\n**Time:** " + args.time + "\n**Host: **" + args.host +"\n**World:** W23")
        .addField("\u200b", "**Requirements:**\n75 Theiving & Agility \n50 Herblore  ", true)
        message.channel.send(myInfo);
    }
}

module.exports = ClannieFlashCommand;
