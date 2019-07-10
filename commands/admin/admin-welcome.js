const commando = require('discord.js-commando');
const discord = require('discord.js');

class AdminWelcomeCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'admin-welcome',
            group: 'admin',
            memberName: 'admin-welcome',
            description: 'Welcome to the admin team'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
        .setColor(0x991919)
        .addField("📋 __**THE LGBT+ ADMIN HANDBOOK**__ 📋", "Welcome to the Admin team! We are glad to have you on board with us. Our core job is to ensure the clan rules are followed and to provide a safe and friendly environment for the LGBT+ community within Runescape.\n\n" +
        "Please take a few minutes to read through our guidelines below and familiarise yourself with your new role! Should you have any queries, please feel free to ask for clarification within our <#261530348310102019> channel.")
        .addField("🔑 **KEY INFORMATION** 🔑", "Please be aware that all new additions to the team are placed onto a month-long probationary period.\n\n" +
        "All admins need to remain accessible via the clan chat **AND** the discord server. Should an admin become inactive and unable to fulfill their duties, they could face being demoted. If demoted, an appropriate rank will be assigned based on clan xp/time served.")
        .setThumbnail("https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/lg/57/books_1f4da.png")
        .setFooter("Last updated")
        .setTimestamp();
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = AdminWelcomeCommand;
