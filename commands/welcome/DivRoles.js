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
        var myInfo = new discord.MessageEmbed()
        .addField("__Roles__", "While in this server everyone has the ability to self assign pronouns, you will be able to do this as soon as you join the server, we request everyone respects each other’s pronouns and hope you take full advantage of this ability.\n\n" +
        "To assign yourself pronouns please react to this post with any of the corresponding emojis.\n\n" +
        ":purple_heart: - <@&630739941579816967>\n" +
        ":green_heart: - <@&630740361337372692>\n" +
        ":yellow_heart: - <@&630740555143315463>\n" +
        "You may also assign yourselves roles to display if you play RS3 or OSRS.\n\n" +
        ":crossed_swords: - <@&630765616697049088>\n" +
        ":bow_and_arrow: - <@&630765530030014476>\n")
        .setColor(0x00FFFF)
        .setFooter("Last updated")
        .setTimestamp();
        message.channel.send(myInfo)
    }
}

module.exports = DivRolesCommand;
