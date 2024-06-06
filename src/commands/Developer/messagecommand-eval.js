const { AttachmentBuilder, Message } = require("discord.js");
const DiscordBot = require("../../client/DiscordBot");
const MessageCommand = require("../../structure/MessageCommand");

module.exports = new MessageCommand({
    command: {
        name: 'eval',
        description: 'Execute a JavaScript code.',
        aliases: ['ev']
    },
    options: {
        botOwner: true
    },
    /**
     * 
     * @param {DiscordBot} client 
     * @param {Message} message 
     * @param {string[]} args
     */
    run: async (client, message, args) => {
        if (!args[0]) {
            await message.reply({
                content: 'You must provide the code in order to execute it!'
            });

            return;
        }

        message = await message.reply({
            content: 'Please wait...'
        });

        const code = args.slice(0).join(' ');

        try {
            let result = eval(code);

            if (typeof result !== 'string') result = require('util').inspect(result);

            result = `${result}`.replace(new RegExp(client.token, 'gi'), 'CLIENT_TOKEN'); // To avoid showing the client token to the public

            await message.edit({
                content: 'OK, no errors.',
                files: [
                    new AttachmentBuilder(Buffer.from(`${result}`, 'utf-8'), { name: 'output.ts' })
                ]
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