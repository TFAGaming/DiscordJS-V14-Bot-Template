const AutocompleteComponent = require("../../structure/AutocompleteComponent");

module.exports = new AutocompleteComponent({
    commandName: 'autocomplete',
    run: async (client, interaction) => {
        const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape', 'Honeydew'];

        const currentInput = interaction.options.getFocused();
        const filteredFruits = fruits.filter(fruit => fruit.toLowerCase().startsWith(currentInput.toLowerCase()));

        await interaction.respond(filteredFruits.map(fruit => ({ name: fruit, value: fruit })));
    }
}).toJSON();