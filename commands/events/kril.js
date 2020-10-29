const commando = require('discord.js-commando');
const discord = require('discord.js');

class KrilCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'kril',
            group: 'events',
            memberName: 'kril',
            description: 'Normal Mode Kril event details',
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
        .setTitle("⚔️ __**K'ril MASS**__ ⚔️")
        .setColor(0x00AE86)
        .setFooter("Please remember that this is completely for fun! Just hit K'ril and avoid the specials. That's all the advice you need but if you are nervous, please feel free to PM me. All loot will be traded to myself and split equally between attendees.", "https://runescape.wiki/images/2/2f/K%27ril_Tsutsaroth.png")
        .setThumbnail("https://runescape.wiki/images/2/2f/K%27ril_Tsutsaroth.png")
        .addField("\u200b","📅 **Date:** " + new_args.date + "\n🕘 **Time:** " + new_args.time + " game-time\n🌍 **World:** 23\n**Host:** " + message.author)
        .addField("\u200b", "[Normal mode strategies for K'ril Tsutsaroth](https://runescape.fandom.com/wiki/K%27ril_Tsutsaroth/Strategies)")
        .addField("\u200b", "**Requirements:**\nTroll Stronghold \n70 Constutution", true)
        .addField("\u200b", "**Recommended:**\nTier 70 Armour or higher \n Overloads \n Soulsplit", true)
        .addField("\u200b", new_args.description, true)
        message.channel.send(myInfo)
    }
}

module.exports = KrilCommand;
