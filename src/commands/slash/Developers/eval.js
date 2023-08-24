const {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
  EmbedBuilder,
} = require("discord.js");
const ExtendedClient = require("../../../class/ExtendedClient");
const config = require("../../../config");
const GuildSchema = require("../../../schemas/GuildSchema");

module.exports = {
  structure: new SlashCommandBuilder()
    .setName("eval")
    .setDescription("Execute some codes.")
    .addStringOption((option) =>
      option
        .setName("code")
        .setDescription("The code to be executed.")
        .setRequired(true)
    ),
  /**
   * @param {ExtendedClient} client
   * @param {ChatInputCommandInteraction} interaction
   * @param {[]} args
   */
  options: {
    developers: true,
  },
  run: async (client, interaction, args) => {
    await interaction.deferReply();
    const toCode = interaction.options.getString("code");

    const executedEvalValue = eval(toCode);

    const embed = new EmbedBuilder()
      .setTitle("Code executed")
      .setDescription(`The return output was:\n${executedEvalValue}`);

    await interaction.reply({ embeds: [embed] });
  },
};
