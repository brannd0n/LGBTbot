const commando = require('discord.js-commando');
const discord = require('discord.js');

class MegaDuckCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'megaduck',
            group: 'events',
            memberName: 'megaduck',
            description: 'megaduck event details',
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
                        key: 'description',
                        prompt: 'Describe the event',
                        type: 'string'
                    }
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
            description: filtered[2] || '\u200B',
        };
        
        message.delete();
        var myInfo = new discord.RichEmbed()
        .setTitle("⚔️ __**Mega Duck MASS**__ ⚔️")
        .setColor(0x00AE86)
        .setFooter("Please remember that this is completely for fun! We will be voice chatting during this mass to give out calls and such. If you are nervous, please feel free to PM me.", "https://runescape.wiki/images/a/a5/Mega_Duck.png?75e79")
        .setThumbnail("https://runescape.wiki/images/a/a5/Mega_Duck.png?75e79")
        .addField("\u200b","📅 **Date:** " + new_args.date + "\n🕘 **Time:** " + new_args.time + " game-time\n🌍 **World:** 23\n**Host:** " + message.author)
        .addField("\u200b", "[Strategies for Mega Duck (wiki)](https://runescape.wiki/w/Mega_Duck)")
        .addField("\u200b", "**Recommended:**\nBread crumbs", true)
        .addField("\u200b", new_args.description, true)
        message.channel.send(myInfo);
    }
}

module.exports = MegaDuckCommand;
