const { EmbedBuilder } = require('discord.js');
const ms = require('pretty-ms'); // npm i pretty-ms@6

module.exports = {
    name: "User Info",
    type: 2,
    run: async (client, interaction, config, db) => {

        const user = interaction.guild.members.cache.get(interaction.targetId);

        // Joined server [TIME] ago:
        const joinedDiscordTimestampInString = new Date().getTime() - user.user.createdTimestamp;
        const joinedDiscordTimestampInStringTime = ms(joinedDiscordTimestampInString, { verbose: true });

        // Joined Discord [TIME] ago:
        const joinedServerTimestampInString = new Date().getTime() - user.joinedTimestamp;
        const joinedServerTimestampInStringTime = ms(joinedServerTimestampInString, { verbose: true });

        // Bot type handler:
        const bot = {
            true: "Yes",
            false: "No"
        };

        // Finals:
        return interaction.reply(
            {
                embeds: [
                    new EmbedBuilder()
                        .setTitle(`${user.user.tag}'s information:`)
                        .setThumbnail(user.displayAvatarURL(
                            {
                                dynamic: true
                            }
                        ))
                        .addFields(
                            {
                                name: "Full name",
                                value: `${user.user.tag}`,
                                inline: true
                            },
                            {
                                name: "Identification",
                                value: `\`${user.id}\``,
                                inline: true
                            },
                            {
                                name: `Roles [${user.roles.cache.size - 1}]`, // Use "-1" because we removed the "@everyone" role 
                                value: `${user.roles.cache.map((ROLE) => ROLE).join(' ').replace('@everyone', '') || "[No Roles]"}`,
                                inline: true
                            },
                            {
                                name: "Joined server at",
                                value: `${new Date(user.joinedTimestamp).toLocaleString()}\n(*${joinedServerTimestampInStringTime} ago*)`,
                                inline: true
                            },
                            {
                                name: "Joined Discord at",
                                value: `${new Date(user.user.createdTimestamp).toLocaleString()}\n(*${joinedDiscordTimestampInStringTime} ago*)`,
                                inline: true
                            },
                            {
                                name: "A Bot?",
                                value: `${bot[user.user.bot]}`,
                                inline: true
                            }
                        )
                        .setColor('Blue')
                ],
                ephemeral: true
            }
        );

    },
};
