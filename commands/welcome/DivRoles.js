const commando = require('discord.js-commando');
const discord = require('discord.js');

class DivRolesCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'divroles',
            group: 'welcome',
            memberName: 'divroles',
            description: 'Roles info.'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
        .addField("__Roles__", "While in this server everyone has the ability to self assign pronouns, you will be able to do this as soon as you join the server, we request everyone respects each other’s pronouns and hope you take full advantage of this ability.\n\n" +
        "To assign yourself pronouns use the following command/commands in #introductions\n\n" +
        "`!They` - @they/them/theirs\n" +
        "`!She` - @she/her/her\n" +
        "`!He` - @he/him/his\n")
        .setColor(0x00FFFF)
        .setFooter("Last updated")
        .setTimestamp();
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = DivRolesCommand;
