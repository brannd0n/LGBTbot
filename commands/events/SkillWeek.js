const commando = require('discord.js-commando');
const discord = require('discord.js');

class SkillWeekCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'skillweek',
            group: 'events',
            memberName: 'skillweek',
            description: 'Skill week event details',
            examples: ['./skillweek "28 September" "Describe where to meet and a basic premise here"'],
            args: [
                {
                    key: 'date',
                    prompt: 'What date is the event? (e.g. 28 September)',
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
        .setTitle(":trophy: __**Weekly Skilling Competition**__ :trophy: ")
        .setColor(0x4F2095)
        .setThumbnail("https://vignette.wikia.nocookie.net/2007scape/images/b/bd/Stats_icon.png/revision/latest?cb=20160515204513")
        .addField("\u200b","**Date:** " + args.date + "\n**Time: All Week** \n**Host: **" + message.author +"\n**World:** Rs3 Worlds")
        .addField("\u200b", args.description, true)
        message.channel.send(myInfo);
    }
}

module.exports = SkillWeekCommand;
