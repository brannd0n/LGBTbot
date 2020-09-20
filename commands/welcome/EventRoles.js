const commando = require('discord.js-commando');
const discord = require('discord.js');

class EventRolesCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'eventroles',
            group: 'welcome',
            memberName: 'eventroles',
            description: 'Event Roles info.'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
        .addField("__Event Roles__", "While in this server everyone has the ability to self assign events roles to be tagged for events hosted on RS3 and OSRS.\n\n" +
        "To assign yourself the event role react to the following and you will be given the role.\n\n" +
        ":heart: - <@&635078700660031518>\n" +
        ":green_heart: - <@&669623198224220170>\n" +
        ":blue_heart: - <@&757214043579744346>\n" +
        ":purple_heart: - <@&757214331703394365>\n")
        .setColor(0x00FFFF)
        .setFooter("Last updated")
        .setTimestamp();
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = EventRolesCommand;
