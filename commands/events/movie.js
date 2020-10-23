const commando = require('discord.js-commando');
const discord = require('discord.js');

class MovieCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'movie',
            group: 'events',
            memberName: 'movie',
            description: 'movie event details',
            args: [
                {
                    key: 'date',
                    prompt: 'What date is the event? (e.g. Saturday 20 October)',
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
                },
                {
                    key: 'movies',
                    prompt: 'List of | separated movies (e.g. :deflectsnakes: Venom | :shark: Sharknado',
                    type: 'string'
                }
            ]
        });
    }

    async run(message, args)
    {
        message.delete();
        var movieEmojis = [];
        var movieChoices = "";
        var i = 0;
        args.movies.split("|").map(s => s.trim()).forEach(s => {
            i++;
            var firstSpace = s.indexOf(' ');
            var emoji = s.substr(0, firstSpace);
            var movie = s.substr(firstSpace + 1);
            movieEmojis.push(emoji.trim(":"));
            movieChoices += (i + ") " + emoji + " " + movie + "\n");
        });
        var myInfo = new discord.RichEmbed()
        .setTitle("🎥 __**MOVIE NIGHT**__ 🍿")
        .setColor(0x00AE86)
        .setThumbnail("https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/155/clapper-board_1f3ac.png")
        .addField("\u200b","**Date:** " + args.date + "\n**Time:** " + args.time + "\n**Host: **" + message.author)
        .addField("\u200b", args.description)
        .addField("\u200b", movieChoices);
        message.channel.sendEmbed(myInfo).then((message) => {
            movieEmojis.for((emojiName) => {
                var emoji = message.client.emojis.find(clientEmoji => clientEmoji.toString() === emojiName.toString()) || emojiName;
                await message.react(emoji);
            });
        });
    }
}

module.exports = MovieCommand;
