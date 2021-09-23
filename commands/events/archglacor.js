const commando = require('discord.js-commando');
const discord = require('discord.js');

class ArchglacorCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'archglacor',
            group: 'events',
            memberName: 'archglacor',
            description: 'Arch-Glacor event details',
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
            description:  filtered[2] || '\u200B',
        }; 
        
        message.delete();
        var myInfo = new discord.MessageEmbed()
        .setTitle("⚔️ __**Arch-Glacor**__ ⚔️")
        .setColor(0x00AE86)
        .setFooter("Please remember that this is completely for fun! Please feel free to PM me. All loot will be traded to me and split equally between attendees.", "https://runescape.wiki/images/4/4e/Arch-Glacor.png?ac3e5")
        .setThumbnail("https://runescape.wiki/images/4/4e/Arch-Glacor.png?ac3e5")
        .addField("\u200b","📅 **Date:** " + new_args.date + "\n🕘 **Time:** " + new_args.time + " game-time\n🌍 **World:** 23\n**Host: **" + "<@!"+ message.author.id +">")
        .addField("\u200b", "[Strategies for Arch-Glacor](https://runescape.wiki/w/Arch-Glacor/Strategies)")
        .addField("\u200b", new_args.description, true)
        message.channel.send(myInfo)
    }
}

module.exports = ArchglacorCommand;
