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
        message.delete();
        var myInfo = new discord.RichEmbed()
        .setTitle(":crossed_swords: __**Kalphite Queen Mass**__ :crossed_swords:")
        .setColor(0x00AE86)
        .setFooter("Please remember that this is completely for fun! Any unique drops will be split after the event.", "https://oldschool.runescape.wiki/images/5/57/Kalphite_Queen.png?a4955")
        .setThumbnail("https://oldschool.runescape.wiki/images/5/57/Kalphite_Queen.png?a4955")
        .addField("\u200b","📅 **Date:** " + args.date + "\n🕘 **Time:** " + args.time + " game-time\n🌍 **World:** 523\n**Host:** " + message.author)
        .addField("\u200b", "[Strategies for Kalphite Queen](https://oldschool.runescape.wiki/w/Kalphite_Queen/Strategies)")
        .addField("\u200b", "**Requirements:**\n 80+ Combat stats ", true)
        .addField("\u200b", "**Recommended:**\nFood \nPrayer Potions \nMelee or Range gear", true)
        .addBlankField()
        .addField("\u200b", args.description, true)
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = OsrskqCommand;
