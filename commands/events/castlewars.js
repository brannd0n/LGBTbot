const commando = require('discord.js-commando');
const discord = require('discord.js');

class CastlewarsCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'castlewars',
            group: 'events',
            memberName: 'castlewars',
            description: 'Castle wars event details',
            examples: ['./castlewars "28 September" "20:00" "Describe where to meet and a basic premise here"'],
            args: [
                {
                    key: 'date',
                    prompt: 'What date is the capping event? (e.g. 28 September)',
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
        .setTitle("🏰 __**Castle Wars Event**__ 🏰")
        .setColor(0x4F2095)
        .setFooter("Please remember that this is completely for fun! We will have a friendly game of Capture the Flag in which two teams try to bring the opponent's flag back to their base.", "https://vignette.wikia.nocookie.net/runescape2/images/4/49/Castle_Wars_icon.jpg/revision/latest?cb=20080728140445")
        .setThumbnail("https://vignette.wikia.nocookie.net/runescape2/images/4/49/Castle_Wars_icon.jpg/revision/latest?cb=20080728140445")
        .addField("\u200b","**Date:** " + new_args.date + "\n**Time:** " + new_args.time + "\n**Host: **" + message.author +"\n**World:** W23")
        .addField("\u200b", new_args.description, true)
      message.channel.send(myInfo);
    }
}

module.exports = CastlewarsCommand;
