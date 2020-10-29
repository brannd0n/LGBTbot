const commando = require('discord.js-commando');
const discord = require('discord.js');

class ClannieMoleCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'clanniemole',
            group: 'events',
            memberName: 'clanniemole',
            description: 'Clannie Giant Mole event details',
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
        const arg_string = Object.values(args).map(val => val);
        const updated_args = arg_string.join(' ').split(']').join(' ').split('[').slice(1);
        const filtered = updated_args.filter(el => el && el != '');
        const new_args = {
            date: filtered[0] || '',
            time:  filtered[1] || '',
            host:  filtered[2] || '',
            description: filtered[3] || '',
        };
        
        message.delete();
        var myInfo = new discord.MessageEmbed()
        .setTitle("⚔️ __**GIANT MOLE MASS**__ ⚔️")
        .setColor(0x00AE86)
        .setFooter("Please remember that this is completely for fun! Just follow the mole and hit her. That's all the advice you need but if you are nervous, please feel free to PM me. All loot will be traded to myself and split equally between attendees.", "https://runescape.wiki/images/thumb/f/fd/Giant_Mole.png/240px-Giant_Mole.png?0e85e")
        .setThumbnail("https://runescape.wiki/images/thumb/f/fd/Giant_Mole.png/240px-Giant_Mole.png?0e85e")
        .addField("\u200b","📅 **Date:** " + new_args.date + "\n🕘 **Time:** " + new_args.time + " game-time\n🌍 **World:** 23\n**Host:** " + "<@!"+  new_args.host.id +">"t)
        .addField("\u200b", "[Strategies for Giant mole](https://runescape.wiki/w/Giant_mole/Strategies)")
        .addField("\u200b", "**Requirements:**\nNone", true)
        .addField("\u200b", "**Recommended:**\nFood \n Prayer Potions", true)
        .addField("\u200b", new_args.description, true)
        message.channel.send(myInfo)
    }
}

module.exports = ClannieMoleCommand;
