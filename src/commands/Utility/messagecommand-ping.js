const { Message } = require("discord.js");
const DiscordBot = require("../../client/DiscordBot");
const MessageCommand = require("../../structure/MessageCommand");

module.exports = new MessageCommand({
    command: {
        name: 'ping',
        description: 'Replies with Pong!',
        aliases: ['p'],
        permissions: ['SendMessages']
    },
    options: {
        cooldown: 5000
    },
    /**
     * 
     * @param {DiscordBot} client 
     * @param {Message} message 
     * @param {string[]} args
     */
    run: async (client, message, args) => {
        await message.reply({
            content: '**Pong!** ' + client.ws.ping + 'ms'
        });
    }
}).toJSON();