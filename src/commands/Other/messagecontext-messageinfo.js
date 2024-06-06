const { MessageContextMenuCommandInteraction } = require("discord.js");
const DiscordBot = require("../../client/DiscordBot");
const ApplicationCommand = require("../../structure/ApplicationCommand");

module.exports = new ApplicationCommand({
    command: {
        name: 'Message Information',
        type: 3,
    },
    options: {
        cooldown: 5000
    },
    /**
     * 
     * @param {DiscordBot} client 
     * @param {MessageContextMenuCommandInteraction} interaction 
     */
    run: async (client, interaction) => {
        const target = interaction.targetMessage;

        if (!target) {
            await interaction.reply({
                content: `Invalid target!`
            });

            return;
        }

        const array = [
            `**Author:** ${target.author.toString()}`,
            `**Content:** ${target.content}`,
            `**Has attachments?** ${target.attachments.size > 0 ? 'Yes' : 'No'}`,
        ];

        await interaction.reply({
            content: array.join('\n'),
            ephemeral: true
        });
    }
}).toJSON();