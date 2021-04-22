const commando = require('discord.js-commando');
const discord = require('discord.js');
const Timezones = require('../../utils/Timezones');

class osrscorpCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'osrscorp',
            group: 'events',
            memberName: 'osrscorp',
            description: 'Corporeal Beast event details',
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


      async run(message, args) {
        //Tokenizing
        const arg_string = Object.values(args).map(val => val);
        const updated_args = arg_string.join(' ').split(']').join(' ').split('[').slice(1);
        const filtered = updated_args.filter(el => el && el != '');
        const new_args = {
            date: filtered[0] || '',
            time: filtered[1] || '',
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
        .setTitle("⚔️ __**Corporeal Beast MASS**__ ⚔️")
        .setColor(0x00AE86)
        .setFooter("Please remember that this is completely for fun! If you are nervous, please feel free to PM me. All loot will be traded to myself and split equally between attendees.", "https://oldschool.runescape.wiki/images/5/5c/Corporeal_Beast.png?52ebb")
        .setThumbnail("https://oldschool.runescape.wiki/images/5/5c/Corporeal_Beast.png?52ebb")
        .addField("\u200b", `📅 **Date:** ${new_args.date}\n🕘 **Time:**\n${time_in_UTC}\n${time_in_EDT}\n${time_in_PDT}\n${time_in_BST}\n${time_in_CEST}\n${time_in_ACST}\n🌍 **World:** 523\n**Host: ** <@!${message.author.id}>`)
        .addField("\u200b", "[Strategies for Corporeal Beast](https://oldschool.runescape.wiki/w/Corporeal_Beast/Strategies)")
        .addField("\u200b", "**Requirements:**\nNo requirements", true)
        .addField("\u200b", "**Recommended:**\n90+ Combat stats \n70+ prayer", true)
        .addField('\u200b', '\u200b')
        .addField("\u200b", new_args.description, true)
        message.channel.send(myInfo)
    }
}

module.exports = osrscorpCommand;
