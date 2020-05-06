const commando = require('discord.js-commando');
const discord = require('discord.js');

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
        message.delete();
        var myInfo = new discord.RichEmbed()
        .setTitle("⚔️ __**GIANT MOLE MASS**__ ⚔️")
        .setColor(0x00AE86)
        .setFooter("Please remember that this is completely for fun! Just follow the mole and hit her. That's all the advice you need but if you are nervous, please feel free to PM me. All loot will be traded to myself and split equally between attendees.", "https://oldschool.runescape.wiki/images/f/fd/Giant_Mole.png?3f58a")
        .setThumbnail("https://oldschool.runescape.wiki/images/f/fd/Giant_Mole.png?3f58a")
        .addField("\u200b","📅 **Date:** " + args.date + "\n🕘 **Time:** " + args.time + " game-time\n🌍 **World:** 523\n**Host:** " + message.author)
        .addField("\u200b", "[Strategies for Giant mole](https://oldschool.runescape.wiki/w/Giant_Mole/Strategies)")
        .addField("\u200b", "**Requirements:**\nLantarn or Firecape \nSpade", true)
        .addField("\u200b", "**Recommended:**\nFood \nPrayer Potions", true)
        .addBlankField()
        .addField("\u200b", args.description, true)
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = OsrsmoleCommand;
