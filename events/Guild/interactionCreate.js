const { EmbedBuilder } = require("discord.js");
const client = require("../../index");
const config = require("../../config/config.js");
const { QuickDB } = require("quick.db");
const db = new QuickDB();

module.exports = {
  name: "interactionCreate"
};

client.on('interactionCreate', async (interaction) => {
  if (interaction.isChatInputCommand()) {
    const command = client.slash_commands.get(interaction.commandName);

    if (!command) return;

    try {
      command.run(client, interaction, config, db);
    } catch (e) {
      console.error(e)
    };
  };

  if (interaction.isUserContextMenuCommand()) { // User:
    const command = client.user_commands.get(interaction.commandName);

    if (!command) return;

    try {
      command.run(client, interaction, config, db);
    } catch (e) {
      console.error(e)
    };
  };

  if (interaction.isMessageContextMenuCommand()) { // Message:
    const command = client.message_commands.get(interaction.commandName);

    if (!command) return;

    try {
      command.run(client, interaction, config, db);
    } catch (e) {
      console.error(e)
    };
  };

  if (interaction.isModalSubmit()) { // Modals:
    const modal = client.modals.get(interaction.customId);

    if (!modal) return interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setDescription('Something went wrong... Probably the Modal ID is not defined in the modals handler.')
          .setColor('Red')
      ],
      ephemeral: true
    });

    try {
      modal.run(client, interaction, config, db);
    } catch (e) {
      console.error(e)
    };
  }
});

