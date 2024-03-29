const commando = require('discord.js-commando');
const discord = require('discord.js');

class FistofguthixCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'fistofguthix',
            group: 'events',
            memberName: 'fistofguthix',
            description: 'Fist of Guthix event details',
            examples: ['./fistofguthix "28 September" "20:00"'],
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
        message.delete();
        var myInfo = new discord.MessageEmbed()
        .setTitle(":green_heart:__**Fist of Guthix Event**__:green_heart: ")
        .setColor(0x4F2095)
        .setFooter("Please remember that this is completely for fun! This minigame is a tactical one-on-one game with two rounds, in which one player collects charges with a magical stone while the other is trying to hunt them down. In the second round, the players switch sides", "https://vignette.wikia.nocookie.net/runescape2/images/1/17/Fist_of_Guthix_icon.jpg/revision/latest?cb=20080728141256")
        .setThumbnail("https://runescape.wiki/images/f/fd/Battle_hood_detail.png")
        .addField("\u200b","**Date:** " + new_args.date + "\n**Time:** " + new_args.time + "\n**Host: **" + "<@!"+ message.author.id +">" +"\n**World:** W23")
        .addField("\u200b", new_args.description, true)
        message.channel.send(myInfo);
    }
}

module.exports = FistofguthixCommand;
