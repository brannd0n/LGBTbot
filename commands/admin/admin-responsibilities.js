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
        var myInfo = new discord.MessageEmbed()
        .setColor(0x991919)
        .setDescription("🏆 **Events Team** 🏆 \n\n" +
                "Events head admins: <@148577013819637761>\n\n" +
                "• Hosting capping events\n\n" +
                "• Maintaining the events calendar\n\n" +
                "• Hosting 2 events (per person) per month such as: clue events, spotlight events, bossing events, skilling events\n\n" +
                "• Encouraging other members to host events and supporting them whilst doing so\n\n" +
                "• Organise and host monthly skilling competitions, share the responsibility of hosting these competitions evenly amongst the events team. (take it in turns)\n\n" +
                "• Updating the clan notice board for the events being hosted along with the clan welcome message when joining the CC.\n\n" +
        "👨‍👩‍👧‍👦 **Community Management** 👨‍👩‍👧‍👦 \n\n" +
          "Community management Head admins:<@699036323058679828>\n\n" +
          "• Forum bumping.\n\n" +
          "• Promotions in RS3 Clan\n\n" +
          "• Recruitment (in game and on forums)\n\n" +
          "• Inviting new members to the discord\n\n" +
          "• Removing inactive members\n\n")
          .addField("\u200b",
          "• Make sure the discord is up to date and has all relevant and correct information.\n\n" +
          "• Should you need to make changes to discord, primarily deleting things, please confirm this with other community management admins and keep a copy/archive of things deleted. This may include emotes, channels, large chunks of text etc\n\n" +
          "• Actioning Feedback surveys when needed from the Admin/Leadership Team.\n\n" +
          "• Managing the social media accounts (Twitter/Instagram etc) in publishing posts and managing account security (e.g. update login details when admins leave/ensure only the relevant people have the login details).\n\n" +
          "• Keeping a copy of frequently used image assets within the Google doc linked in the “Helpful Links” section of <#329746742847340554>\n\n" +
          "• Maintaining the runeclan page for the clan.\n\n" +
        "[Click here to view the clan recruitment forum](http://services.runescape.com/m=forum/c=w9VNiocRUOQ/sl=0/forums.ws?94,95)")
        .addField("\u200b",
        "If you find yourself in a situation where you are unsure about what you should do, look for a <@&448922576400678924> for assistance, they are here to directly assist you, they are experienced that they know how to deal with any issue that comes forward, only under extreme circumstances do leadership need to get involved. (that doesn’t mean you should be afraid to ask leadership for help if no headadmins are online)\n\n" +
        "If you can not keep your word or find yourself in a situation in which you can not fulfill these, please speak to a member of leadership and come to an agreement with them on how to proceed with your admin role.\n\n")
        .setFooter("Last updated")
        .setTimestamp();
        message.channel.send(myInfo)
    }
}

module.exports = AdminResponsibilitiesCommand;
