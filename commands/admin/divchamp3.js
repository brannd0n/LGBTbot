const commando = require('discord.js-commando');
const discord = require('discord.js');

class DivChamp3Command extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'divchamp3',
            group: 'admin',
            memberName: 'divchamp3',
            description: 'Welcome to the champion team'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
        .setColor(0x991919)
        .setDescription("PLEASE REMEMBER TO READ WHAT EACH INDIVIDUAL HAS BEEN SAYING BEFORE VERIFYING.\n \n"+
        "Due to the amount of trolls we received when we first opened the server this is a way for us to get to know our members better without locking the server completely, after 25+ messages we should know a person's interests well enough to determine if they are here to troll or not.")
        .setFooter("Last updated")
        .setTimestamp();
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = DivChamp3Command;
