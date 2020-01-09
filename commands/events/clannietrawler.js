const commando = require('discord.js-commando');
const discord = require('discord.js');

class ClannieTrawlerCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'clannietrawler',
            group: 'events',
            memberName: 'clannietrawler',
            description: 'fishing trawler event details',
            examples: ['./clannietrawler "28 September" "20:00"'],
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
                {
                    key: 'host',
                    prompt: 'Who is the host?',
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
        .setThumbnail("https://runescape.wiki/images/thumb/b/b2/Raw_manta_ray_detail.png/237px-Raw_manta_ray_detail.png?668eb")
        .addField("\u200b","**Date:** " + args.date + "\n**Time:** " + args.time + "\n**Host: **" + args.host +"\n**World:** W23")
      message.channel.send(myInfo);
    }
}

module.exports = ClannieTrawlerCommand;
