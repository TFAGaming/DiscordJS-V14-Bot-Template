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
    run: async (client, interaction) => {
        const componentPermission = async (component) => {
            if (component.options?.public === false && interaction.user.id !== interaction.message.interaction.user.id) {
                await interaction.reply({
                    content:
                        config.messageSettings.notHasPermissionComponent !== undefined &&
                        config.messageSettings.notHasPermissionComponent !== null &&
                        config.messageSettings.notHasPermissionComponent !== ""
                            ? config.messageSettings.notHasPermissionComponent
                            : "You do not have permission to use this component",
                    ephemeral: true
                });
                return false;
            }
            return true;
        };

        if (interaction.isButton()) {
            const component = client.collection.components.buttons.get(interaction.customId);

            if (!component) return;
            
            if (!(await componentPermission(component))) return;

            try {
                component.run(client, interaction);
            } catch (error) {
                log(error, 'error');
            }

            return;
        }

        if (interaction.isAnySelectMenu()) {
            const component = client.collection.components.selects.get(interaction.customId);

            if (!component) return;

            if (!(await componentPermission(component))) return;

            try {
                component.run(client, interaction);
            } catch (error) {
                log(error, 'error');
            }

            return;
        }

        if (interaction.isModalSubmit()) {
            const component = client.collection.components.modals.get(interaction.customId);

            if (!component) return;

            try {
                component.run(client, interaction);
            } catch (error) {
                log(error, 'error');
            };

            return;
        };

        if (interaction.isAutocomplete()) {
            const component = client.collection.components.autocomplete.get(interaction.commandName);

            if (!component) return;

            try {
                component.run(client, interaction);
            } catch (error) {
                log(error, 'error');
            }

            return;
        }
    }
};
