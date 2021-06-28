const commando = require('discord.js-commando');
const discord = require('discord.js');

class PronounsCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'pronouns',
            group: 'welcome',
            memberName: 'pronouns',
            description: 'Discord roles.'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.MessageEmbed()
        .setColor(0x00FFFF)
        .setFooter("Last updated")
        .setTimestamp()
        .addField("**Pronouns:**", "He/Him/His - 🟡 \n \nShe/Her/Hers - 🟨 \n \nThey/Them/Their - 🟢 \n \nFae/Faer - 🟩 \n \nZe/Hir - ⚪ \n \nXey/Xem/Xyr - ⬜ \n \nIt/Its/Itself - 🟠 \n \nXe/Xem - 🟧 \n \nE/Em - 🧡")
        message.channel.send(myInfo)
    }
}

module.exports = PronounsCommand;
