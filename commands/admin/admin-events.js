const commando = require('discord.js-commando');
const discord = require('discord.js');

class AdminEventsCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'admin-event',
            group: 'admin',
            memberName: 'admin-event',
            description: 'admin events team duties'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
        .setColor(0x991919)
        .addField(":calender: __**Events Team**__ :calender:",
        "Events head admins:\n\n" +
        "Events Leadership:\n\n" + )
        .addField("\u200b",
        "• Hosting capping events.\n\n" +
        "• Maintaining the events calendar.\n\n" +
        "• Hosting 2 events (per person) per month such as: Hayley’s clue events, spotlight events, bossing events, skilling events.\n\n" +
        "• Encouraging other members to host events and supporting them whilst doing so.\n\n" +
        "• If you are primarily OSRS, host suitable events for the FC community.\n\n" +
        "• Organise and host monthly skilling competitions, share the responsibility of hosting these competitions evenly amongst the events team. (take it in turns)\n\n" +
        "• Updating the clan notice board for the events being hosted along with the clan welcome message when joining the CC.\n\n" +)
        .setThumbnail("")
        .setFooter("Last updated")
        .setTimestamp();
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = AdminEventsCommand;
