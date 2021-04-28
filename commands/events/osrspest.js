const commando = require('discord.js-commando');
const discord = require('discord.js');
const Timezones = require('../../utils/Timezones');

class OsrspestCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'osrspest',
            group: 'events',
            memberName: 'osrspest',
            description: 'Pest Control event details',
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
        const arg_string = Object.values(args).map(val => val);
        const updated_args = arg_string.join(' ').split(']').join(' ').split('[').slice(1);
        const filtered = updated_args.filter(el => el && el != '');
        const new_args = {
            date: filtered[0] || '',
            time:  filtered[1] || '',
            world:  filtered[2] || '',
            description: filtered[3] || '\u200B',
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
        .setTitle("__**Pest Control Event**__")
        .setColor(0x00AE86)
        .setFooter("Please remember that this is completely for fun! Any unique drops will be split after the event.", "https://oldschool.runescape.wiki/images/a/aa/Void_Knight.png?61ae6")
        .setThumbnail("https://oldschool.runescape.wiki/images/a/aa/Void_Knight.png?61ae6")
        .addField("\u200b",`📅 **Date:** ${new_args.date}\n🕘 **Time:**\n${time_in_UTC}\n${time_in_EDT}\n${time_in_PDT}\n${time_in_BST}\n${time_in_CEST}\n${time_in_ACST}\n🌍 **World:** ${new_args.world}\n**Host: ** <@!${message.author.id}>`)        
        .addField("\u200b", "[Strategies for Pest Control](https://oldschool.runescape.wiki/w/Pest_Control/Strategies)")
        .addField("\u200b", "**Requirements:**\n**Novice** 40+ Combat \n**Intermediate** 70+ Combat \n**Veteran** 100+ Combat ", true)
        .addField("\u200b", "**Recommended:**\nMultiple attack styles for portals", true)
        .addField('\u200b', '\u200b')
        .addField("\u200b", new_args.description, true)
        message.channel.send(myInfo)
    }
}

module.exports = OsrspestCommand;
