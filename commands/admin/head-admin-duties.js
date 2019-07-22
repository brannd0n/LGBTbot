const commando = require('discord.js-commando');
const discord = require('discord.js');

class HeadAdminDutiesCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'head-admin-duties',
            group: 'admin',
            memberName: 'head-admin-duties',
            description: 'Head Admin duties'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
        .setColor(0x991919)
        .addField(":clipboard: **Head Admin Duties** :clipboard:",
        "Please remember even as head admins you are still here to help with the regular admin duties depending on what team you are in.\n\n" +
        "As head admins you are expected to be approachable at all times so that our members feel like they can bring any issues to you, please try to have your discord set to green when you are online as frequently as you can. \n\n" +
        "You are expected to know most of the goings on in the clan so that the leadership team are able to focus on other things that effect the clan as a whole.\n\n" +
        "We expect you to learn who regular guests are and who all of our members are so that in the event of a troll attack you are able to kick quickly and without hesitation.\n\n" +
        "To the best of your ability try and learn about past conflicts if you can, see the warning list and the ban list and attempt to learn as much of it as you can so you have better knowledge for dealing with potential issues in the future.\n\n")
        .addField("**Head Admin Definition**",
        "Being a Head Admin means you have demonstrated leadership skills and with this we want you to utilize these skills to also support and guide the rest of the admins.  We understand that when an Admin first joins the team it can be a very daunting experience and an overload of information, it takes them time to get used to everything. Your role is to support all of the admin team specifically focusing on whichever team you are a part of, you are to ensure they are always feeling comfortable and confident in what they are doing, providing advice & guidance where needed.\n\n" +
        "You are the stepping stone between leadership, the admins should feel like they can approach you with any issue, and leadership should only involved in issues that are substantially more complicated than usual.\n\n" + )
        "Based on what team you have experience in this will be the team you find yourself managing.\n\n")
        .addField("\u200b",
        "Where to go from here?\n\n" +
        "As we mentioned before you got this role because we’ve seen you demonstrate leadership skills, if you find yourself interested in becoming a part of our leadership team that’s very achievable from where you are now.\n\n" +
        "From this point on it’s all in your hands, we want to see you taking initiative, thinking of ways to improve the clan without being asked by someone else, being proactive in everything you do, stepping up to tasks when other people don’t. That doesn’t mean we want the clan to be your sole focus in life but we do want to see clear dedication and loyalty.\n\n")
        .setThumbnail("https://images-ext-2.discordapp.net/external/6siRRSL194PvUpJ_uAxIyXpF33bPgSsTN7MUm97ihS0/https/emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/facebook/65/card-index_1f4c7.png")
        .setFooter("Last updated")
        .setTimestamp();
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = HeadAdminDutiesCommand;
