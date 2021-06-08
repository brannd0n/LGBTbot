const commando = require('discord.js-commando');
const discord = require('discord.js');

class CoopslayerCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'coopslayer',
            group: 'events',
            memberName: 'coopslayer',
            description: 'Elite dungeon event details',
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
        .setTitle("⚔️ __**Co-op Slayer Event**__ ⚔️")
        .setColor(0x00AE86)
        .setFooter("Please remember that this is completely for fun! Please feel free to PM me. All loot will be traded to me and split equally between attendees.", "https://runescape.wiki/images/6/6c/Co-op_Slayer_points.png?a49d1")
        .setThumbnail("https://runescape.wiki/images/6/6c/Co-op_Slayer_points.png?a49d1")
        .addField("\u200b","📅 **Date:** " + new_args.date + "\n🕘 **Time:** " + new_args.time + " game-time\n🌍 **World:** 23\n**Host: **" + "<@!"+ message.author.id +">")
        .addField("\u200b", "**Requirements:**\nSlayer gem and/or slayer helm \nNo active slayer task", true)
        .addField("\u200b", "**Recommended:**\nTeleports to slayer masters/creatures \nViP tickets", true)
        .addField("\u200b", new_args.description, true)
        message.channel.send(myInfo)
    }
}

module.exports = CoopslayerCommand;
