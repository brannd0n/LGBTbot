const commando = require('discord.js-commando');
const discord = require('discord.js');

class FriendlyCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'friendly',
            group: 'room',
            memberName: 'friendly',
            description: 'Friendly bot info.'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
        .setTitle("🤖 __**Friendly BOT COMMANDS**__ 🤖")
        .setColor(0xFD00FF)
        .setDescription(" `-setrsn` username -- Set rsn to show your stats. `-alog` -- Displays adventure log. \n \n `-stats` -- Displays RS3 stats. \n \n `-07stats` -- Displays OSRS stats.\n \n `-perks` -- Displays current perks available in `-perk` command. \n \n `-perk` -- Displays the combination for the perk your looking for. For example ‘-perk honed’ for honed combination. \n \n `-pylon` -- Displays pylon percentage. \n \n `-split` -- Displays GP split for the number of people in the group.")
        .setFooter("Last updated")
        .setTimestamp();
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = FriendlyCommand;
