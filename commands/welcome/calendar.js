const commando = require('discord.js-commando');
const discord = require('discord.js');

class CalendarCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'calendar',
            group: 'welcome',
            memberName: 'calendar',
            description: 'Events calendar.'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
        .setColor(0xFD00FF)
        .setFooter("(remember to check back frequently for upcoming events and updates)")
        .addField("🏅 __**EVENTS CALENDAR**__ 🏅", "Being a community clan, we try to plan and host frequent events for clannies to participate in and socialise. Please find our current & most up-to-date events calendar below.\n \nIf you wish to host an event yourself please let a member of the Admin or Leadership team know and we will add it to the calendar and create a broadcast message.\n \n[Click here to view our calendar](https://docs.google.com/spreadsheets/d/1voAMbOib3-6r0wB_e7eVTS2mWM-lFXSTujLaKdhh8o4/edit?usp=sharing)")
        .setImage("https://i.imgur.com/wkZfMgd.png");
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = CalendarCommand;
