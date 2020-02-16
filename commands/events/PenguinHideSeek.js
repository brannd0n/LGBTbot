const commando = require('discord.js-commando');
const discord = require('discord.js');

class PenguinHideSeekCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'penguinhideseek',
            group: 'events',
            memberName: 'penguinhideseek',
            description: 'Penguin hide and seek event',
            examples: ['./bday "28 September" "Runescape Gods" "For this event, we ask you to wear the colours, outfits, or gear of any of your favourite runescape Gods! We can\'t wait to see what outfits & the variety of stuff you will all wear!"'],
            args: [
                {
                    key: 'date',
                    prompt: 'What date is the bday event? (e.g. 28 September)',
                    type: 'string'
                },
                {
                    key: 'time',
                    prompt: 'What time is the event? (e.g. 21:00)',
                    type: 'string'
                },
                {
                    key: 'world',
                    prompt: 'What world is it on?',
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
        .setTitle("__:penguin:Penguin Hide & Seek:penguin:__")
        .setColor(0x00AE86)
        .setFooter("This is a casual event to find penguins scattered accross runescape so lets make sure to have fun")
        .setThumbnail("https://runescape.wiki/images/1/1f/Crate_%28Penguin_Hide_and_Seek%29.png?c5723")
        .addField("\u200b","📅 **Date:** " + args.date + "\n🕘 **Time:** " + args.time +  "\n🌍 **World:** " + args.world "\n**Host:** " + message.author)
        .addField("\u200b", args.description, true);
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = PenguinHideSeekCommand;
