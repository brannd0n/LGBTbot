const commando = require('discord.js-commando');
const discord = require('discord.js');

class GeneralrolesCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'generalroles',
            group: 'welcome',
            memberName: 'generalroles',
            description: 'Discord roles.'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.MessageEmbed()
        .setColor(0x22FF00)
        .setFooter("Last updated")
        .setTimestamp()
        .addField("**General Roles:**", "RS3 Events - ❤️ \n \nOSRS Events - 💚 \n \nRS3 Iron - 💙 \n \nOSRS Iron - 💜\n \nRS3 - 🟩 \n \nOSRS - 🟧")
        message.channel.send(myInfo)
    }
}

module.exports = GeneralrolesCommand;
