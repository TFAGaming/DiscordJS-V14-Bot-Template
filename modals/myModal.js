const { EmbedBuilder } = require("discord.js");

module.exports = {
    id: "myModal",
    run: async (client, interaction, config, db) => {

        return interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setDescription('Modals are working! Here is what you have typed: ' + interaction.fields.getTextInputValue('something'))
            ],
            ephemeral: true
        });

    },
};
