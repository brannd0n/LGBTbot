const commando = require('discord.js-commando');
const discord = require('discord.js');

class Rs3pvmrolesCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'rs3pvmroles',
            group: 'welcome',
            memberName: 'rs3pvmroles',
            description: 'Discord roles.'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.MessageEmbed()
        .setColor(0x22FF00)
        .setFooter("Last updated")
        .setTimestamp()
        .addField("**RS3 PVM Roles:**", "AOD - <:AoD:807576688551919628> \n \nED1 - 1️⃣ \n \nED2 - 2️⃣ \n \nED3 - 3️⃣ \n \nMazcab Raids - <:Beastmaster:858833521463656478> \n \nReaper - 💀\n \nNex - <:Nex:858833978156646440>  \n \nGWD2 - <:GWD2:858834522891485224> \n \nGWD3 - ⚔️\n\nRaksha - <:Raksha:858835233951842324> ")
        message.channel.send(myInfo)
    }
}

module.exports = Rs3pvmrolesCommand;
