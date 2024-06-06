const DiscordBot = require("../../client/DiscordBot");
const Component = require("../../structure/Component");

module.exports = new Component({
    customId: 'example-menu-id',
    type: 'select',
    /**
     * 
     * @param {DiscordBot} client 
     * @param {import("discord.js").AnySelectMenuInteraction} interaction 
     */
    run: async (client, interaction) => {

        await interaction.reply({
            content: 'Replied from a Select Menu interaction! (You selected **' + interaction.values[0] + '**).',
            ephemeral: true
        });

    }
}).toJSON();