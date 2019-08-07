const commando = require("discord.js-commando");

/**
 * A `GenericEvent`, the base class for all events used in TheLGBoT+ discord bot.
 */
class GenericEvent extends commando.Command {

	/**
	 * 
	 * @param {any} client
	 * @param {Object} cmd_info
	 */
    constructor(client, cmd_info, embed_info) {
        super(client, {
            name: cmd_info.name,
            group: cmd_info.group,
            memberName: cmd_info.memberName,
            description: cmd_info.description,
            examples: cmd_info.examples,
            args: [
                {
                    key: "date",
                    prompt: "What date is the event?",
                    type: "string"
                },
                {
                    key: "time",
                    prompt: "What time is the event (game time)?",
                    type: "string"
                },
                {
                    key: "world",
                    prompt: "What world is the event going to take place on? (default w23)",
                    type: "string",
                    default: "23"
                }
            ]
        });

        this.embed_info = embed_info;
    }

    async run(message, args) {
        message.delete();

        const mainEmbed = {
            color: 0x00AE86,
            title: this.embed_info.title,
            author: {
                name: message.author,
                icon_url: message.author.displayAvatarURL
            },
            thumbnail: this.embed_info.thumbnail,
            fields: [
                {
                    name: "📅 Date:",
                    value: args.date,
                    inline: true
                },
                {
                    name: "🕘 Time",
                    value: args.time + "game time",
                    inline: true
                },
                {
                    name: "🌍 World",
                    value: args.world,
                    inline: true
                },
                {
                    name: "Host",
                    value: message.author,
                    inline: true
                }
            ]
        };

        Object.assign(mainEmbed, this.embed_info);

        message.channel.sendEmbed({ embed: mainEmbed });
    }
}