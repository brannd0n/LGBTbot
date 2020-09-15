const commando = require('discord.js-commando');
const discord = require('discord.js');

class ClannieTroublebrewingCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'clannietroublebrewing',
            group: 'events',
            memberName: 'clannietroublebrewing',
            description: 'trouble brewing event details',
            examples: ['./troublebrewing "28 September" "20:00" "Describe where to meet and a basic premise here"'],
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
                    key: 'host',
                    prompt: 'Who is the host?',
                    type: 'string'
                },
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
            host:  filtered[2] || '',
        };
        
        message.delete();
        var myInfo = new discord.RichEmbed()
        .setTitle("🏰 __**Trouble Brewing Event**__ 🏰")
        .setColor(0x4F2095)
        .setFooter("Please remember that this is completely for fun! We will have Two friendly teams try to brew the most bottles of 'rum'. Experience in a variety of skills can be earned for performing the many tasks needed in the process of 'rum' production.", "https://vignette.wikia.nocookie.net/runescape2/images/b/be/Mg_troublebrewing.jpg/revision/latest?cb=20080728164336")
        .setThumbnail("https://runescape.wiki/images/b/be/Mg_troublebrewing.jpg")
        .addField("\u200b","**Date:** " + new_args.date + "\n**Time:** " + new_args.time + "\n**Host: **" + new_args.host +"\n**World:** W23")
        .addField("\u200b", "**Requirements:**\n40 Cooking and completed Cabin Fever Quest", true)
        message.channel.send(myInfo);
    }
}

module.exports = ClannieTroublebrewingCommand;
