const commando = require('discord.js-commando');
const discord = require('discord.js');
const Timezones = require('../../utils/Timezones');

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
            description: filtered[2] || '\u200B',
        };
        
        const { 
            time_in_UTC,
            time_in_EDT,
            time_in_PDT,
            time_in_BST,
            time_in_CEST,
            time_in_ACST 
        } = Timezones.get(new_args);

        message.delete();
        var myInfo = new discord.MessageEmbed()
        .setTitle(":fishing_pole_and_fish: __**Fishing Trawler Event**__ :fishing_pole_and_fish:")
        .setColor(0x00AE86)
        .setFooter("Please remember that this is completely for fun!", "https://oldschool.runescape.wiki/images/8/86/Angler%27s_outfit_equipped.png?cef02")
        .setThumbnail("https://oldschool.runescape.wiki/images/8/86/Angler%27s_outfit_equipped.png?cef02")
        .addField("\u200b", `📅 **Date:** ${new_args.date}\n🕘 **Time:**\n${time_in_UTC}\n${time_in_EDT}\n${time_in_PDT}\n${time_in_BST}\n${time_in_CEST}\n${time_in_ACST}\n🌍 **World:** 523\n**Host: ** <@!${message.author.id}>`)
        .addField("\u200b", "[Fishing Trawler Strategy](https://oldschool.runescape.wiki/w/Fishing_Trawler#Playing_the_game)")
        .addField("\u200b", "**Requirements:**\nLevel 15 Fishing to catch fish.", true)
        .addField("\u200b", "**Recommended:**\n300 swamp paste \nRope \nAtleast one bailing bucket", true)
        .addField('\u200b', '\u200b')
        .addField("\u200b", new_args.description, true)
        message.channel.send(myInfo)
    }
}

module.exports = OsrsfishtrawlerCommand;
