const { AutocompleteInteraction } = require('discord.js');
const ExtendedClient = require('../../class/ExtendedClient');

module.exports = {
    commandName: 'autocomplete',
    options: {
        public: true
    },
    /**
     * 
     * @param {ExtendedClient} client 
     * @param {AutocompleteInteraction} interaction 
     */
    run: async (client, interaction) => {
            const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape', 'Honeydew'];
            
            const currentInput = interaction.options.getFocused();
            const filteredFruits = fruits.filter(fruit => fruit.toLowerCase().startsWith(currentInput.toLowerCase()));

            await interaction.respond(filteredFruits.map(fruit => ({ name: fruit, value: fruit })));
        }
    };
