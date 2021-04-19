const commando = require('discord.js-commando');
const discord = require('discord.js');

class OsrssoulwarsCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'osrssoulwars',
            group: 'events',
            memberName: 'osrssoulwars',
            description: 'Soul wars event details',
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
        .setTitle(":crossed_swords:  __**Soul Wars**__ :crossed_swords:")
        .setColor(0x00AE86)
        .setFooter("Please remember that this is completely for fun!", "https://oldschool.runescape.wiki/images/thumb/d/d7/Soul_Wars_logo.png/2560px-Soul_Wars_logo.png?5fada")
        .setThumbnail("https://oldschool.runescape.wiki/images/thumb/d/d7/Soul_Wars_logo.png/2560px-Soul_Wars_logo.png?5fada")
        .addField("\u200b","📅 **Date:** " + new_args.date + "\n🕘 **Time:** " + new_args.time + " game-time\n🌍 **World:** 523\n**Host: **" + "<@!"+ message.author.id +">")
        .addField("\u200b", new_args.description, true)
        message.channel.send(myInfo)
    }
}

module.exports = OsrssoulwarsCommand;
