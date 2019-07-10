const commando = require('discord.js-commando');
const discord = require('discord.js');

class AdminRecruitmentCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'admin-recruitment',
            group: 'admin',
            memberName: 'admin-recruitment',
            description: 'Recruiting on the forums'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
        .setColor(0x991919)
        .addField("📈 __**RECRUITMENT/INVITES**__ 📈", "We actively recruit on the official RS forums. As an admin you are required to help with the day-to-day responsibilities that are needed to help monitor the thread. How frequently you bump can vary by the hour, and depends on what thread page we are on. We aim to stay on page #1 as much as possible, so bumping every 2/3 hours is essential.\n\n" +
        "Quick find code: `290-291-31-66034838`\n" +
        "[Click here to visit the forum thread.](http://services.runescape.com/m=forum/c=w9VNiocRUOQ/sl=0/forums.ws?290,291,31,66034838)\n\n" +
        "There is one major requirement to join our clan. That is to understand what `LGBT+` stands for.\n\n" +
        "As there are many answers to this question, we expect you as recruiters to judge their answer as best as you can. This question will be what you'd use to distinguish between trolls and regular allies.")
        .addField("\u200b", "Providing this question is answered to your satisfaction, you may continue you invite them to the clan using your admin powers both in-game and on discord.\n\n" +
        "There will be times when you may not be satisfied enough to offer an invite to someone, and this is when you should ask them to continue being a guest with us until we are comfortable enough to offer them a place in our community.\n\n" +
        "If a player has posted an application form on our forum thread, you should respond with a kind greeting if they are accepted. Request that they guest in the clan chat until a member of the admin team is available to meet up in-game and offer them an invite. If you are not online at the time of accepting their applications, please post in <#261530348310102019> to alert everyone, making sure they are aware of the person needing an invite.")
        .setThumbnail("https://vignette.wikia.nocookie.net/centrolatino/images/6/65/RuneScape.png/revision/latest")
        .setFooter("Last updated")
        .setTimestamp();
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = AdminRecruitmentCommand;
