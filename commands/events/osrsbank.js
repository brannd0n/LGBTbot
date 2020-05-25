const commando = require('discord.js-commando');
const discord = require('discord.js');

class OsrsbankCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'osrsbank',
            group: 'events',
            memberName: 'osrsbank',
            description: 'Bank standing event details',
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
        message.delete();
        var myInfo = new discord.RichEmbed()
        .setTitle("<:skills:458333529651281921> __**Bank Standing**__ <:skills:458333529651281921>")
        .setColor(0x00AE86)
        .setFooter("Please remember that this is completely for fun!", "https://oldschool.runescape.wiki/images/c/cc/Bank_chest.png?c38c7")
        .setThumbnail("https://oldschool.runescape.wiki/images/c/cc/Bank_chest.png?c38c7")
        .addField("\u200b","📅 **Date:** " + args.date + "\n🕘 **Time:** " + args.time + " game-time\n🌍 **World:** 523\n**Host:** " + message.author)
        .addField("\u200b", args.description, true)
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = OsrsbankCommand;
