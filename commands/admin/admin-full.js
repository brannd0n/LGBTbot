const commando = require('discord.js-commando');
const discord = require('discord.js');

class AdminFullCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'admin-full',
            group: 'admin',
            memberName: 'admin-full',
            description: 'Not looking for team members'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.MessageEmbed()
        .setColor(0xCB89F2)
        .addField("__**Status:**__", ":gem: There are no vacancies available at this time :gem:")
        .setFooter("Last updated")
        .setTimestamp();
        message.channel.send(myInfo)
    }
}

module.exports = AdminFullCommand;
