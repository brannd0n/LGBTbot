const commando = require('discord.js-commando');

class ZipCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'zip',
            group: 'fun',
            memberName: 'zip',
            description: 'zipfel'
        });
    }

    async run(message, args)
    {
        message.reply('Zipfel the PVM master.');
    }
}

module.exports = ZipCommand;
