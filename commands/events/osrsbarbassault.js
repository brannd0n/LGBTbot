const commando = require('discord.js-commando');
const discord = require('discord.js');
const Timezones = require('../../utils/Timezones');

class OsrsbarbassaultCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'osrsbarbassault',
            group: 'events',
            memberName: 'osrsbarbassault',
            description: 'Barbarian Assualt event details',
            examples: ['./osrsbarbassault "28 September" "20:00" "Describe where to meet and a basic premise here"'],
            args: [
                {
                    key: 'date',
                    prompt: 'What date is the event? (e.g. 28 September)',
                    type: 'string'
                },
                {
                    key:'time',
                    prompt: 'What time is the event at? (In game time)',
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
        .setTitle("<:yellow_egg:677335122034294790>  __**Barbarian Assault**__ <:yellow_egg:677335122034294790>")
        .setColor(0x4F2095)
        .setFooter("Please remember that this is completely for fun! This is a cooperative, team-based safe combat minigame located at the Barbarian Outpost. A team of five players must work together in order to defeat ten waves of Penance monsters and, finally, their leader, the Penance Queen.", "https://oldschool.runescape.wiki/images/1/18/Barbarian_Assault_logo.jpg?b498b")
        .setThumbnail("https://oldschool.runescape.wiki/images/1/18/Barbarian_Assault_logo.jpg?b498b")
        .addField("\u200b", `📅 **Date:** ${new_args.date}\n🕘 **Time:**\n${time_in_UTC}\n${time_in_EDT}\n${time_in_PDT}\n${time_in_BST}\n${time_in_CEST}\n${time_in_ACST}\n🌍 **World:** 523\n**Host: ** <@!${message.author.id}>`)
        .addField("\u200b", new_args.description, true)
        message.channel.send(myInfo);
    }
}

module.exports = OsrsbarbassaultCommand;
