const commando = require('discord.js-commando');
const discord = require('discord.js');

class Lgbtroles2Command extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'lgbtroles2',
            group: 'welcome',
            memberName: 'lgbtroles2',
            description: 'Discord roles.'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.MessageEmbed()
        .setColor(0x22FF00)
        .setFooter("Last updated")
        .setTimestamp()
        .addField("**General Rols:**", "RS3 Events - ❤️ \n \nOSRS Events - 💚 \n \nRS3 Iron - 💙 \n \nOSRS Iron - 💜\n \nRS3 - 🟩 \n \nOSRS - 🟧")
        message.channel.send(myInfo)
    }
}

module.exports = Lgbtroles2Command;
