const commando = require('discord.js-commando');
const discord = require('discord.js');

class RuneInfoCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'runeinfo',
            group: 'room',
            memberName: 'runeinfo',
            description: 'Runeinfo info.'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
        .setTitle("🤖 __**RUNEINFO BOT COMMANDS**__ 🤖")
        .setColor(0xFD00FF)
        .setDescription("\n \n Use these commands in the channel #runeinfo to gain useful information! \n \n Don't forget to assign your Runescape name first before using level/character related commands. !setrsn <username>")
        .setFooter("Last updated")
        .setTimestamp();
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = RuneInfoCommand;