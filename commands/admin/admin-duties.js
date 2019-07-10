const commando = require('discord.js-commando');
const discord = require('discord.js');

class AdminDutiesCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'admin-duties',
            group: 'admin',
            memberName: 'admin-duties',
            description: 'Admin duties'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
        .setColor(0x991919)
        .addField("__**Duties**__", "As an overall standard, we expect our admins to use common sense when it comes to day-to-day life within our clan chat and discord.\n\n" +
        "Heavy discussion **will** take place, conversations **will** get heated, and you will find yourself in **difficult** situations. We are relying on all of you to remain calm and level headed when dealing with clan members.\n\n" + 
        "Even if you find a fellow admin behaving in a questionable manner, we ask that you do not portray, or act on, any favouritism, and keep all biased opinions for private talks **outside** of the admin chat.")
        .setFooter("Last updated")
        .setTimestamp();
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = AdminDutiesCommand;
