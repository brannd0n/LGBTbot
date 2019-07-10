const commando = require('discord.js-commando');
const discord = require('discord.js');

class AdminRolesCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'admin-roles',
            group: 'admin',
            memberName: 'admin-roles',
            description: 'Roles for admin types'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
        .setColor(0x991919)
        .addField("**🏵️ Coordinator 🏵️**", "• Frequently bump our forum thread\nwithout being asked.\n\n" +
        "• Help mentor new and existing admins.\n\n" +
        "• Help organise the weekly capping event.\n\n" +
        "• Help organise other weekly events.\n\n" +
        "• Handle situations of conflict without\nhesitation.\n\n" +
        "• Help host capping/regular events.", true)
        .addField("**🏅 Organiser 🏅**", "• Frequently bump our forum thread.\n\n" +
        "• Help host capping events.\n\n" +
        "• Host regular bossing/social events.\n\n" +
        "• Know how to handle situations of\nconflict and be prepared to ask for\nhelp from other team members/leaders.", true)
        .setFooter("Last updated")
        .setTimestamp();
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = AdminRolesCommand;
