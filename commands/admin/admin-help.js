const commando = require('discord.js-commando');
const discord = require('discord.js');

class AdminHelpCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'admin-help',
            group: 'admin',
            memberName: 'admin-help',
            description: 'Admin help'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
        .setColor(0x991919)
        .addField( "If you find yourself in a situation where you are unsure about what you should do, look for a #headadmin for assistance, they are here to directly assist you, they are experienced that they know how to deal with any issue that comes forward, only under extreme circumstances do leadership need to get involved. (that doesn’t mean you should be afraid to ask leadership for help if no headadmins are online)\n\n")
        .addField("If you can not keep your word or find yourself in a situation in which you can not fulfill these, please speak to a member of leadership and come to an agreement with them on how to proceed with your admin role.\n\n")
        .setFooter("Last updated")
        .setTimestamp();
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = AdminHelpCommand;
