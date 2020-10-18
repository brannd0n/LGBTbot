const commando = require('discord.js-commando');
const discord = require('discord.js');

class WintertodtCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'wintertodt',
            group: 'events',
            memberName: 'wintertodt',
            description: 'Wintertodt event details',
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
        var myInfo = new discord.RichEmbed()
        .setTitle(":fire: __**Wintertodt Event**__ :fire:")
        .setColor(0x00AE86)
        .setFooter("Please remember that this is completely for fun!", "https://oldschool.runescape.wiki/images/7/78/Burning_brazier_%28Wintertodt%29.png?7b131")
        .setThumbnail("https://oldschool.runescape.wiki/images/7/78/Burning_brazier_%28Wintertodt%29.png?7b131")
        .addField("\u200b","📅 **Date:** " + new_args.date + "\n🕘 **Time:** " + new_args.time + "\n🌍 **World:** 523\n**Host:** " + message.author)
        .addField("\u200b", "[Strategies for Wintertodt](https://oldschool.runescape.wiki/w/Wintertodt/Strategies)")
        .addField("\u200b", "**Requirements:**\nAxe \nLevel 50 Firemaking \nWarm Clothing [List of Warm Cloting](https://oldschool.runescape.wiki/w/Wintertodt/Warm_clothing)", true)
        .addField("\u200b", "**Recommended:**\nFood", true)
        .addBlankField()
        .addField("\u200b", new_args.description, true)
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = WintertodtCommand;
