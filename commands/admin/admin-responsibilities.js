const commando = require('discord.js-commando');
const discord = require('discord.js');

class AdminResponsibilitiesCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'admin-responsibilities',
            group: 'admin',
            memberName: 'admin-responsibilities',
            description: 'Admin responsibilities'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
        .setColor(0x991919)
        .addField("**Those who filled specific vacancies have added responibilites.**", "If you were recruited on a basis that you were to follow out certain responsibilities, you're required to keep your promise and fulfill them on a weekly basis.\n\n" +
        "If you can not keep to your word or find yourself in a situation in which you can not fulfill these, please speak to a member of leadership and come to an agreement with them on how to proceed with your admin role.\n\n" +
        "__** Your added responsibilities are as follows:**__")
        .addField("👨‍👩‍👧‍👦 **Recruiter** 👨‍👩‍👧‍👦", "We want to see genuine, active attempts at recruitment on the forums. This is not just one or two posts a day, we want to see up to **10** posts per day.\n\n" +
        "[Click here to view the clan recruitment forum](http://services.runescape.com/m=forum/c=w9VNiocRUOQ/sl=0/forums.ws?94,95)", true)
        .addField("🏆 **Events** 🏆", "We want to see you hosting as many events as you can. Keeping up with regular and consistent events is a must due to our nature of being a social & community clan. This also contributes to helping other admins host their events, whether it be regular or the weekly capping event.", true)
        .addField("**Honorary rank**", "For those of you who has helped shape our clan into the beauty that it is today, we've created a special honorary rank on our discord and in-game. If you were an admin for longer than 6 months and for whatever reason decided to step down, or found yourself to be in a situation where you were not active enough to fulfill proper admin duties, this rank will be offered to you.\n\n" +
        "As an honorary admin, your access to admin only channels for social reasons, but will not be able to take part in votes, although your input and opinions will still be valued.")
        .setFooter("Last updated")
        .setTimestamp();
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = AdminResponsibilitiesCommand;
