const commando = require('discord.js-commando');
const discord = require('discord.js');

class AdminInvitesCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'admin-invites',
            group: 'admin',
            memberName: 'admin-invites',
            description: 'Invite people to discord'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.MessageEmbed()
        .setColor(0x991919)
        .addField("📩 __**DISCORD INVITES**__ 📩", "You are able to invite both clan members and guests to our discord server. The easiest way to do this is to add them as a friend by obtaining their discord tag or supplying them with yours.\n\n" +
        "You can obain your discord tag by looking at the bottom left corner of your discord client next to your avatar. It will always end in 4 numers and will look something like this `Shana#4366`.\n**THESE ARE CASE SENSITIVE!**\n\n" +
        "Once you're both friends, you will be able to directly PM them an invite to our server. Simply right click on their username and click `Invite to server >` and choose `The LGBT+ Corner`.\n\n" +
        "Please be aware that all invitations expire. Setting up direct invite links is dangerous and encourages trolls/spam bots to join and cause trouble." +
        "If a member requests a role that is currently not available, please inform a leader and they will create and assign it whenever they are available to do so **WITHIN REASON**.")
        .setThumbnail("https://vignette.wikia.nocookie.net/theamazingworldofgumball/images/a/af/Discord_Logo.png/revision/latest")
        .setFooter("Last updated")
        .setTimestamp();
        message.channel.send(myInfo)
    }
}

module.exports = AdminInvitesCommand;
