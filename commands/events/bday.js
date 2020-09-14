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
        const arg_string = Object.values(args).map(val => val);
        const updated_args = arg_string.join(' ').split(']').join(' ').split('[').slice(1);
        const filtered = updated_args.filter(el => el && el != '');
        const new_args = {
            date: filtered[0] || '',
            theme:  filtered[1] || '',
            description:  filtered[2] || '',
        };
        
        message.delete();
        var myInfo = new discord.RichEmbed()
        .setTitle("🏰 __**CLANNIVERSARY**__ 🏰")
        .setColor(0x00AE86)
        .setFooter("To celebrate the clans turning aniversary we are having a Birthday party. Please come to the citadel dressed in your best rainbow colours or sporting the clan cloak. We want as many clannies there as possible so we can get a massive group picture of us all wishing the clan a Happy Birthday. We will bring cake.", "https://i.gyazo.com/12d563d263f4e8a740dcc89d58a8badd.png")
        .setThumbnail("https://i.gyazo.com/12d563d263f4e8a740dcc89d58a8badd.png")
        .addField("\u200b","**Date:** Sunday " + new_args.date + "\n**Time:** 19:00 game-time\n**Host: **" + message.author +" \n**Theme: **" + new_args.theme)
        .addField("\u200b", new_args.description, true);
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = BdayCommand;
