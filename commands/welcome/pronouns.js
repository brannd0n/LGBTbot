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
        .addField("**Pronouns:**", "He/Him/His - 🟡 \n \nShe/Her/Hers - 🟨 \n \nThey/Them/Their - 🟢 \n \nFae/Faer - 🟩 \n \nZe/Hir - ⚪ \n \nXey/Xem/Xyr - ⬜ \n \nIt/Its/Itself - 🟠 \n \nXe/Xem - 🟧 \n \nE/Em - 🧡")
        message.channel.send(myInfo)
    }
}

module.exports = Lgbtroles2Command;
