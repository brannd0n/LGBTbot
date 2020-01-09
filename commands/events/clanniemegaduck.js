const commando = require('discord.js-commando');
const discord = require('discord.js');

class ClannieMegaDuckCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'clanniemegaduck',
            group: 'events',
            memberName: 'clanniemegaduck',
            description: 'clannie megaduck event details',
            args: [
                {
                    key: 'date',
                    prompt: 'What date is the event? (e.g. Friday 28 September)',
                    type: 'string'
                },
                {
                    key: 'time',
                    prompt: 'What time is the event? (e.g. 21:00)',
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
        .setTitle("⚔️ __**Mega Duck MASS**__ ⚔️")
        .setColor(0x00AE86)
        .setFooter("Please remember that this is completely for fun! We will be voice chatting during this mass to give out calls and such. If you are nervous, please feel free to PM me.", "https://runescape.wiki/images/a/a5/Mega_Duck.png?75e79")
        .setThumbnail("https://runescape.wiki/images/a/a5/Mega_Duck.png?75e79")
        .addField("\u200b","📅 **Date:** " + args.date + "\n🕘 **Time:** " + args.time + " game-time\n🌍 **World:** 23\n**Host:** " + args.host)
        .addField("\u200b", "[Strategies for Mega Duck (wiki)](https://runescape.wiki/w/Mega_Duck)")
        .addField("\u200b", "**Recommended:**\nBread crumbs", true)
        message.channel.send(myInfo);
    }
}

module.exports = ClannieMegaDuckCommand;
