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
    let args = message.content.split(" ")
    if(args.length == 2){
        let id = args[1]
        channels.filter(c=>c.type=="text").forEach(async c=>{
  const messages = (await c.fetchMessages()).filter(message=>!message.member && message.author.id == id);
    if(messages.size > 0){
        await c.bulkDelete(messages.filter(message=>(Date.now()/(1000*60*60*24)) - (message.createdAt.getTime()/(1000*60*60*24)) < 14))
    }
    messages.filter(message=>(Date.now()/(1000*60*60*24)) - (message.createdAt.getTime()/(1000*60*60*24)) >= 14).forEach(message=>{
    if(!message.deleted){
      message.delete()
    }
    })
  console.log(messages.map(e=>e.author.id))
})
        return 0;
    }

channels.filter(c=>c.type=="text").forEach(async c=>{
  const messages = (await c.fetchMessages()).filter(message=>!message.member);
    if(messages.size > 0){
        await c.bulkDelete(messages.filter(message=>(Date.now()/(1000*60*60*24)) - (message.createdAt.getTime()/(1000*60*60*24)) < 14))
    }
    messages.filter(message=>(Date.now()/(1000*60*60*24)) - (message.createdAt.getTime()/(1000*60*60*24)) >= 14).forEach(message=>{
    if(!message.deleted){
      message.delete()
    }
    })
  console.log(messages.map(e=>e.author.id))
})
    }
}
module.exports = ClearMessagesCommand
