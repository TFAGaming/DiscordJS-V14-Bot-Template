const DiscordBot = require('../client/DiscordBot');

class ApplicationCommand {
    data;

    /**
     *
     * @param {{command: import("discord.js").APIApplicationCommand, options?: Partial<{ cooldown: number, botOwner: boolean, guildOwner: boolean, botDevelopers: boolean }>, run: import("discord.js").Awaitable<(client: DiscordBot, interaction: import('discord.js').Interaction) => void> }} structure 
     */
    constructor(structure) {
        this.data = {
            __type__: 1, // This used for the handler
            ...structure
        }
    }

    toJSON = () => {
        return { ...this.data }
    }
}

module.exports = ApplicationCommand;
