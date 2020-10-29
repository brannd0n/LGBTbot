const commando = require('discord.js-commando');
const discord = require('discord.js');

class HeadAdminManageCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'head-admin-manage',
            group: 'admin',
            memberName: 'head-admin-manage',
            description: 'Managing other admins'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.MessageEmbed()
        .setColor(0x991919)
        .addField(":clipboard: **Managing other admins** :clipboard:",
        "Because you have demonstrated that you possess leadership skills we also expect some small management of the rest of the admin team.\n\n" +
        "Should the clan chat become quiet or inactive we expect you to help keep conversation flowing and encourage people to talk more. If you yourself are unable to do this for whatever reason, try delegating to the rest of the admin team.\n\n" +
        "Even long time admins can doubt themselves on occasion, be sure to give them regular feedback and encouragement and check in every month to see if they are still happy with their role, let them know what they do well and what could be improved on. If any issues do arise bring it to the attention of one of the @leadership\n\n" )
        .setFooter("Last updated")
        .setTimestamp();
        message.channel.send(myInfo)
    }
}

module.exports = HeadAdminManageCommand;
