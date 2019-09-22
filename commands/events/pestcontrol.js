const commando = require('discord.js-commando');
const discord = require('discord.js');

class PestcontrolCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'pestcontrol',
            group: 'events',
            memberName: 'pestcontrol',
            description: 'pest control event details',
            examples: ['./pestcontrol "28 September" "20:00" "Describe where to meet and a basic premise here"'],
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
        .setTitle("🏰 __**Pest Control Event**__ 🏰")
        .setColor(0x4F2095)
        .setFooter("Please remember that this is completely for fun! This is a team combat minigame which involves protecting a vulnerable Void Knight, while fending off against waves of incoming monsters and taking down four portals.", "https://vignette.wikia.nocookie.net/runescape2/images/0/0b/Pest_Control_icon.jpg/revision/latest?cb=20080728141300")
        .setThumbnail("https://runescape.wiki/images/thumb/a/a4/Void_knight_top_detail.png/259px-Void_knight_top_detail.png?b0939")
        .addField("\u200b","**Date:** " + args.date + "\n**Time:** " + args.time + "\n**Host: **" + message.author +"\n**World:** W23")
        .addField("\u200b", "**Requirements:**\nAtleast a combat level of 35.", true)
        .addField("\u200b", args.description, true);
        message.channel.send(myInfo);
    }
}

module.exports = PestcontrolCommand;
