const commando = require('discord.js-commando');
const discord = require('discord.js');

class ClannieCappingCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'clanniecapping',
            group: 'events',
            memberName: 'clanniecapping',
            description: 'Clannie Capping event details',
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
                    key: 'host',
                    prompt: 'Who is the host?',
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
            host:  filtered[2] || '',
            description: filtered[3] || '',
        };
        message.delete();
        var myInfo = new discord.MessageEmbed()
        .setTitle("🏰 __**CITADEL CAPPING**__ 🏰")
        .setColor(0x00AE86)
        .setFooter("When skilling with fellow clan members at the same time in the Citadel, the resource gain has been slightly increased, the more members you gather resources with at once, the better the gain!", "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/facebook/138/european-castle_1f3f0.png")
        .setThumbnail("https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/129/european-castle_1f3f0.png")
        .addField("\u200b","**Date:** Friday " + new_args.date + "\n**Time:** 19:30 game-time\n**Host: **" + new_args.host +" \n**Theme: **" + new_args.theme)
        .addField("\u200b", new_args.description, true);
        message.channel.send(myInfo)
    }
}

module.exports = ClannieCappingCommand;
