const commando = require('discord.js-commando');
const discord = require('discord.js');

class EventsAdminApplicationCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'events-admin-application',
            group: 'admin',
            memberName: 'events-admin-application',
            description: 'Events admin application'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.MessageEmbed()
        .setColor(0x991919)
        .addField("__**Events Admin Application**__",
                "1. What is your RSN?\n\n" +
                "2. What is your current rank in the clan?\n\n" +
                "3. What timezone are you in? \n\n" +
                "4. Do you play RS3 or OSRS?\n\n" +
                "5. How long have you been playing runescape for and what’s your proudest achievement in game?\n\n" +
                "6. What things do you enjoy doing in your day-to-day life? Any hobbies or interests?\n\n" +
                "7. What type of events would you primarily intend on hosting? (please give examples)\n\n" +
                "8. Not only are events popular in game but sometimes clan members enjoy other social events to help kill the time while skilling, things such as Uno, Skribblo or CAH, these are often hosted last minute, do you enjoy this type of event? What are your favourites and do you know of any not mentioned that you think might be popular?\n\n" +
                "9. We want you to help with the monthly skilling competitions, do you have any experience with the skill tracking on Runeclan and do you feel like you could confidently use it?\n\n")
                .addField("\u200b",
                "10. As we are an LGBT+ community based clan, we often host events which are significant within the LGBT+ community, can you let us know which event is your favorite and why? How would you celebrate this event in game as an Events Admin?\n\n" +
                "11. Do you have any previous experience hosting events in past clans? Please elaborate if the answer is yes. \n\n" +
                "12. All our admins are expected to deal with conflict resolution, please provide us with an example of what you would do in a situation where another clan member is making people uncomfortable. \n\n",true)

        .setFooter("Last updated")
        .setTimestamp();
        message.channel.send(myInfo)
    }
}

module.exports = EventsAdminApplicationCommand;
