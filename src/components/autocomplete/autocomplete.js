const { } = require('discord.js');
const ExtendedClient = require('../../class/ExtendedClient');

module.exports = {
    commandName: '', // The name of the command that has the autocomplete action
    options: {
        public: true // Whether this autocomplete is public or restricted
    },
    /**
     * 
     * @param {ExtendedClient} client 
     * @param {import('discord.js').AutocompleteInteraction} interaction 
     */
    run: async (client, interaction) => {
        // Autocomplete interaction logic
    }
};
