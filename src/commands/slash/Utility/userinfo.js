const { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const ExtendedClient = require('../../../class/ExtendedClient');
const { time } = require('../../../functions');

module.exports = {
    structure: new SlashCommandBuilder()
        .setName('userinfo')
        .setDescription('Get a user\'s information.')
        .addUserOption((opt) =>
            opt.setName('user')
                .setDescription('The user.')
                .setRequired(false)
        ),
    /**
     * @param {ExtendedClient} client 
     * @param {ChatInputCommandInteraction} interaction 
     */
    run: async (client, interaction) => {

        const user = interaction.options.getUser('user') || interaction.user;

        const member = interaction.guild.members.cache.get(user.id);

        if (!member) {
            await interaction.reply({
                content: 'That user is not on the guild.'
            });

            return;
        };

        const roles = [];
        
        if (member.roles) member.roles.cache.forEach((role) => {
            if (role.id !== interaction.guild.roles.everyone.id) roles.push(`${role.toString()}`);
        });

        const arr = [
            `**Username**: ${user.username}`,
            `**Display name**: ${member.nickname || user.displayName}`,
            `**ID**: ${user.id}`,
            `**Joined Discord**: ${time(user.createdTimestamp, 'd')} (${time(user.createdTimestamp, 'R')})`,
            `**Joined server**: ${time(member.joinedTimestamp, 'd')} (${time(member.joinedTimestamp, 'R')})`,
            `**Roles** [${member.roles?.cache?.size - 1}]: ${roles.join(', ')}`,
            `**In a voice channel?**: ${member.voice ? 'Yes' : 'No'}`,
            `**Guild owner?**: ${interaction.guild.ownerId === user.id ? 'Yes' : 'No'}`,
            `**Timed out?**: ${member.communicationDisabledUntilTimestamp ? 'Yes' : 'No'}`,
        ];

        await interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setTitle('User info - ' + user.username)
                    .setThumbnail(member.displayAvatarURL())
                    .setDescription(`${arr.join('\n')}`)
                    .setColor('Blurple')
            ]
        });

    }
};