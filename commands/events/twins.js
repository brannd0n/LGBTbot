const commando = require('discord.js-commando');
const discord = require('discord.js');

class TwinsCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'twins',
            group: 'events',
            memberName: 'twins',
            description: 'Twin Furies event details',
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
          message.delete();
          var myInfo = new discord.MessageEmbed()
        .setTitle("⚔️ __**TWIN FURIES MASS**__ ⚔️")
        .setColor(0x00AE86)
        .setFooter("Please remember that this is completely for fun! Please get your kill count before the event start time, you keep your kc even though you leave GWD2! Don't get charged, and stay out of the dangerous floor tiles! That's all the advice you need but if you are nervous, please feel free to PM me. All loot will be traded to myself and split equally between attendees.", "https://runescape.wiki/images/7/72/Nymora_chathead.png?e37c4")
        .setThumbnail("https://runescape.wiki/images/6/6b/Avaryss%2C_the_Unceasing.png?097c7")
        .addField("\u200b","📅 **Date:** " + new_args.date + "\n🕘 **Time:** " + new_args.time + " game-time\n🌍 **World:** 23\n**Host: **" + "<@!"+ message.author.id +">")
        .addField("\u200b", "[Strategies for Twin Furies (wiki)](https://runescape.wiki/w/Twin_Furies/Strategies)")
        .addField("\u200b", "**Requirements:**\n80 Ranged\n40 Zamorak kill count", true)
        .addField("\u200b", "**Recommended:**\n70+ Prayer (for piety)\n90+ Herb for extremes\nAnything above barrows armour\nAny style works \nHeart tele tabs \nBoB filled with food.", true)
        .addField('\u200b', '\u200b')
        .addField("\u200b",new_args.description, true)
        message.channel.send(myInfo)
    }
}

module.exports = TwinsCommand;
