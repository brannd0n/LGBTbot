const commando = require('discord.js-commando');
const discord = require('discord.js');

class OsrsCommunityHiringCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'osrs-community-hire',
            group: 'admin',
            memberName: 'osrs-community-hire',
            description: 'Looking for community management team members'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.MessageEmbed()
        .setColor(0xB967FF)
        .addField("__**Status:**__", ":pencil: We are currently recruiting for the OSRS Community Management Team :pencil:")
        .setFooter("Last updated")
        .setTimestamp();
        message.channel.send(myInfo)
    }
}

module.exports = OsrsCommunityHiringCommand;
