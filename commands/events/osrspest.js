const commando = require('discord.js-commando');
const discord = require('discord.js');

class OsrspestCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'osrspest',
            group: 'events',
            memberName: 'osrspest',
            description: 'Pest Control event details',
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
                      key: 'world',
                      prompt: 'What world is it on?',
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
            world:  filtered[2] || '',
            description: filtered[3] || '\u200B',
        };
        message.delete();
        var myInfo = new discord.RichEmbed()
        .setTitle("__**Pest Control Event**__")
        .setColor(0x00AE86)
        .setFooter("Please remember that this is completely for fun! Any unique drops will be split after the event.", "https://oldschool.runescape.wiki/images/a/aa/Void_Knight.png?61ae6")
        .setThumbnail("https://oldschool.runescape.wiki/images/a/aa/Void_Knight.png?61ae6")
        .addField("\u200b","📅 **Date:** " + new_args.date + "\n🕘 **Time:** " + new_args.time + " game-time\n🌍 **World:** " + new+args.world + "\n**Host:** " + message.author)
        .addField("\u200b", "[Strategies for Pest Control](https://oldschool.runescape.wiki/w/Pest_Control/Strategies)")
        .addField("\u200b", "**Requirements:**\n**Novice** 40+ Combat \n**Intermediate** 70+ Combat \n**Veteran** 100+ Combat ", true)
        .addField("\u200b", "**Recommended:**\nMultiple attack styles for portals", true)
        .addBlankField()
        .addField("\u200b", new_args.description, true)
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = OsrspestCommand;
