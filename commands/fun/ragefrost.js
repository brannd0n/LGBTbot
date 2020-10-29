const commando = require('discord.js-commando');

class RagefrostCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'ragefrost',
            group: 'fun',
            memberName: 'ragefrost',
            description: 'Ragefrost'
        });
    }

    async run(message, args)
    {
        message.channel.send("<@369208329169272832> loves Graysan Chence.");
    }
}

module.exports = RagefrostCommand;
