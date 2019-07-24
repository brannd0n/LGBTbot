const commando = require('discord.js-commando');
const discord = require('discord.js');

class StaffRolesCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'staff-roles',
            group: 'welcome',
            memberName: 'staff-roles',
            description: 'Staff Roles'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
        .setColor(0x991919)
        .addField(" **Role Definition** ",
        
        "Each team will be lead by a member of leadership who will organise and manage the activities within that team ensuring the responsibilities are being completed.")
        .addBlankField()
        .addField(" **Events Team** ",
          "\n\n"+
          "• Hosting capping events.\n\n" +
          "• Maintaining events calendar.\n\n" +
          "• Hosting 2 events (per person) per month such as: Hayley’s clue events, spotlight events bossing events, skilling events.\n\n" +
          "• Encouraging other members to host events and supporting them whilst doing so.\n\n" +
          "• If you are primarily OSRS, host suitable events for the FC community.\n\n" +
          "• Organise and host monthly skilling competitions, share the responsibility of hosting these competitions evenly amongst the events team. (take it in turns)\n\n" +
          "• Updating the clan notice board for the events being hosted along with the clan welcome message when joining the CC.\n\n" ,true )
        .addBlankField()
        .addField(" **Community Management** ",
                
                "• Forum bumping both OSRS and RS3 \n\n" +
                "• Management of the OSFC (guest minimum)\n\n" +
                "• Promotions in RS3 cc \n\n" +
                "• Recruitment (in game and on forums)\n\n" +
                "• Inviting new members to the discord and giving everyone the correct roles\n\n" +
                "• Removing inactive members\n\n" +
                "• Make sure the discord is up to date and has all relevant and correct information\n\n" +
                "• Help make announcements using the LGBoT+\n\n" +
                "• Actioning Feedback surveys when needed from the Admin/Leadership Team.\n\n" +
                "• Managing the social media accounts (Twitter/Instagram etc) in publishing posts and managing account security (e.g. update login details when admins leave/ensure only the relevant people have the login details).\n\n" +
                "• Maintaining the runeclan page for the clan.\n\n" ,true)
        .setFooter("Last updated")
        .setTimestamp();
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = StaffRolesCommand;
