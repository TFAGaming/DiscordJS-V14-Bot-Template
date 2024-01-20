const { SlashCommandBuilder } = require('discord.js');
const ExtendedClient = require('../../../class/ExtendedClient');

module.exports = {
    structure: new SlashCommandBuilder()
        .setName('autocomplete')
        .setDescription('An example of the autocomplete system')
        .addStringOption(option =>
            option.setName('fruit')
                .setDescription('Choose a fruit')
                .setAutocomplete(true)
                .setRequired(true)
            ),
    options: {
        public: true
    },
    /**
     * 
     * @param {ExtendedClient} client 
     * @param {import('discord.js').CommandInteraction} interaction 
     */
    run: async (client, interaction) => {

        const chosenFruit = interaction.options.getString('fruit');

        await interaction.reply({
            content: `You chose the fruit: **${chosenFruit}**`
        });

    }
};
