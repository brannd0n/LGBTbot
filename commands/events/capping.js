const commando = require('discord.js-commando');
const discord = require('discord.js');

class CappingCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'capping',
            group: 'events',
            memberName: 'capping',
            description: 'Capping event details',
            examples: ['./capping "28 September" "Runescape Gods" "For this weeks capping event, we ask you to wear the colours, outfits, or gear of any of your favourite runescape Gods! We can\'t wait to see what outfits & the variety of stuff you will all wear!"'],
            args: [
                {
                    key: 'date',
                    prompt: 'What date is the capping event? (e.g. 28 September)',
                    type: 'string'
                },
                {
                    key: 'theme',
                    prompt: 'What theme is the capping event? (e.g. Runescape Gods)',
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
        .setTitle("🏰 __**CITADEL CAPPING**__ 🏰")
        .setColor(0x00AE86)
        .setFooter("When skilling with fellow clan members at the same time in the Citadel, the resource gain has been slightly increased, the more members you gather resources with at once, the better the gain!", "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/facebook/138/european-castle_1f3f0.png")
        .setThumbnail("https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/129/european-castle_1f3f0.png")
        .addField("\u200b","**Date:** Friday " + args.date + "\n**Time:** 19:30 game-time\n**Host: **" + message.author +" \n**Theme: **" + args.theme)
        .addField("\u200b", args.description, true);
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = CappingCommand;
