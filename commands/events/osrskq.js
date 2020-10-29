const commando = require('discord.js-commando');
const discord = require('discord.js');

class OsrskqCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'osrskq',
            group: 'events',
            memberName: 'osrskq',
            description: 'Kalphite queen event details',
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
        .setTitle(":crossed_swords: __**Kalphite Queen Mass**__ :crossed_swords:")
        .setColor(0x00AE86)
        .setFooter("Please remember that this is completely for fun! Any unique drops will be split after the event.", "https://oldschool.runescape.wiki/images/5/57/Kalphite_Queen.png?a4955")
        .setThumbnail("https://oldschool.runescape.wiki/images/5/57/Kalphite_Queen.png?a4955")
        .addField("\u200b","📅 **Date:** " + new_args.date + "\n🕘 **Time:** " + new_args.time + " game-time\n🌍 **World:** 523\n**Host: **" + "<@!"+ message.author.id +">")
        .addField("\u200b", "[Strategies for Kalphite Queen](https://oldschool.runescape.wiki/w/Kalphite_Queen/Strategies)")
        .addField("\u200b", "**Requirements:**\n 80+ Combat stats ", true)
        .addField("\u200b", "**Recommended:**\nFood \nPrayer Potions \nMelee or Range gear", true)
        .addField('\u200b', '\u200b')
        .addField("\u200b", new_args.description, true)
        message.channel.send(myInfo)
    }
}

module.exports = OsrskqCommand;
