const commando = require('discord.js-commando');
const discord = require('discord.js');

class RiddleCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'riddle',
            group: 'events',
            memberName: 'riddle',
            description: 'riddle event details',
            examples: ['./riddle "28 September" "20:00" "Describe where to meet and a basic premise here"'],
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
        message.delete();
        var myInfo = new discord.RichEmbed()
        .setTitle("🏰 __**RIDDLE AND SEEK**__ 🏰")
        .setColor(0x4F2095)
        .setThumbnail("https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/146/world-map_1f5fa.png")
        .addField("\u200b","**Date:** " + args.date + "\n**Time:** " + args.time + "\n**Host: **" + message.author +"\n**World:** W23")
        .addField("\u200b",args.description, true);
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = RiddleCommand;