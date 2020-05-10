const commando = require('discord.js-commando');
const discord = require('discord.js');

class OsrsdkCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'osrsdk',
            group: 'events',
            memberName: 'osrsdk',
            description: 'Daganoth Kings event details',
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
        .setTitle(":crossed_swords: __**Daganoth Kings Mass**__ :crossed_swords:")
        .setColor(0x00AE86)
        .setFooter("Please remember that this is completely for fun! Any unique drops will be split after the event.", "https://oldschool.runescape.wiki/images/8/8b/Dagannoth_Prime.png?945b1")
        .setThumbnail("https://oldschool.runescape.wiki/images/8/8b/Dagannoth_Prime.png?945b1")
        .addField("\u200b","📅 **Date:** " + args.date + "\n🕘 **Time:** " + args.time + "\n🌍 **World:** 523\n**Host:** " + message.author)
        .addField("\u200b", "[Strategies for Daganoth Kings](https://oldschool.runescape.wiki/w/Dagannoth_Kings/Strategies)")
        .addField("\u200b", "**Requirements:**\n 70+ Combat stats ", true)
        .addField("\u200b", "**Recommended:**\nFood \nPrayer Potions \nSuper Antipoisons \nRune thrownaxe", true)
        .addBlankField()
        .addField("\u200b", args.description, true)
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = OsrsdkCommand;
