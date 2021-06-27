const commando = require('discord.js-commando');
const discord = require('discord.js');

class Lgbtroles2Command extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'lgbtroles2',
            group: 'welcome',
            memberName: 'lgbtroles2',
            description: 'Discord roles.'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.MessageEmbed()
        .setColor(0x22FF00)
        .setFooter("Last updated")
        .setTimestamp()
        .addField("**LGBT+ Roles Continued:**", "Biromantic - <:Biromantic:858795120344956939> \n \nAll The Things - <:lgbt:760240140894994513> \n \nNon-Binary - <:non_binary:760239301639405568> \n \nGenderfluid - <:gender_fluid:760240032992329739>  \n \nReciprosexual - <:Reciprosexual:760271871777832960> \n \nAgender - <:agender:760239950909669420> \n \nQueer - <:Queer_Heart:760323391331762258> \n \nNeptunic - <:Neptunic:761644159660064809> \n \nSaturnic - <:Saturnic:761644352605913118> \n \nUranic - <:Uranic:761644473985794070>")
        message.channel.send(myInfo)
    }
}

module.exports = Lgbtroles2Command;
