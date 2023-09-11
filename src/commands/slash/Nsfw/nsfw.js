const {
    ChatInputCommandInteraction,
    SlashCommandBuilder,
} = require("discord.js");
const ExtendedClient = require("../../../class/ExtendedClient");

module.exports = {
    structure: new SlashCommandBuilder()
        .setName("nsfw")
        .setDescription("Nsfw command."),
    options: {
        nsfw: true,
    },
    /**
     * @param {ExtendedClient} client
     * @param {ChatInputCommandInteraction} interaction
     */
    run: async (client, interaction) => {

        await interaction.reply({ content: "NSFW Command!" });
        
    }
};
