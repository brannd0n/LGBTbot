const commando = require('discord.js-commando');
const discord = require('discord.js');

class GenRoomCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'genrooms',
            group: 'room',
            memberName: 'genrooms',
            description: 'General room info.'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
        .setTitle("General Rooms")
        .setColor(0xFD6600)
        .setDescription("<#177035196346925056> - For general everyday chit chat\n \n <#308940788400652288> - Please read this when you first join for vital information about the clan and discord. \n \n <#452984758826172416> - An explanation of all of our discord rooms. \n \n <#308711801166626816> - Where staff @ everyone with upcoming clan events or important clan related information. \n \n <#759783066130055208> - Weekly newsletter covering clan news, new members & RS3 achievements. <#673190007087038474> - Browse all of our colorful clan merchandise (NON-PROFIT) \n \n <#750469925092458496> - The twitter feed of our clans rs3 and osrs twitter accounts. \n \n <#760280826146979884> - React to an emoji to assign that role. Any miss use of the self assign system will result in it being taken away. \n \n <#329752955651620878> - Check here for available staff positions")
        .setFooter("Last updated")
        .setTimestamp();
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = GenRoomCommand;
