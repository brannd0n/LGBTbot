const commando = require('discord.js-commando');
const discord = require('discord.js');

class DungeoneeringCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'dung',
            group: 'events',
            memberName: 'dung',
            description: 'Dungeoneering event details',
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
                }
            ]
        });
    }

    async run(message, args)
    {
        message.delete();
        var myInfo = new discord.RichEmbed()
        .setTitle("🔑 __**Dungeoneering Party**__ 🔑")
        .setColor(0x00AE86)
        .setThumbnail("https://runescape.wiki/f/current/2/2d/20120810010504%21Ring_of_kinship_detail.png")
        .addField("\u200b","**Date:** " + args.date + "\n**Time:** " + args.time + "\n**Host: **" + message.author +" \n**Location: ** W23 Daemonheim")
        .addField("\u200b", args.description, true);
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = DungeoneeringCommand;
