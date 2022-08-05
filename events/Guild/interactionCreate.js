const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const client = require("../../index");
const config = require("../../config/config.json");
const { QuickDB } = require("quick.db");
const db = new QuickDB();

module.exports = {
  name: "interactionCreate"
};

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;
  if (!interaction.type == 2) return;

  const command = client.slashcmds.get(interaction.commandName);

  if (!command) return;

  try {
    if (command.guild_member_permissions) {
      if (!interaction.memberPermissions.has(PermissionsBitField.resolve(command.guild_member_permissions || []))) return interaction.reply({
        embeds: [
          new EmbedBuilder()
            .setDescription(`🚫 Unfortunately, you are not authorized to use this command.`)
            .setColor("Red")
        ],
        ephemeral: true
      });
    } else if (command.guild_client_permissions) {
      if (!interaction.guild.members.cache.get(client.user.id).permissions.has(PermissionsBitField.resolve(command.guild_client_permissions || []))) return interaction.reply({
        embeds: [
          new EmbedBuilder()
            .setDescription(`🚫 Unfortunately, I can't execute this command.`)
            .setFooter({ text: `Required permissions: ${command.guild_client_permissions.join(", ")}` })
            .setColor("Red")
        ],
        ephemeral: true
      });
    };

    await command.run(client, interaction, config, db);

  } catch (error) {
    console.log(error);
  }
});
