const commando = require('discord.js-commando');
const discord = require('discord.js');

class KingBlackDragonCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'kingblackdragon',
            group: 'events',
            memberName: 'kingblackdragon',
            description: 'KingBlackDragon event details',
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
        var myInfo = new discord.MessageEmbed()
        .setTitle("⚔️ __**King Black Dragon MASS**__ ⚔️")
        .setColor(0x00AE86)
        .setFooter("Please remember that this is completely for fun! We will be voice chatting during this mass to give out calls and such. If you are nervous, please feel free to PM me. All loot will be traded to myself and split equally between attendees.", "https://runescape.wiki/w/King_Black_Dragon#/media/File:King_Black_Dragon.png")
        .setThumbnail("https://runescape.wiki/images/thumb/e/e9/King_Black_Dragon.png/250px-King_Black_Dragon.png?5482f")
        .addField("\u200b","📅 **Date:** " + new_args.date + "\n🕘 **Time:** " + new_args.time + " game-time\n🌍 **World:** 23\n**Host: **" + "<@!"+ message.author.id +">")
        .addField("\u200b", "[Strategies for King Black Dragon (wiki)](https://runescape.wiki/w/King_Black_Dragon/Strategies)")
        .addField("\u200b", "**Recommended:**\nProtection from AntiFire.", true)
        .addField('\u200b', '\u200b')
        .addField("\u200b", new_args.description, true)
        message.channel.send(myInfo);
    }
}

module.exports = KingBlackDragonCommand;
