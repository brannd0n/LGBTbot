const commando = require('discord.js-commando');
const discord = require('discord.js');

class ClearMessagesCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'clear-messages',
            group: 'admin',
            memberName: 'clear-messages',
            description: 'Clear Messages'
        });
    }

    async run(message, args)
    {
    let guild = message.guild;
const channels = guild.channels;
channels.filter(c=>c.type=="text").forEach(async c=>{
  const messages = (await c.fetchMessages()).filter(message=>!guild.members.get(message.member.id));
    if(messages.size() > 0){
        c.bulkDelete(messages)
    }
  console.log(messages.map(e=>guild.members.get(e.member.id)))
})
    }
}
module.exports = ClearMessagesCommand
