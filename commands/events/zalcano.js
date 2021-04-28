const commando = require('discord.js-commando');
const discord = require('discord.js');
const Timezones = require('../../utils/Timezones');

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
        const arg_string = Object.values(args).map(val => val);
        const updated_args = arg_string.join(' ').split(']').join(' ').split('[').slice(1);
        const filtered = updated_args.filter(el => el && el != '');
        const new_args = {
            date: filtered[0] || '',
            time:  filtered[1] || '',
            description: filtered[2] || '\u200B',
        };
       
        const { 
            time_in_UTC,
            time_in_EDT,
            time_in_PDT,
            time_in_BST,
            time_in_CEST,
            time_in_ACST 
        } = Timezones.get(new_args);


        message.delete();
        var myInfo = new discord.MessageEmbed()
        .setTitle(":pick:__**Zalcano**__:pick:")
        .setColor(0x4F2095)
        .setFooter("Please remember that this is completely for fun!", "https://oldschool.runescape.wiki/images/3/30/Zalcano.png?6244d")
        .setThumbnail("https://oldschool.runescape.wiki/images/3/30/Zalcano.png?6244d")
        .addField("\u200b", `📅 **Date:** ${new_args.date}\n🕘 **Time:**\n${time_in_UTC}\n${time_in_EDT}\n${time_in_PDT}\n${time_in_BST}\n${time_in_CEST}\n${time_in_ACST}\n🌍 **World:** 523\n**Host: ** <@!${message.author.id}>`)
        .addField("\u200b", new_args.description, true)
        message.channel.send(myInfo);
    }
}

module.exports = ZalcanoCommand;
