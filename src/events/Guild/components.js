const config = require('../../config');
const { log } = require('../../functions');
const ExtendedClient = require('../../class/ExtendedClient');

module.exports = {
    event: 'interactionCreate',
    /**
     * 
     * @param {ExtendedClient} client 
     * @param {import('discord.js').Interaction} interaction 
     * @returns 
     */
    run: (client, interaction) => {
        if (interaction.isButton()) {
            const component = client.collection.components.buttons.get(interaction.customId);

            if (!component) return;

            try {
                component.run(client, interaction);
            } catch (error) {
                log(error, 'error');
            }

            return;
        };

        if (interaction.isAnySelectMenu()) {
            const component = client.collection.components.selects.get(interaction.customId);

            if (!component) return;

            try {
                component.run(client, interaction);
            } catch (error) {
                log(error, 'error');
            }

            return;
        };
    },
};
