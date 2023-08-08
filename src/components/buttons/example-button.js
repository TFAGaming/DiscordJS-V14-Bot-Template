const { ButtonInteraction } = require('discord.js');
const ExtendedClient = require('../../class/ExtendedClient');

module.exports = {
    customId: 'example-button',
    /**
     * 
     * @param {ExtendedClient} client 
     * @param {ButtonInteraction} interaction 
     */
    run: async (client, interaction) => {

        await interaction.reply({
            content: 'The button has been successfully responded!',
            ephemeral: true
        });

    }
};