const commando = require('discord.js-commando');
const discord = require('discord.js');

class OsrsbarrowsCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'osrsbarrows',
            group: 'events',
            memberName: 'osrsbarrows',
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
        var myInfo = new discord.RichEmbed()
        .setTitle("⚔️ __**Barrows Event**__ ⚔️")
        .setColor(0x00AE86)
        .setFooter("Please remember that this is completely for fun!", "https://oldschool.runescape.wiki/images/8/8c/Barrows_logo.jpg?97142")
        .setThumbnail("https://oldschool.runescape.wiki/images/8/8c/Barrows_logo.jpg?97142")
        .addField("\u200b","📅 **Date:** " + new_args.date + "\n🕘 **Time:** " + new_args.time + "\n🌍 **World:** 523\n**Host:** " + message.author)
        .addField("\u200b", "[Strategies for Barrows](https://oldschool.runescape.wiki/w/Barrows/Strategies)")
        .addField("\u200b", "**Requirements:**\nCompletion of Quest Priest in Peril is required to enter Morytania. \nPartial completion of Quests Nature Spirit is required to enter Morytania swamp, and thus to visit the Barrows. (Not necessary if using barrows teleport tablets.) ", true)
        .addField("\u200b", "**Recommended:**\nFood \nPrayer Potions", true)
        .addBlankField()
        .addField("\u200b", new_args.description, true)
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = OsrsbarrowsCommand;
