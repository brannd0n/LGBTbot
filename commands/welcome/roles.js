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
        .addField("🔡 __Discord Roles__ 🔡", "While you are in the discord you also\n have the option to choose roles, to\n represent how you identify.\n \n We have tried to be as inclusive as\n possible with the roles that are\n available, however if the role you want\n isn't on the current list please let a\n member of the <@&601391497698344960> team know and\n we will add it as long as it's **within reason**.")
        .addField("\u200b", "The current roles available to get based on reaction are found in <#760280826146979884>")
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = RolesCommand;
