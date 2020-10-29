const commando = require('discord.js-commando');
const discord = require('discord.js');

class AdminOpenCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'admin-open',
            group: 'admin',
            memberName: 'admin-open',
            description: 'Recruiting for for both teams'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.MessageEmbed()
        .setColor(0x1CFF2C)
        .addField("__**Status:**__", ":rainbow: We are currently recruiting for both teams :rainbow:")
        .setFooter("Last updated")
        .setTimestamp();
        message.channel.send(myInfo)
    }
}

module.exports = AdminOpenCommand;
