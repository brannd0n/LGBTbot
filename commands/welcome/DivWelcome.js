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
        .addField("<:emoji_1:631903023211479040> __**WELCOME TO THE OFFICIAL RUNESCAPE DIVERSITY DISCORD SERVER**__ <:emoji_1:631903023211479040>", "Welcome to the Runescape Diversity & Inclusion Discord, player run and Jagex Mod supported. This discord was brought about after a meeting between players and JMods from the “Diversity at Jagex” group at Runefest 2019 regarding diversity within the game.\n\n" +
        "Diversity is a large spectrum and encompasses age, race and ethnicity, religion/belief, disability (both physical and mental), neurodivergence, class, gender, sexuality and more.\n" +
        "So if you feel you identify within any of these elements within the diversity spectrum of any other minority or underrepresented group, please also provide your perspective.\n" +
        "Inclusion is about understanding diversity and making changes to make sure everyone feels comfortable and represented.")
        .setColor(0xFF0000)
        .setThumbnail("https://media0.giphy.com/media/l378zKVk7Eh3yHoJi/giphy.gif")
        .setFooter("Last updated")
        .setTimestamp();
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = DivWelcomeCommand;
