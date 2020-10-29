const commando = require('discord.js-commando');
const discord = require('discord.js');

class BarrowsCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'barrows',
            group: 'events',
            memberName: 'barrows',
            description: 'Barrows event details',
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
        const arg_string = Object.values(args).map(val => val);
        const updated_args = arg_string.join(' ').split(']').join(' ').split('[').slice(1);
        const filtered = updated_args.filter(el => el && el != '');
        const new_args = {
            date: filtered[0] || '',
            time:  filtered[1] || '',
            description:  filtered[2] || '',
        };
        
        message.delete();
        var myInfo = new discord.MessageEmbed()
        .setTitle("⚔️ __**Barrows Event**__ ⚔️")
        .setColor(0x00AE86)
        .setFooter("Please remember that this is completely for fun!", "https://runescape.wiki/images/6/64/Barrows_icon.jpg?3f834")
        .setThumbnail("https://runescape.wiki/images/6/64/Barrows_icon.jpg?3f834")
        .addField("\u200b","📅 **Date:** " + new_args.date + "\n🕘 **Time:** " + new_args.time + "\n🌍 **World:** 23\n**Host: **" + "<@!"+ message.author.id +">")
        .addField("\u200b", "[Strategies for Barrows](https://runescape.wiki/w/Barrows/Strategies)")
        .addField("\u200b", "**Requirements:**\nNone", true)
        .addField("\u200b", "**Recommended:**\nFood \nPrayer Potions", true)
        .addField('\u200b', '\u200b')
        .addField("\u200b", new_args.description, true)
        message.channel.send(myInfo)
    }
}

module.exports = BarrowsCommand;
