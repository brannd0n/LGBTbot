const commando = require('discord.js-commando');
const discord = require('discord.js');

class AdminWarningCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'admin-warning',
            group: 'admin',
            memberName: 'admin-warning',
            description: 'Warning system'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
        .setColor(0x991919)
        .addField("⚠️ __**WARNINGS**__ ⚠️", "We run a 3 strike system both on discord and in our clan chat. This means we give both clan members and guests 3 attempts to change their behaviour or they will receive a ban from the clan and discord.\n\n" +
        "We expect our admins to use their common judgement skills to determine if an offence is worthy of an actual warning or just a quiet word. (Both of which should be recorded in <#474555372338675713>). If a leader is to ever disagree with an action you gave, we will action it appropriately.\n\n" +
        "Once an official warning has been given, you must update the warning spreadsheet. This spreadsheet exists solely to make our lives easier when it comes to keeping track of warnings against every clan member/guest.\n\n" +
        "[Click here to view the warning spreadsheet.](https://docs.google.com/spreadsheets/d/19y9dEi98kO0loHWhzZpe0a-fPSa1CXZ8b4p_PYC7L7g)")
        .setThumbnail("https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/facebook/138/white-exclamation-mark-ornament_2755.png")
        .setFooter("Last updated")
        .setTimestamp();
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = AdminWarningCommand;
