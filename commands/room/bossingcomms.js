const commando = require('discord.js-commando');
const discord = require('discord.js');

class BossingCommsCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'bossingcomms',
            group: 'room',
            memberName: 'bossingcomms',
            description: 'Bossing commands.'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
        .setTitle("Bossing Commands")
        .setColor(0xFD6600)
        .setDescription("`!vorago` -- Displays what the Vorago rotation is. \n \n `!araxxi` -- Displays what path is closed for Araxxi. \n \n `!rots` -- Displays what the current rotation for Rise of the Six is.")
        .setFooter("Last updated")
        .setTimestamp();
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = BossingCommsCommand;