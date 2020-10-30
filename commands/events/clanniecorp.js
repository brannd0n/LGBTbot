const commando = require('discord.js-commando');
const discord = require('discord.js');

class ClannieCorpCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'clanniecorp',
            group: 'events',
            memberName: 'clanniecorp',
            description: 'Clannie Corp event details',
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
            host:  filtered[2] || '',
            description: filtered[3] || '',
        };
        
        message.delete();
        var myInfo = new discord.MessageEmbed()
        .setTitle("⚔️ __**Corporeal Beast MASS**__ ⚔️")
        .setColor(0x00AE86)
        .setFooter("Please remember that this is completely for fun! Make sure you bring any type of spear! All other weapons will only do half damage. Just hit Corp and avoid the Dark Energy Core, do **NOT** bring a BoB as Corp will eat it. A games necklace can be used to avoid the wilderness and teleport to the beast's cave. That's all the advice you need but if you are nervous, please feel free to PM me. All loot will be traded to myself and split equally between attendees.", "https://runescape.wiki/images/thumb/5/5c/Corporeal_Beast.png/250px-Corporeal_Beast.png?36acd")
        .setThumbnail("https://runescape.wiki/images/thumb/5/5c/Corporeal_Beast.png/250px-Corporeal_Beast.png?36acd")
        .addField("\u200b","📅 **Date:** " + new_args.date + "\n🕘 **Time:** " + new_args.time + " game-time\n🌍 **World:** 23\n**Host:** " + "<@!"+  new_args.host.id +">")
        .addField("\u200b", "[Strategies for Corporeal Beast (wiki)](https://runescape.wiki/w/Corporeal_Beast/Strategies)")
        .addField("\u200b", "**Requirements:**\nSummer's End quest completed \nAny spear", true)
        .addField("\u200b", "**Recommended:**\nBandos armour or higher ", true)
        .addField("\u200b", new_args.description, true);
        message.channel.send(myInfo)
    }
}

module.exports = ClannieCorpCommand;
