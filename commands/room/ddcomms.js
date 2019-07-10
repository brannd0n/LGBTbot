const commando = require('discord.js-commando');
const discord = require('discord.js');

class DdCommsCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'ddcomms',
            group: 'room',
            memberName: 'ddcomms',
            description: 'Game D&D Commands.'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
        .setTitle("Game D&D Commands")
        .setColor(0xFBD700)
        .setDescription("`!vos` -- Displays the current Voice of Seren districts. \n \n `!cache` -- Displays when the next Guthixian Cache is. \n \n `!viswax` -- Displays the current viswax combinations. \n \n `!bigchin` -- Displays when the next Big Chinchompa will be. \n \n `!circus` -- Displays the current location for the Circus. \n \n `!raven` -- Displays if there is a raven currently in Prifddinas. \n \n `!sinkhole` -- Displays when the next sinkhole is. \n \n `!penglocs` -- Displays the current location of the Penguins on World 60. \n \n `!arc`  -- Displays the current arc rotations. \n \n `!dnd` -- Displays the current weekly Distraction and Diversion that rewards you a free key.")
        .setFooter("Last updated")
        .setTimestamp();
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = DdCommsCommand;