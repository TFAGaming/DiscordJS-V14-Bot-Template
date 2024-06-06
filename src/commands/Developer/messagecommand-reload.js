const { AttachmentBuilder, Message } = require("discord.js");
const DiscordBot = require("../../client/DiscordBot");
const MessageCommand = require("../../structure/MessageCommand");
const config = require("../../config");

module.exports = new MessageCommand({
    command: {
        name: 'reload',
        description: 'Reload every command.',
        aliases: []
    },
    options: {
        botDevelopers: true
    },
    /**
     * 
     * @param {DiscordBot} client 
     * @param {Message} message 
     * @param {string[]} args
     */
    run: async (client, message, args) => {
        message = await message.reply({
            content: 'Please wait...'
        });

        try {
            client.commands_handler.reload();

            await client.commands_handler.registerApplicationCommands(config.development);

            await message.edit({
                content: 'Successfully reloaded application commands and message commands.'
            });
        } catch (err) {
            await message.edit({
                content: 'Something went wrong.',
                files: [
                    new AttachmentBuilder(Buffer.from(`${err}`, 'utf-8'), { name: 'output.ts' })
                ]
            });
        };
    }
}).toJSON();