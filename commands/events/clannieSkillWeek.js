const commando = require('discord.js-commando');
const discord = require('discord.js');

class ClannieSkillWeekCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'clannieskillweek',
            group: 'events',
            memberName: 'clannieskillweek',
            description: 'Skill week event details',
            examples: ['./skillweek "28 September" "Describe where to meet and a basic premise here"'],
            args: [
                {
                    key: 'date',
                    prompt: 'What date is the event? (e.g. 28 September)',
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
            host:  filtered[1] || '',
            description:  filtered[2] || '',
        };
        
        message.delete();
        var myInfo = new discord.MessageEmbed()
        .setTitle(":trophy:  __**Weekly Skilling Competition**__ :trophy: ")
        .setColor(0x4F2095)
        .setThumbnail("https://vignette.wikia.nocookie.net/2007scape/images/b/bd/Stats_icon.png/revision/latest?cb=20160515204513")
        .addField("\u200b","**Date:** " + new_args.date + "\n**Time:All Week** \n**Host: **" + new_args.host +"\n**World:** Rs3 Worlds")
        .addField("\u200b", new_args.description, true)
        message.channel.send(myInfo);
    }
}

module.exports = ClannieSkillWeekCommand;
