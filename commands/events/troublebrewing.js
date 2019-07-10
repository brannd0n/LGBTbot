const commando = require('discord.js-commando');
const discord = require('discord.js');

class TroublebrewingCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'troublebrewing',
            group: 'events',
            memberName: 'troublebrewing',
            description: 'trouble brewing event details',
            examples: ['./troublebrewing "28 September" "20:00" "Describe where to meet and a basic premise here"'],
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
        .setTitle("🏰 __**Trouble Brewing Event**__ 🏰")
        .setColor(0x4F2095)
        .setFooter("Please remember that this is completely for fun! We will have Two friendly teams try to brew the most bottles of 'rum'. Experience in a variety of skills can be earned for performing the many tasks needed in the process of 'rum' production.", "https://vignette.wikia.nocookie.net/runescape2/images/b/be/Mg_troublebrewing.jpg/revision/latest?cb=20080728164336")
        .setThumbnail("https://vignette.wikia.nocookie.net/runescape2/images/b/be/Mg_troublebrewing.jpg/revision/latest?cb=20080728164336")
        .addField("\u200b","**Date:** " + args.date + "\n**Time:** " + args.time + "\n**Host: **" + message.author +"\n**World:** W23")
        .addField("\u200b", "**Requirements:**\n40 Cooking and completed Cabin Fever Quest", true)
        message.channel.send(myInfo);
    }
}

module.exports = TroublebrewingCommand;
