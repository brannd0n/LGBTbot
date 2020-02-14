const commando = require('discord.js-commando');
const discord = require('discord.js');

class OsrsRoomCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'osrsrooms',
            group: 'room',
            memberName: 'osrsrooms',
            description: 'OSRS rooms info.'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
        .setTitle("Runescape Rooms")
        .setColor(0xFBD700)
        .setDescription("<#532710360919310347> - 'osrs lgbt' fc. Discuss anything related to old school runescape here.  \n \n <#664616078705426452> - All the FC events will be announced and discussed here! \n \n <#666743386417528862> - All OSRS game and clan announcements \n \n <#664616138638098432> - Post all your OSRS drops, clue rewards, skill achievements, quests completed and goals achieved here! \n \n <#672124924336275479> - Use this room for helpful advice on OSRS bosses, clues, quests, etc." )
        .setFooter("Last updated")
        .setTimestamp();
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = OsrsRoomCommand;
