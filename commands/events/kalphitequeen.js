const commando = require('discord.js-commando');
const discord = require('discord.js');

class KalphiteQueenCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'kalphitequeen',
            group: 'events',
            memberName: 'kalphitequeen',
            description: 'Kalphite Queen event details',
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
                }
            ]
        });
    }

    async run(message, args)
    {
        message.delete();
        var myInfo = new discord.RichEmbed()
        .setTitle("⚔️ __**Kalphite Queen MASS**__ ⚔️")
        .setColor(0x00AE86)
        .setFooter("Please remember that this is completely for fun! We will be voice chatting during this mass to give out calls and such. If you are nervous, please feel free to PM me. All loot will be traded to myself and split equally between attendees.", "https://runescape.wiki/images/thumb/5/57/Kalphite_Queen.png/590px-Kalphite_Queen.png?2fb4b")
        .setThumbnail("https://runescape.wiki/images/thumb/5/57/Kalphite_Queen.png/590px-Kalphite_Queen.png?2fb4b")
        .addField("\u200b","📅 **Date:** " + args.date + "\n🕘 **Time:** " + args.time + " game-time\n🌍 **World:** 23\n**Host:** " + message.author)
        .addField("\u200b", "[Strategies for Kalphite Queen (wiki)](https://runescape.wiki/w/Kalphite_Queen/Strategies)")
        .addField("\u200b", "**Requirements:**\nTwo combat styles - Melee and either Range/Magic.", true)
        message.channel.send(myInfo);
    }
}

module.exports = KalphiteQueenCommand;
