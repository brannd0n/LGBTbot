const commando = require('discord.js-commando');
const discord = require('discord.js');

class FishingtrawlerCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'fishingtrawler',
            group: 'events',
            memberName: 'fishingtrawler',
            description: 'fishing trawler event details',
            examples: ['./fishingtrawler "28 September" "20:00" "Describe where to meet and a basic premise here"'],
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
        .setTitle(":fish: __**Fishing Trawler Event**__ :fish:")
        .setColor(0x4F2095)
        .setFooter("Please remember that this is completely for fun! We will work together to keep a trawler afloat while keeping nets fixed in order to catch as many fish as possible.", "https://vignette.wikia.nocookie.net/runescape2/images/1/14/Mg_fishingtrawler.jpg/revision/latest?cb=20080728145136")
        .setThumbnail("https://vignette.wikia.nocookie.net/runescape2/images/1/14/Mg_fishingtrawler.jpg/revision/latest?cb=20080728145136")
        .addField("\u200b","**Date:** " + args.date + "\n**Time:** " + args.time + "\n**Host: **" + message.author +"\n**World:** W23")
      message.channel.send(myInfo);
    }
}

module.exports = FishingtrawlerCommand;
