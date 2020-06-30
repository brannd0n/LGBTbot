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
        message.delete();
        var myInfo = new discord.RichEmbed()
        .setTitle("__**Pest Control Event**__")
        .setColor(0x00AE86)
        .setFooter("Please remember that this is completely for fun! Any unique drops will be split after the event.", "https://oldschool.runescape.wiki/images/a/aa/Void_Knight.png?61ae6")
        .setThumbnail("https://oldschool.runescape.wiki/images/a/aa/Void_Knight.png?61ae6")
        .addField("\u200b","📅 **Date:** " + args.date + "\n🕘 **Time:** " + args.time + " game-time\n🌍 **World:** " + args.world + "\n**Host:** " + message.author)
        .addField("\u200b", "[Strategies for Pest Control](https://oldschool.runescape.wiki/w/Pest_Control/Strategies)")
        .addField("\u200b", "**Requirements:**\n**Novice** 40+ Combat \n**Intermediate** 70+ Combat \n**Veteran** 100+ Combat ", true)
        .addField("\u200b", "**Recommended:**\nMultiple attack styles for portals", true)
        .addBlankField()
        .addField("\u200b", args.description, true)
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = OsrspestCommand;
