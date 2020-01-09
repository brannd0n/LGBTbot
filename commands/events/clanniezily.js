const commando = require('discord.js-commando');
const discord = require('discord.js');

class ClannieZilyCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'clanniezily',
            group: 'events',
            memberName: 'clanniezily',
            description: 'Normal Mode Zilyana event details',
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
        .setTitle("⚔️ __**Zilyana MASS**__ ⚔️")
        .setColor(0x00AE86)
        .setFooter("Please remember that this is completely for fun! Just hit Zily and avoid her attacks. That's all the advice you need but if you are nervous, please feel free to PM me. All loot will be traded to myself and split equally between attendees.", "https://runescape.wiki/images/f/fb/Commander_Zilyana.png?4fd88")
        .setThumbnail("https://runescape.wiki/images/f/fb/Commander_Zilyana.png?4fd88")
        .addField("\u200b","📅 **Date:** " + args.date + "\n🕘 **Time:** " + args.time + " game-time\n🌍 **World:** 23\n**Host:** " + args.host)
        .addField("\u200b", "[Normal mode strategies for Commander Zilyana](https://runescape.fandom.com/wiki/Commander_Zilyana/Strategies)")
        .addField("\u200b", "**Requirements:**\nTroll Stronghold \n70 Agility", true)
        .addField("\u200b", "**Recommended:**\nTier 70 Armour or higher \n Overloads \n Soulsplit", true)
        .addField("\u200b", args.description, true);
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = ClannieZilyCommand;
