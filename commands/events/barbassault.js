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
        message.delete();
        var myInfo = new discord.RichEmbed()
        .setTitle(":Egg:__**Barbarian Assault**__:Egg:")
        .setColor(0x4F2095)
        .setFooter("Please remember that this is completely for fun! This is a cooperative, team-based safe combat minigame located at the Barbarian Outpost. A team of five players must work together in order to defeat ten waves of Penance monsters and, finally, their leader, the Penance Queen.", "https://vignette.wikia.nocookie.net/runescape2/images/6/6a/Mg_stealingcreation.jpg/revision/latest?cb=20081111151006")
        .setThumbnail("https://runescape.wiki/images/6/69/Barbarian_Assault_icon.jpg?7ae4a")
        .addField("\u200b","**Date:** " + args.date + "\n**Time:** " + args.time + "\n**Host: **" + message.author +"\n**World:** W23")
        .addField("\u200b", args.description, true)
        message.channel.send(myInfo);
    }
}

module.exports = BarbAssaultCommand;
