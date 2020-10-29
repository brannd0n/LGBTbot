const commando = require('discord.js-commando');
const discord = require('discord.js');

class DivMissionCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'divmission',
            group: 'welcome',
            memberName: 'divmission',
            description: 'Diversity Server Mission.'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.MessageEmbed()
        .setColor(0xFF00D6)
        .setTimestamp()
        .addField(" __Our Mission Statement__", "The purpose of Diversity at Jagex is to promote inclusivity and equal opportunities within the company and without. It functions as a support network, a framework to create positive change, and a place for allies to show their support.\n\n" +
        "Our remit is to ensure that no one is erased, disadvantaged or discriminated against. Anyone who values the principles of tolerance, fairness and openness is welcome!\n\n" ,true)
        .addField('\u200b', '\u200b')
        .addField(" __Our Goals__", "**•** To inspire people from underrepresented groups to apply to Jagex by making ourselves visible at conferences and events, providing mentorship, and developing an inclusive approach to hiring and graduate schemes. \n\n**•** To raise awareness of the benefits of inclusivity in our games by organising educational events and reaching out to allies. \n\n**•** To support our diverse community of players by creating safe spaces for communication, increasing diverse representation within our game and sponsoring relevant events.\n\n", true)
        .setThumbnail("https://media.giphy.com/media/SwyZW2d6x3KMlCeE1O/giphy.gif")
        .setFooter("Last updated")
        .setTimestamp()
        message.channel.send(myInfo)
    }
}

module.exports = DivMissionCommand;
