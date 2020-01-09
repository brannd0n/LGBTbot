const commando = require('discord.js-commando');
const discord = require('discord.js');

class ClannieVoragoCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'clannievorago',
            group: 'events',
            memberName: 'clannievorago',
            description: 'Vorago event details',
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
        .setTitle("⚔️ __**VORAGO MASS**__ ⚔️")
        .setColor(0x00AE86)
        .setFooter("Please remember that this is completely for fun! We will be voice chatting during this mass to give out calls and such. If you are nervous, please feel free to PM me. All loot will be traded to myself and split equally between attendees.", "https://runescape.wiki/images/thumb/e/eb/Vorago.png/753px-Vorago.png?d1cfb")
        .setThumbnail("https://runescape.wiki/images/thumb/e/eb/Vorago.png/753px-Vorago.png?d1cfb")
        .addField("\u200b","📅 **Date:** " + args.date + "\n🕘 **Time:** " + args.time + " game-time\n🌍 **World:** 23\n**Host:** " + args.host)
        .addField("\u200b", "[Strategies for Vorago (wiki)](https://runescape.wiki/w/Vorago/Strategies)")
        .addField("\u200b", "**Requirements:**\nTalk to Vorago", true)
        .addField("\u200b", "**Recommended:**\nAncient Curses\nOverloads\nT80+ DPS Armour\nMagic or Ranged \nBoB filled with food.", true)
        .addField("\u200b", args.description, true);
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = ClannieVoragoCommand;
