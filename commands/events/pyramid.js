const commando = require('discord.js-commando');
const discord = require('discord.js');

class PyramidCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'pyramid',
            group: 'events',
            memberName: 'pyramid',
            description: 'pyramid plunder event details',
            examples: ['./pyramid "28 September" "20:00" "Describe where to meet and a basic premise here"'],
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
        .setTitle("__**Pyramid Plunder**__")
        .setColor(0x4F2095)
        .setFooter("Please remember that this is completely for fun!", "https://oldschool.runescape.wiki/images/0/01/Pyramid_Plunder_logo.jpg?70655)
        .setThumbnail("https://oldschool.runescape.wiki/images/0/01/Pyramid_Plunder_logo.jpg?70655")
        .addField("\u200b","**Date:** " + args.date + "\n**Time:** " + args.time + "\n**Host: **" + message.author +"\n**World:** W523")
        .addField("\u200b", args.description, true)
        message.channel.send(myInfo);
    }
}

module.exports = PyramidCommand;
