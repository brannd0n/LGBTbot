const commando = require('discord.js-commando');
const discord = require('discord.js');

class HeadAdminInterviewCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'head-admin-interview',
            group: 'head-admin',
            memberName: 'head-admin-interview',
            description: 'Head Admin closing interview'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
        .setColor(0x991919)
        .addField(":clipboard: Closing interview questions :clipboard:",
        "(these are a guide, don’t simply copy and paste in one go, actually have a conversation with the new admin)\n\n" +
          "▫️ How are you enjoying the position as admin?\n\n" +
          "▫️ How do you feel you are doing with your new role?\n\n" +
          "▫️ Do you currently have any concerns?\n\n" +
          "▫️ Is there anything you would potentially like to see changed within the clan and the admin team? (optional)\n\n" +
          "▫️ How do you feel you can continue to improve yourself as an admin of this clan?\n\n" +
          "Only one head admin is to hold the closing interview. So discuss amongst yourselves which one of you is to step up, because it'll be daunting if every head admin decides to message the newbie.\n\n" +
          "If you agree to host the closing interview, you **must** post the results so they can be archived. It can be referenced later-on if we ever need to review feedback for future changes.\n\n" )
        .setThumbnail("https://images-ext-2.discordapp.net/external/9IbOQEznz8qTStqyyrMjWbHO4sg-RiRY4cB0MLmiLyc/https/emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/emojione/151/scroll_1f4dc.png")
        .setFooter("Last updated")
        .setTimestamp();
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = HeadAdminInterviewCommand;
