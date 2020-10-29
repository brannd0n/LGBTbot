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
        var myInfo = new discord.MessageEmbed()
        .setTitle(":crossed_swords: __**Daganoth Kings Mass**__ :crossed_swords:")
        .setColor(0x00AE86)
        .setFooter("Please remember that this is completely for fun! Any unique drops will be split after the event.", "https://oldschool.runescape.wiki/images/8/8b/Dagannoth_Prime.png?945b1")
        .setThumbnail("https://oldschool.runescape.wiki/images/8/8b/Dagannoth_Prime.png?945b1")
        .addField("\u200b","📅 **Date:** " + args.date + "\n🕘 **Time:** " + args.time + " game-time\n🌍 **World:** 523\n**Host:** " + message.author)
        .addField("\u200b", "[Strategies for Daganoth Kings](https://oldschool.runescape.wiki/w/Dagannoth_Kings/Strategies)")
        .addField("\u200b", "**Requirements:**\nFremninik Trials or 1k gp for boat to Waterbirth ", true)
        .addField("\u200b", "**Recommended:**\n<:Attack:714342791546667180> 70+ \n<:Strength:714343707125612554> 70+ \n<:Magic:714343927771299840> 75+ \n<:Ranged:714343998432477205> 70+ \n<:Defence:714344066669609032> 80+ \n<:Hp:714344209632591872> 70+ \n<:Prayer:714343809433075722> 45+", true)
        .addBlankField()
        .addField("\u200b", args.description, true)
        message.channel.send(myInfo)
    }
}

module.exports = OsrsdkCommand;
