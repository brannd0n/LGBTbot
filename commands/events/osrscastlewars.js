const commando = require('discord.js-commando');
const discord = require('discord.js');

class OsrscastlewarsCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'osrscastlewars',
            group: 'events',
            memberName: 'osrscastlewars',
            description: 'Castle wars event details',
            examples: ['./castlewars "28 September" "20:00" "Describe where to meet and a basic premise here"'],
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
                    key: 'world',
                    prompt: 'What world is it on?',
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
        message.delete();
        var myInfo = new discord.RichEmbed()
        .setTitle("🏰 __**Castle Wars Event**__ 🏰")
        .setColor(0x4F2095)
        .setFooter("Please remember that this is completely for fun! We will have a friendly game of Capture the Flag in which two teams try to bring the opponent's flag back to their base.", "https://oldschool.runescape.wiki/images/5/51/Castle_Wars_logo.png?de0ce")
        .setThumbnail("https://oldschool.runescape.wiki/images/5/51/Castle_Wars_logo.png?de0ce")
        .addField("\u200b","📅 **Date:** " + args.date.replace(/[\u201C\u201D]/g, "\"") + "\n🕘 **Time:** " + args.time.replace(/[\u201C\u201D]/g, "\"") + " game-time\n🌍 **World:** " + args.world.replace(/[\u201C\u201D]/g, "\"") + "\n**Host:** " + message.author)
        .addField("\u200b", args.description.replace(/[\u201C\u201D]/g, "\""), true)
      message.channel.send(myInfo);
    }
}

module.exports = OsrscastlewarsCommand;
