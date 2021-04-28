const commando = require('discord.js-commando');
const discord = require('discord.js');
const Timezones = require('../../utils/Timezones');

class OsrsmoleCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'osrsmole',
            group: 'events',
            memberName: 'osrsmole',
            description: 'Giant Mole event details',
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
        .setTitle("⚔️ __**GIANT MOLE MASS**__ ⚔️")
        .setColor(0x00AE86)
        .setFooter("Please remember that this is completely for fun! Just follow the mole and hit her. That's all the advice you need but if you are nervous, please feel free to PM me. All loot will be traded to myself and split equally between attendees.", "https://oldschool.runescape.wiki/images/f/fd/Giant_Mole.png?3f58a")
        .setThumbnail("https://oldschool.runescape.wiki/images/f/fd/Giant_Mole.png?3f58a")
        .addField("\u200b", `📅 **Date:** ${new_args.date}\n🕘 **Time:**\n${time_in_UTC}\n${time_in_EDT}\n${time_in_PDT}\n${time_in_BST}\n${time_in_CEST}\n${time_in_ACST}\n🌍 **World:** 523\n**Host: ** <@!${message.author.id}>`)
        .addField("\u200b", "[Strategies for Giant mole](https://oldschool.runescape.wiki/w/Giant_Mole/Strategies)")
        .addField("\u200b", "**Requirements:**\nLantarn or Firecape \nSpade", true)
        .addField("\u200b", "**Recommended:**\nFood \nPrayer Potions", true)
        .addField('\u200b', '\u200b')
        .addField("\u200b", new_args.description, true)
        message.channel.send(myInfo)
    }
}

module.exports = OsrsmoleCommand;
