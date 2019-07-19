const commando = require('discord.js-commando');
const discord = require('discord.js');

class AdminCommunityCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'admin-community',
            group: 'admin',
            memberName: 'admin-community',
            description: 'admin events team duties'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
        .setColor(0x991919)
        .addField(":pencil: __**Community Management**__ :pencil:",
        "Community management Head admins:\n\n" +
        "Community management leadership:\n\n" +
        "• Forum bumping both OSRS and RS3\n\n" +
        "• Management of the OSFC (guest minimum).\n\n" +
        "• Promotions in RS3 cc\n\n" +
        "• Recruitment (in game and on forums)\n\n" +
        "• Inviting new members to the discord and giving everyone the correct roles\n\n" +
        "• Removing inactive members\n\n" +
        "• Make sure the discord is up to date and has all relevant and correct information.\n\n"
        "• Should you need to make changes to discord, primarily deleting things, please confirm this with other community management admins and keep a copy/archive of things deleted. This may include emotes, channels, large chunks of text etc\n\n"
        "• Help make announcements using the LGBoT+\n\n"
        "• Actioning Feedback surveys when needed from the Admin/Leadership Team.\n\n"
        "• Managing the social media accounts (Twitter/Instagram etc) in publishing posts and managing account security (e.g. update login details when admins leave/ensure only the relevant people have the login details).\n\n"
        "• Keeping a copy of frequently used image assets within the Google doc linked in the “Helpful Links” section of #admin_handbook\n\n"
        "• Maintaining the runeclan page for the clan.\n\n"
        "Click here to view the clan recruitment\n\n" + 
        "Form.\n\n" )
        .setThumbnail("")
        .setFooter("Last updated")
        .setTimestamp();
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = AdminCommunityCommand;
