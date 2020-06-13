const commando = require('discord.js-commando');
const discord = require('discord.js');

class OsrsfishtrawlerCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'osrsfishtrawler',
            group: 'events',
            memberName: 'osrsfishtrawler',
            description: 'Fishing trawler event details',
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
        .setTitle(":fishing_pole_and_fish: __**Fishing Trawler Event**__ :fishing_pole_and_fish:")
        .setColor(0x00AE86)
        .setFooter("Please remember that this is completely for fun!", "https://oldschool.runescape.wiki/images/8/86/Angler%27s_outfit_equipped.png?cef02")
        .setThumbnail("https://oldschool.runescape.wiki/images/8/86/Angler%27s_outfit_equipped.png?cef02")
        .addField("\u200b","📅 **Date:** " + args.date + "\n🕘 **Time:** " + args.time + " game-time\n🌍 **World:** " + args.world + "\n**Host:** " + message.author)
        .addField("\u200b", "[Fishing Trawler Strategy](https://oldschool.runescape.wiki/w/Fishing_Trawler#Playing_the_game)")
        .addField("\u200b", "**Requirements:**\n<:Fishing:721162050725740575>15 to catch fish.", true)
        .addField("\u200b", "**Recommended:**\n300 swamp paste \nRope \nAtleast one bailing bucket", true)
        .addBlankField()
        .addField("\u200b", args.description, true)
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = OsrsfishtrawlerCommand;
