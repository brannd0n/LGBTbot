const commando = require('discord.js-commando');
const discord = require('discord.js');

class ClannieEd3Command extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'clannieed3',
            group: 'events',
            memberName: 'clannieed3',
            description: 'Elite dungeon 3 event details',
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
                      key: 'host',
                      prompt: 'Who is the host?',
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
        .setTitle("⚔️__**Shadow Reef Event**__⚔️")
        .setColor(0x00AE86)
        .setFooter("Please remember that this is completely for fun! Please feel free to PM me. All loot will be traded to me and split equally between attendees.", "https://runescape.wiki/images/7/7e/The_Ambassador.png?efb9b")
        .setThumbnail("https://runescape.wiki/images/7/7e/The_Ambassador.png?efb9b")
        .addField("\u200b","📅 **Date:** " + args.date + "\n🕘 **Time:** " + args.time + " game-time\n🌍 **World:** 23\n**Host:** " + args.host)
        .addField("\u200b", "[Strategies for The Shadow Reef](https://runescape.wiki/w/The_Shadow_Reef/Strategies)")
        .addField("\u200b", "**Recommended:**\nTier 80 weapons or higher \nSara brew flasks \nSalve amulet (e) \nEnhanced Excalibur and any mainhand Melee weapon for Bladed Dive", true)
        .addField("\u200b", args.description, true)
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = ClannieEd3Command;
