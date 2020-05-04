const commando = require('discord.js-commando');
const discord = require('discord.js');

class ZalcanoCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'zalcano',
            group: 'events',
            memberName: 'zalcano',
            description: 'zalcano event details',
            examples: ['./zalcano "28 September" "20:00" "Describe where to meet and a basic premise here"'],
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
        .setTitle(":pick:__**Zalcano**__:pick:")
        .setColor(0x4F2095)
        .setFooter("Please remember that this is completely for fun!", "https://oldschool.runescape.wiki/images/3/30/Zalcano.png?6244d")
        .setThumbnail("https://oldschool.runescape.wiki/images/3/30/Zalcano.png?6244d")
        .addField("\u200b","**Date:** " + args.date + "\n**Time:** " + args.time + "\n**Host: **" + message.author +"\n**World:** W523")
        .addField("\u200b", args.description, true)
        message.channel.send(myInfo);
    }
}

module.exports = ZalcanoCommand;
