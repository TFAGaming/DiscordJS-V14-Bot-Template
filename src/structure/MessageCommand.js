const DiscordBot = require('../client/DiscordBot');

class MessageCommand {
    data;

    /**
     *
     * @param {{command: { name: string, description?: string, aliases?: string[], permissions?: import('discord.js').PermissionResolvable[] }, options?: Partial<{ cooldown: number, botOwner: boolean, guildOwner: boolean, botDevelopers: boolean, nsfw: boolean }>, run: import("discord.js").Awaitable<(client: DiscordBot, message: import('discord.js').Message, args: string[]) => void> }} structure 
     */
    constructor(structure) {
        this.data = {
            __type__: 2, // This used for the handler
            ...structure
        }
    }

    toJSON = () => {
        return { ...this.data }
    }
}

module.exports = MessageCommand;
