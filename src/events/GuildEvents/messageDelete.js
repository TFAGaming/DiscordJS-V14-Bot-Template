const config = require('../../config');
const ExtendedClient = require('../../class/ExtendedClient');
const { EmbedBuilder } = require('discord.js');
const { time } = require('../../functions');

module.exports = {
    event: 'messageDelete',
    /**
     * 
     * @param {ExtendedClient} client 
     * @param {import('discord.js').Message} message 
     * @returns 
     */
    run: async (client, message) => {

        if (!(config.channels.modLogs.enabled && config.channels.modLogs.channel)) return;

        const modLogsChannel = client.channels.cache.get(config.channels.modLogs.channel);

        if (!modLogsChannel || modLogsChannel.guildId !== message.guild.id) return;

        if (message.author.bot) return;

        try {
            const data = [
                `**Content**: ${message.content}`,
                `**Author**: ${message.author.toString()}`,
                `**Date**: ${time(Date.now(), 'D')} (${time(Date.now(), 'R')})`,
            ];

            await modLogsChannel.send({
                embeds: [
                    new EmbedBuilder()
                        .setTitle('Message Delete')
                        .setThumbnail(message.author.displayAvatarURL())
                        .setDescription(data.join('\n'))
                        .setColor('Yellow')
                ]   
            });
        } catch (err) {
            console.error(err);
        };

    }
};