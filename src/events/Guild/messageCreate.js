const { ChannelType, Message } = require('discord.js');
const config = require('../../config');
const { log } = require('../../functions');
const GuildSchema = require('../../schemas/GuildSchema');
const ExtendedClient = require('../../class/ExtendedClient');

module.exports = {
    event: 'messageCreate',
    /**
     * 
     * @param {ExtendedClient} client 
     * @param {Message} message 
     * @returns 
     */
    run: async (client, message) => {
        if (message.author.bot || message.channel.type === ChannelType.DM) return;

        if (!config.handler.commands.prefix) return;

        let prefix = config.handler.prefix;

        if (config.handler?.mongodb?.toggle) {
            try {
                const guildData = await GuildSchema.findOne({ guild: message.guildId });

                if (guildData && guildData?.prefix) prefix = guildData.prefix;
            } catch {
                prefix = config.handler.prefix;
            };
        };

        if (!message.content.startsWith(prefix)) return;

        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const commandInput = args.shift().toLowerCase();

        if (!commandInput.length) return;

        let command = client.collection.prefixcommands.get(commandInput) || client.collection.prefixcommands.get(client.collection.aliases.get(commandInput));

        if (command) {
            try {
                if (command.structure?.permissions && !message.member.permissions.has(command.structure?.permissions)) {
                    await message.reply({
                        content: 'You do not have the permission to use this command.'
                    });

                    return;
                };

                command.run(client, message, args);
            } catch (error) {
                log(error, 'err');
            }
        }
    },
};
