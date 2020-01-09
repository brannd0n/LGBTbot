const commando = require('discord.js-commando');
const discord = require('discord.js');

class ClannieKrilCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'clanniekril',
            group: 'events',
            memberName: 'clanniekril',
            description: 'Clannie Normal Mode Kril event details',
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
        .setTitle("⚔️ __**K'ril MASS**__ ⚔️")
        .setColor(0x00AE86)
        .setFooter("Please remember that this is completely for fun! Just hit K'ril and avoid the specials. That's all the advice you need but if you are nervous, please feel free to PM me. All loot will be traded to myself and split equally between attendees.", "https://runescape.wiki/images/2/2f/K%27ril_Tsutsaroth.png")
        .setThumbnail("https://runescape.wiki/images/2/2f/K%27ril_Tsutsaroth.png")
        .addField("\u200b","📅 **Date:** " + args.date + "\n🕘 **Time:** " + args.time + " game-time\n🌍 **World:** 23\n**Host:** " + args.host)
        .addField("\u200b", "[Normal mode strategies for K'ril Tsutsaroth](https://runescape.fandom.com/wiki/K%27ril_Tsutsaroth/Strategies)")
        .addField("\u200b", "**Requirements:**\nTroll Stronghold \n70 Constutution", true)
        .addField("\u200b", "**Recommended:**\nTier 70 Armour or higher \n Overloads \n Soulsplit", true)
        .addField("\u200b", args.description, true)
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = ClannieKrilCommand;
