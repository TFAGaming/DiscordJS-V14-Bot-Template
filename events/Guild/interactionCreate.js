const { EmbedBuilder, PermissionsBitField, InteractionType } = require("discord.js");
const client = require("../../index");
const config = require("../../config/config.json");
const { QuickDB } = require("quick.db");
const db = new QuickDB();

module.exports = {
  name: "interactionCreate"
};

client.on('interactionCreate', async interaction => {
  const command = client.slashcmds.get(interaction.commandName);

  if (!command) return;

  if (interaction.type === InteractionType.ApplicationCommand) {
    try {
      await command.run(client, interaction, config, db);
    } catch (error) {
      console.log(error);
    }
  } else {
    interaction.reply({ content: "An Error has occured.", ephemeral: true }).catch(() => { });
  }
});
