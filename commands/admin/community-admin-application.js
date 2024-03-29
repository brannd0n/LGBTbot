const commando = require('discord.js-commando');
const discord = require('discord.js');

class CommunityAdminApplicationCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'community-admin-application',
            group: 'admin',
            memberName: 'community-admin-application',
            description: 'Community admin application'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.MessageEmbed()
        .setColor(0x991919)
        .addField("__**Community Admin**__",
        "1. What is your RSN?\n\n" +
        "2. What is your current rank in the clan?\n\n" +
        "3. What timezone are you in? \n\n" +
        "4. Do you play RS3 or OSRS?\n\n" +
        "5. How long have you been playing runescape for and what’s your proudest achievement in game?\n\n" +
        "6. What things do you enjoy doing in your day-to-day life? Any hobbies or interests?\n\n")
        .addField("\u200b",
        "7. What has made you want to apply for an admin position and what do you think you’d bring to enhance the team and community further?\n\n" +
        "8. As we are an LGBT+ community based clan, we often host events which are significant within the LGBT+ community, can you let us know which event is your favorite and why?\n\n" +
        "9. As part of this role you will need to be competent with the Google applications (Docs, Sheets & Forms), what experience do you have with these tools? Do you have expertise with any of these e.g. vlookups, conditional formatting, pivot tables?\n\n")
        .addField("\u200b",
        "10. You will need to be an ambassador for the clan and on-boarding new recruits to the clan, effectively the welcoming face of the clan. Is there any parts you’re not 100% on within the LGBT+ community and would like support from the admin team if you were successful? E.g. Pronouns, intersexuality etc.\n\n" +
        "11. With the community management team we have a large focus around elements of the clan chat, discord and the official forums. What ideas or suggestions would you like to bring in to make improvements from your perspective? \n\n" +
        "12. We have our friendly LGBoT+ in the discord which helps us with making posts in the discord, do you have any experience with coding? If not would you be willing to learn? \n\n")
        .addField("\u200b",
        "13. Social Media is one of our methods for interacting and attracting members into the clan, often using specially created imagery to be more effective. What expertise do you have with both/either social media / photo editing or graphic design? \n\n" +
        "14. Discord is a large part of our clan communication and planning, what experience do you have in managing a discord server? For example, managing and creating roles, rooms, locked rooms, … \n\n")

        .setFooter("Last updated")
        .setTimestamp();
        message.channel.send(myInfo)
    }
}

module.exports = CommunityAdminApplicationCommand;
