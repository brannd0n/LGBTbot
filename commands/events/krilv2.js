const generic_event = require("GenericEvent.js");


class KrilV2 extends generic_event.GenericEvent {

    constructor(client) {
        super(client,
            {
                name: 'krilv2',
                group: 'events',
                memberName: 'kril',
                description: 'Normal Mode Kril event details'
            }, {
                title: "⚔️ __**K'ril MASS**__ ⚔️",
                thumbnail: "https://runescape.wiki/images/2/2f/K%27ril_Tsutsaroth.png"
            }
        );
    }

    run(message, args) {
        super.run(message, args);
    };
}
