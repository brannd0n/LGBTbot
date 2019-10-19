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
        var myInfo = new discord.RichEmbed()
        .setColor(0xFF00D6)
        .setTimestamp()
        .addField(" __Mission Statement__", "The purpose of Diversity at Jagex is to promote inclusivity and equal opportunities within the company. Each individual, each interest group, each background is important.\n\n" +
        " As such, this is a support network for those who feel they would benefit from this support, those who want to promote positive change, or those who are allies.\n\n" +
        "(Originally, this was Women at Jagex but our remit is essentially to ensure that no one is erased, disadvantaged or discriminated against.) Anyone who values the principles of tolerance, fairness and openness is welcome!",true)
        .addBlankField()
        .addField(" __Sub Aims:__", "**-** Inspire people from underrepresented groups to apply to Jagex, by various means including outreach & mentorship from and increased visibility of Jagex employees from underrepresented groups, support of Jagex PR to portray Jagex as an inclusive company, support of recruitment by attending conferences and sponsoring relevant events. \n\n**-** Improve retention of employees from underrepresented groups by targeted mentorships, career support, recognition of contribution. \n\n**-** Improve corporate social strategy & culture by building awareness for the benefits of inclusivity within the company and our games, finding allies and organising educational events.\n\n", true)
        .setThumbnail("https://media.giphy.com/media/SwyZW2d6x3KMlCeE1O/giphy.gif")
        .setFooter("Last updated")
        .setTimestamp()
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = DivMissionCommand;
