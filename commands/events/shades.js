const commando = require('discord.js-commando');
const discord = require('discord.js');

class ShadesCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'shades',
            group: 'events',
            memberName: 'shades',
            description: 'shades of mortton event details',
            examples: ['./shades "28 September" "20:00" "Describe where to meet and a basic premise here"'],
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
        .setTitle(":ghost:__**Shades of Mort'ton Event**__:ghost:")
        .setColor(0x4F2095)
        .setFooter("Please remember that this is completely for fun! We will rebuild the Flamtaer temple under siege from the Loar Shades, and create the ingredients to make forms of pyre logs which are used to cremate shade remains. We will then enter the Shade Catacombs under the town, hunting for the treasure chests which are unlocked by the various keys received by burning the shades. You may also enter the catacombs simply to hunt the more powerful shades that lurk within.", "https://runescape.wiki/images/e/e8/Mg_shadesofmortton.jpg?432ce")
        .setThumbnail("https://runescape.wiki/images/e/e8/Mg_shadesofmortton.jpg?432ce")
        .addField("\u200b","**Date:** " + args.date + "\n**Time:** " + args.time + "\n**Host: **" + message.author +"\n**World:** W23")
        .addField("\u200b", "**Requirements:**\nShades of Mort'ton quest", true)
        .addField("\u200b", "**Recommended:**\nTimber Beam or Plank \nLimestone Brick \nSwamp Paste \nPyre Logs (any type)", true)
        .addField("\u200b", args.description, true);
        message.channel.send(myInfo);
    }
}

module.exports = ShadesCommand;
