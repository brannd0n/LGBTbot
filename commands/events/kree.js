const commando = require('discord.js-commando');
const discord = require('discord.js');

class KreeCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'kree',
            group: 'events',
            memberName: 'kree',
            description: 'Normal Mode Kree event details',
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
        .setTitle("⚔️ __**Kree MASS**__ ⚔️")
        .setColor(0x00AE86)
        .setFooter("Please remember that this is completely for fun! Just hit Kree and avoid the specials. That's all the advice you need but if you are nervous, please feel free to PM me. All loot will be traded to myself and split equally between attendees.", "https://runescape.wiki/images/f/fd/Kree%27arra.png")
        .setThumbnail("https://runescape.wiki/images/f/fd/Kree%27arra.png")
        .addField("\u200b","📅 **Date:** " + new_args.date + "\n🕘 **Time:** " + new_args.time + " game-time\n🌍 **World:** 23\n**Host: **" + "<@!"+ message.author.id +">")
        .addField("\u200b", "[Normal mode strategies for Kree'arra](https://runescape.fandom.com/wiki/Kree%27arra/Strategies)")
        .addField("\u200b", "**Requirements:**\nTroll Stronghold \n70 Ranged", true)
        .addField("\u200b", "**Recommended:**\nTier 70 Armour or higher \n Overloads \n Prayer Flasks", true)
        .addField("\u200b", new_args.description, true)
        message.channel.send(myInfo)
    }
}

module.exports = KreeCommand;
