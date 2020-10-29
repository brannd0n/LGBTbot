const commando = require('discord.js-commando');
const discord = require('discord.js');

class GamingRoomCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'gaming',
            group: 'room',
            memberName: 'gaming',
            description: 'Gaming rooms info.'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.MessageEmbed()
        .setTitle("Gaming Rooms")
        .setColor(0xFF0000)
        .setDescription("<#760566444320227338> - Discuss and share pokemon go related things \n \n <#760566518039445575> - Discuss and share any nintendo related news/screenshots \n \n <#760566559964921946> - Discuss and share any xbox related news/games \n \n  <#760566607164211288> - Discuss any news related to playstation games. \n \n <#760566642840829952> - Discuss and share any steam related news/games \n \n <#760566688001032223> - Discuss and share any pc related news/games")
        .setFooter("Last updated")
        .setTimestamp();
        message.channel.send(myInfo)
    }
}

module.exports = GamingRoomCommand;
