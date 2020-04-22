const commando = require('discord.js-commando');
const discord = require('discord.js');

class RolesCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'roles',
            group: 'welcome',
            memberName: 'roles',
            description: 'Discord roles.'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
        .setColor(0x22FF00)
        .setFooter("Last updated")
        .setTimestamp()
        .addField("🗨️ __DISCORD ROLES__ 🗨️", "These are the current roles available, for everybody to choose:\n __**PLEASE ASK A MEMBER OF THE ADMIN TEAM IF YOU WANT ANY**__")
        .setImage("https://i.gyazo.com/e6f98faa30636483aedc7ac0df016cb3.png");
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = RolesCommand;
