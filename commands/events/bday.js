const commando = require('discord.js-commando');
const discord = require('discord.js');

class BdayCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'bday',
            group: 'events',
            memberName: 'bday',
            description: 'Clan birthday event details',
            examples: ['./bday "28 September" "Runescape Gods" "For this event, we ask you to wear the colours, outfits, or gear of any of your favourite runescape Gods! We can\'t wait to see what outfits & the variety of stuff you will all wear!"'],
            args: [
                {
                    key: 'date',
                    prompt: 'What date is the bday event? (e.g. 28 September)',
                    type: 'string'
                },
                {
                    key: 'theme',
                    prompt: 'What theme is the bday event? (e.g. Runescape Gods)',
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
        .setTitle("🏰 __**CLANNIVERSARY**__ 🏰")
        .setColor(0x00AE86)
        .setFooter("To celebrate the clan turning 3 years old we are having a Birthday party. Please come to the citadel dressed in your best rainbow colours or sporting the clan cloak. We want as many clannies there as possible so we can get a massive group picture of us all wishing the clan a Happy Birthday. We will bring cake.", "https://i.gyazo.com/12d563d263f4e8a740dcc89d58a8badd.png")
        .setThumbnail("https://i.gyazo.com/12d563d263f4e8a740dcc89d58a8badd.png")
        .addField("\u200b","**Date:** Sunday " + args.date + "\n**Time:** 19:00 game-time\n**Host: **" + message.author +" \n**Theme: **" + args.theme)
        .addField("\u200b", args.description, true);
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = BdayCommand;
