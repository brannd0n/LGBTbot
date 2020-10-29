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
        let msgArgs = message.content.split(" ")
    const channels = guild.channels;
    console.log(args)
    if(msgArgs.length == 2){
        let id = msgArgs[1]
        channels.filter(c=>c.type=="text").forEach(async c=>{
         console.log((await c.messages.fetch()).size)
  const messages = (await c.messages.fetch({limit:100})).filter(message=>{
//     console.log((Date.now()/(1000*60*60*24)) - (message.createdAt.getTime()/(1000*60*60*24)), !!message.member,message.author.id,id)
//     console.log(!!message.member)
//       console.log(!message.member,message.author.id,id== message.author.id)
    return message.author.id == id && !message.member
  });
    if(messages.size > 0){
    console.log(messages.size,"LARGESIZE")
    }
    console.log(messages.size,"SIZE")
//     if(messages.size > 0){
        console.log(c.name)
        await c.bulkDelete(messages.filter(message=>(Date.now()/(1000*60*60*24)) - (message.createdAt.getTime()/(1000*60*60*24)) < 14))
//     }
    messages.filter(message=>(Date.now()/(1000*60*60*24)) - (message.createdAt.getTime()/(1000*60*60*24)) >= 14).forEach(message=>{
    if(!message.deleted){
      message.delete()
    }
    })
  console.log(messages.map(e=>e.author.id))
})
       
    }else{

channels.filter(c=>c.type=="text").forEach(async c=>{
  const messages = (await c.messages.fetch()).filter(message=>!message.member);
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
}
module.exports = ClearMessagesCommand
