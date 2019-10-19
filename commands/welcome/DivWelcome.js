const commando = require('discord.js-commando');
const discord = require('discord.js');

class DivWelcomeCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'divwelcome',
            group: 'welcome',
            memberName: 'divwelcome',
            description: 'Welcome info.'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
        .setTitle("<:rbheart:495103097547259925> __**WELCOME TO THE OFFICIAL RUNESCAPE DIVERSITY DISCORD SERVER**__ <:rbheart:495103097547259925>")
        .setColor(0xFF0000)
        .setDescription("Welcome to the Runescape Diversity & Inclusion Discord, player run and Jagex Mod supported. This discord was brought about after a meeting between players and Jagex Diversity & Inclusion (D&I)  Mods at Runefest 2019 regarding diversity within the game.")
        .setThumbnail("https://media0.giphy.com/media/l378zKVk7Eh3yHoJi/giphy.gif")
        .setFooter("Last updated")
        .setTimestamp();
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = DivWelcomeCommand;
