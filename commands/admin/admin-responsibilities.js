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
       .addField('Inline field title', 'Some value here', true)
        .addField('Inline field title', 'Some value here', true)
        
        .addField(" **Honorary rank** ", 
        "For those of you who have helped shape our clan into the beauty that it is today, we've created a special honorary rank on our discord and in-game. If you were an admin for longer than 6 months and for whatever reason decided to step down, or found yourself to be in a situation where you were not active enough to fulfill proper admin duties, this rank will be offered to you.\n\n" +
        "As an honorary admin, your access to admin only channels for social reasons, but will not be able to take part in votes, although your input and opinions will still be valued.\n\n")
        .setFooter("Last updated")
        .setTimestamp();
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = AdminResponsibilitiesCommand;
