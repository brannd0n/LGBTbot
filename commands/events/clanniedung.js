const commando = require('discord.js-commando');
const discord = require('discord.js');

class ClannieDungCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'clanniedung',
            group: 'events',
            memberName: 'clanniedung',
            description: 'Clannie Dungeoneering event details',
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
        .setTitle("🔑 __**Dungeoneering Party**__ 🔑")
        .setColor(0x00AE86)
        .setThumbnail("https://runescape.wiki/f/current/2/2d/20120810010504%21Ring_of_kinship_detail.png")
        .addField("\u200b","**Date:** " + new_args.date + "\n**Time:** " + new_args.time + "\n**Host: **" + new_args.host +" \n**Location: ** W23 Daemonheim")
        .addField("\u200b", new_args.description, true);
        message.channel.send(myInfo)
    }
}

module.exports = ClannieDungCommand;
