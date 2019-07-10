const commando = require('discord.js-commando');
const discord = require('discord.js');

class ClockCommsCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'clockcomms',
            group: 'room',
            memberName: 'clockcomms',
            description: 'Clock commands.'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
        .setTitle("Game Clock Commands")
        .setColor(0x22FF00)
        .setDescription("`!time` -- Displays the current in-game time. \n \n `!reset` -- Displays how long till the game resets. \n \n `!price` <item name> -- Displays grand exchange information.")
        .setFooter("Last updated")
        .setTimestamp();
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = ClockCommsCommand;