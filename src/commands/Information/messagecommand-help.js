const { Message } = require("discord.js");
const DiscordBot = require("../../client/DiscordBot");
const MessageCommand = require("../../structure/MessageCommand");
const config = require("../../config");

module.exports = new MessageCommand({
    command: {
        name: 'help',
        description: 'Replies with a list of available message commands.',
        aliases: ['h']
    },
    options: {
        cooldown: 10000
    },
    /**
     * 
     * @param {DiscordBot} client 
     * @param {Message} message 
     * @param {string[]} args
     */
    run: async (client, message, args) => {
        await message.reply({
            content: `${client.collection.message_commands.map((cmd) => '\`' + client.database.ensure('prefix-' + message.guild.id, config.commands.prefix) + cmd.command.name + '\`').join(', ')}`
        });
    }
}).toJSON();