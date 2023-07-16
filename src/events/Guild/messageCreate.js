const { ChannelType } = require('discord.js');
const config = require('../../config');
const { log } = require('../../functions');
const GuildSchema = require('../../schemas/GuildSchema');

module.exports = {
    event: 'messageCreate',
    run: async (client, message) => {
        if (message.author.bot || message.channel.type === ChannelType.DM) return;

        if (!config.handler.commands.prefix) return;

        const guildData = await GuildSchema.findOne({ guild: message.guildId });

        const prefix = guildData?.prefix || config.handler.prefix;

        if (!message.content.startsWith(prefix)) return;

        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const commandInput = args.shift().toLowerCase();

        if (!commandInput.length) return;

        let command = client.collection.prefixcommands.get(commandInput) || client.collection.prefixcommands.get(client.collection.aliases.get(commandInput));

        if (command) {
            try {
                command.run(client, message, args);
            } catch (error) {
                log(error, 'err');
            }
        }
    },
};
