const commando = require('discord.js-commando');
const discord = require('discord.js');

class HeadAdminWelcomeCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'head-admin-welcome',
            group: 'admin',
            memberName: 'head-admin-welcome',
            description: 'Welcome to the head admin team'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.MessageEmbed()
        .setColor(0x991919)
        .addField("📋 __**Head Admin Handbook**__ 📋", "First of all congratulations on becoming a head admin. To have achieved this rank it means you have gone above and beyond what we expect of regular admins and have shown potential for leadership.\n\n" +
        "By accepting this rank, however, it does mean we expect more from you than the rest of the admin team.\n\n" +
        "This handbook is here to help you and explain your added responsibilities.")
        .addField("**Head Admin Definition**",
        "Being a Head Admin means you have demonstrated leadership skills and with this we want you to utilize these skills to also support and guide the rest of the admins.  We understand that when an Admin first joins the team it can be a very daunting experience and an overload of information, it takes them time to get used to everything. Your role is to support all of the admin team specifically focusing on whichever team you are a part of, you are to ensure they are always feeling comfortable and confident in what they are doing, providing advice & guidance where needed.\n\n" +
        "You are the stepping stone between leadership, the admins should feel like they can approach you with any issue, and leadership should only involved in issues that are substantially more complicated than usual.\n\n" +
        "Based on what team you have experience in this will be the team you find yourself managing.\n\n")
        .addField(":family_mwgb: **Mentoring The Newbies** :family_mwgb:", "As a head admin, because of your experience in this position, we require you to help mentor the newest additions to our team. Make sure you are clear which team you are responsible for.\n\n" +
        "You need to make sure the new admins are upholding their responsibilities with their new rank but you also need to make sure they are happy and not doubting themselves too much.\n\n" +
        "On occasion we are subject to mass troll attacks in the clan chat as you well know, dealing with this kind of situation can be daunting even for the most experienced admins, let alone someone new.\n\n" +
        "If you find one of our newest admins responsible in this situation don’t hesitate to help them out and afterwards send them a private message or ask them in #admin how they are feeling.\n\n")
        .addField("\u200b","Be sure to give them feedback on how they dealt with the situation.\n\n" +
        "After 2 weeks on probation as an admin we want you to check in with the newest admins and let them know what they are doing well but also what they could do with improving on in order to pass probation.\n\n" +
        "Once the probation period has ended we expect you to have a “closing interview” with the newest admin and ask them about how they think their probation went, if they have passed let them know what they did well, if they were unfortunate enough to have failed explain the reasons why.\n\n")
        .setThumbnail("https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/lg/57/books_1f4da.png")
        .setFooter("Last updated")
        .setTimestamp();
        message.channel.send(myInfo)
    }
}

module.exports = HeadAdminWelcomeCommand;
