const commando = require('discord.js-commando');
const discord = require('discord.js');

class CommunityHiringCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'community-hire',
            group: 'admin',
            memberName: 'community-hire',
            description: 'Looking for community management team members'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.MessageEmbed()
        .setColor(0x00FDFF)
        .addField("__**Status:**__", ":pencil: We are currently recruiting for the RS3 Community Management Team :pencil:")
        .setFooter("Last updated")
        .setTimestamp();
        message.channel.send(myInfo)
    }
}

module.exports = CommunityHiringCommand;
