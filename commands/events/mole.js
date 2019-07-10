const commando = require('discord.js-commando');
const discord = require('discord.js');

class MoleCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'mole',
            group: 'events',
            memberName: 'mole',
            description: 'Giant Mole event details',
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
        .setTitle("⚔️ __**GIANT MOLE MASS**__ ⚔️")
        .setColor(0x00AE86)
        .setFooter("Please remember that this is completely for fun! Just follow the mole and hit her. That's all the advice you need but if you are nervous, please feel free to PM me. All loot will be traded to myself and split equally between attendees.", "https://runescape.wiki/images/thumb/f/fd/Giant_Mole.png/240px-Giant_Mole.png?0e85e")
        .setThumbnail("https://runescape.wiki/images/thumb/f/fd/Giant_Mole.png/240px-Giant_Mole.png?0e85e")
        .addField("\u200b","📅 **Date:** " + args.date + "\n🕘 **Time:** " + args.time + " game-time\n🌍 **World:** 23\n**Host:** " + message.author)
        .addField("\u200b", "[Strategies for Giant mole](https://runescape.wiki/w/Giant_mole/Strategies)")
        .addField("\u200b", "**Requirements:**\nNone", true)
        .addField("\u200b", "**Recommended:**\nFood \n Prayer Potions", true)
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = MoleCommand;
