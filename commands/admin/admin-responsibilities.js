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
        .addField("🏆 **Events Team** 🏆",
                "Events head admins: <@&439868870837272577>\n\n" +
                "• Hosting capping events\n\n" +
                "• Maintaining the events calendar\n\n" +
                "• Hosting 2 events (per person) per month such as: Hayley’s clue events, spotlight events, bossing events, skilling events\n\n" +
                "• Encouraging other members to host events and supporting them whilst doing so\n\n" +
                "• If you are primarily OSRS, host suitable events for the FC community\n\n" +
                "• Organise and host monthly skilling competitions, share the responsibility of hosting these competitions evenly amongst the events team. (take it in turns)\n\n" +
                "• Updating the clan notice board for the events being hosted along with the clan welcome message when joining the CC.\n\n",true)
        .addField("👨‍👩‍👧‍👦 **Community Management** 👨‍👩‍👧‍👦",
          "Community management Head admins:<@211973520639524864>\n\n" +
          "• Forum bumping both OSRS and RS3\n\n" +
          "• Management of the OSFC (guest minimum).\n\n" +
          "• Promotions in RS3 cc\n\n" +
          "• Recruitment (in game and on forums)\n\n" +
          "• Inviting new members to the discord and giving everyone the correct roles\n\n" +
          "• Removing inactive members\n\n",true )
          .addField("\u200b",
          "• Make sure the discord is up to date and has all relevant and correct information.\n\n" +
          "• Should you need to make changes to discord, primarily deleting things, please confirm this with other community management admins and keep a copy/archive of things deleted. This may include emotes, channels, large chunks of text etc\n\n" +
          "• Help make announcements using the LGBoT+\n\n" +
          "• Actioning Feedback surveys when needed from the Admin/Leadership Team.\n\n" +
          "• Managing the social media accounts (Twitter/Instagram etc) in publishing posts and managing account security (e.g. update login details when admins leave/ensure only the relevant people have the login details).\n\n" +
          "• Keeping a copy of frequently used image assets within the Google doc linked in the “Helpful Links” section of <#329746742847340554>\n\n" +
          "• Maintaining the runeclan page for the clan.\n\n" +
        "[Click here to view the clan recruitment forum](http://services.runescape.com/m=forum/c=w9VNiocRUOQ/sl=0/forums.ws?94,95)", true)
        .addField("\u200b","If you find yourself in a situation where you are unsure about what you should do, look for a <@448922576400678924> for assistance, they are here to directly assist you, they are experienced that they know how to deal with any issue that comes forward, only under extreme circumstances do leadership need to get involved. (that doesn’t mean you should be afraid to ask leadership for help if no headadmins are online)\n\n" +
        "If you can not keep your word or find yourself in a situation in which you can not fulfill these, please speak to a member of leadership and come to an agreement with them on how to proceed with your admin role.\n\n")
        .addField(" **Honorary rank** ",
        "For those of you who have helped shape our clan into the beauty that it is today, we've created a special honorary rank on our discord and in-game. If you were an admin for longer than 6 months and for whatever reason decided to step down, or found yourself to be in a situation where you were not active enough to fulfill proper admin duties, this rank will be offered to you.\n\n" +
        "As an honorary admin, your access to admin only channels for social reasons, but will not be able to take part in votes, although your input and opinions will still be valued.\n\n")
        .setFooter("Last updated")
        .setTimestamp();
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = AdminResponsibilitiesCommand;
