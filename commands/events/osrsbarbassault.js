const commando = require('discord.js-commando');
const discord = require('discord.js');

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
        message.delete();
        var myInfo = new discord.RichEmbed()
        .setTitle("<:yellow_egg:677335122034294790>  __**Barbarian Assault**__ <:yellow_egg:677335122034294790>")
        .setColor(0x4F2095)
        .setFooter("Please remember that this is completely for fun! This is a cooperative, team-based safe combat minigame located at the Barbarian Outpost. A team of five players must work together in order to defeat ten waves of Penance monsters and, finally, their leader, the Penance Queen.", "https://oldschool.runescape.wiki/images/1/18/Barbarian_Assault_logo.jpg?b498b")
        .setThumbnail("https://oldschool.runescape.wiki/images/1/18/Barbarian_Assault_logo.jpg?b498b")
        .addField("\u200b","**Date:** " + args.date + "\n**Time:** " + args.time + "game-time\n🌍 **World:** 523\n**Host:** " + message.author)
        .addField("\u200b", args.description, true)
        message.channel.send(myInfo);
    }
}

module.exports = OsrsbarbassaultCommand;
