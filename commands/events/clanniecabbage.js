const commando = require('discord.js-commando');
const discord = require('discord.js');

class ClannieCabbageCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'clanniecabbage',
            group: 'events',
            memberName: 'clanniecabbage',
            description: 'Clannie Cabbage Facepunch Bonanza event details',
            examples: ['./cabbagefacepunch "28 September" "20:00" "Describe where to meet and a basic premise here"'],
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
            time:  filtered[1] || '',
            host:  filtered[2] || '',
            description: filtered[3] || '',
        };
        message.delete();
        var myInfo = new discord.MessageEmbed()
        .setTitle(":gorilla:  __**Cabbage Facepunch Bonanza Event**__ :gorilla: ")
        .setColor(0x4F2095)
        .setFooter("Please remember that this is completely for fun! This minigame involves a maze where players have to survive as long as possible, running between two safe zones. Any player who fails is turned into a gorilla.", "https://vignette.wikia.nocookie.net/runescape2/images/8/82/Cabbage_Facepunch_Bonanza_icon.png/revision/latest?cb=20170322194600")
        .setThumbnail("https://vignette.wikia.nocookie.net/runescape2/images/8/82/Cabbage_Facepunch_Bonanza_icon.png/revision/latest?cb=20170322194600")
        .addField("\u200b","**Date:** " + new_args.date + "\n**Time:** " + new_args.time + "\n**Host: **" + new_args.host +"\n**World:** W23")
        .addField("\u200b", new_args.description, true)
        message.channel.send(myInfo);
    }
}

module.exports = ClannieCabbageCommand;
