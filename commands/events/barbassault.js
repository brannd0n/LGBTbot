const commando = require('discord.js-commando');
const discord = require('discord.js');

class BarbAssaultCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'barbassault',
            group: 'events',
            memberName: 'barbassault',
            description: 'Barbarian Assualt event details',
            examples: ['./barbassault "28 September" "20:00" "Describe where to meet and a basic premise here"'],
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
            description:  filtered[2] || '',
        };
        
        message.delete();
        var myInfo = new discord.RichEmbed()
        .setTitle("<:yellow_egg:677335122034294790>  __**Barbarian Assault**__ <:yellow_egg:677335122034294790>")
        .setColor(0x4F2095)
        .setFooter("Please remember that this is completely for fun! This is a cooperative, team-based safe combat minigame located at the Barbarian Outpost. A team of five players must work together in order to defeat ten waves of Penance monsters and, finally, their leader, the Penance Queen.", "https://runescape.wiki/images/6/69/Barbarian_Assault_icon.jpg?7ae4a")
        .setThumbnail("https://runescape.wiki/images/6/69/Barbarian_Assault_icon.jpg?7ae4a")
        .addField("\u200b","📅 **Date:** " + new_args.date + "\n🕘 **Time:** " + new_args.time + " game-time\n🌍 **World:** 23" + "\n**Host:** " + message.author)
        .addField("\u200b", new_args.description, true)
        message.channel.send(myInfo);
    }
}

module.exports = BarbAssaultCommand;
