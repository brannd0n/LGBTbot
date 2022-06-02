const commando = require('discord.js-commando');
const discord = require('discord.js');

class OsrspvmrolesCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'osrspvmroles',
            group: 'welcome',
            memberName: 'osrspvmroles',
            description: 'Discord roles.'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.MessageEmbed()
        .setColor(0xFF8A00)
        .setFooter("Last updated")
        .setTimestamp()
        .addField("**OSRS PVM Roles:**", "Nex - <:nex:933671455273676861> \n \nBandos - <:bandos:933671513494810625> \n \nSaradomin - <:saradomin:933671513972936704> \n \nArmadyl - <:armadyl:933671513821950003> \n \nZamorak - <:zamorak:933671514098790410> \n \nDagannoth Kings - <:dks:933671345575825429>\n \nCorporeal Beast - <:corp:933671384490590219> \n \nCox - <:cox:933670425089695774> \n \nToB - <:tob:933671514111377508> \n \nBarbarian Assault - <:ba:922902213414748180> \n \nCox CM - <:cox_cm:922902671449542686> \n \nZalcano - <:zalcano:933671302953336862>")
        message.channel.send(myInfo)
    }
}

module.exports = OsrspvmrolesCommand;
