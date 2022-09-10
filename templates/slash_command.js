const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "", // Name of command
    description: "", // Command description
    type: 1, // Command type
    options: [], // Command options
    permissions: {
        DEFAULT_PERMISSIONS: "", // Client permissions needed
        DEFAULT_MEMBER_PERMISSIONS: "" // User permissions needed
    },
    run: async (client, interaction, config, db) => {
        // execute
    },
};