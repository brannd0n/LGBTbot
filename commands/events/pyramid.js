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
        .setTitle("__**Pyramid Plunder**__")
        .setColor(0x4F2095)
        .setFooter("Please remember that this is completely for fun!", "https://oldschool.runescape.wiki/images/0/01/Pyramid_Plunder_logo.jpg?70655")
        .setThumbnail("https://oldschool.runescape.wiki/images/0/01/Pyramid_Plunder_logo.jpg?70655")
        .addField("\u200b","**Date:** " + new_args.date + "\n**Time:** " + new_args.time + "\n**Host: **" + message.author +"\n**World:** W523")
        .addField("\u200b", new_args.description, true)
        message.channel.send(myInfo);
    }
}

module.exports = PyramidCommand;
