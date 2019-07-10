const commando = require('discord.js-commando');

class DaddySharkCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'daddyshark',
            group: 'fun',
            memberName: 'daddyshark',
            description: 'do do do do'
        });
    }

    async run(message, args)
    {
        message.reply('do do do do do do do do');
    }
}

module.exports = DaddySharkCommand;
