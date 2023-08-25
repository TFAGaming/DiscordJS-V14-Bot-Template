const config = require("../../config");
const { log } = require("../../functions");
const ExtendedClient = require("../../class/ExtendedClient");

const cooldown = new Map();

module.exports = {
  event: "interactionCreate",
  /**
   *
   * @param {ExtendedClient} client
   * @param {import('discord.js').Interaction} interaction
   * @returns
   */
  run: async (client, interaction) => {
    if (
      config.handler.commands.slash === false &&
      interaction.isChatInputCommand()
    )
      return;
    if (
      config.handler.commands.user === false &&
      interaction.isUserContextMenuCommand()
    )
      return;
    if (
      config.handler.commands.message === false &&
      interaction.isMessageContextMenuCommand()
    )
      return;

    const command = client.collection.interactioncommands.get(
      interaction.commandName
    );

    if (!command) return;

    try {
      if (command.options?.developers) {
        if (!config.users.developers.includes(interaction.user.id)) {
          return interaction.reply({
            content: `This is a developer only command.`,
            ephemeral: true,
          });
        }
      }

      if (command.options?.nsfw) {
        if (!interaction.channel.nsfw) {
          return interaction.reply({
            content: "NSFW Command. Execute this command on a NSFW Channel.",
            ephemeral: true,
          });
        }
      }

      if (command.options?.cooldown) {
        const cooldownFunction = () => {
          let data = cooldown.get(interaction.user.id);

          data.push(interaction.commandName);

          cooldown.set(interaction.user.id, data);

          setTimeout(() => {
            let data = cooldown.get(interaction.user.id);

            data = data.filter((v) => v !== interaction.commandName);

            if (data.length <= 0) {
              cooldown.delete(interaction.user.id);
            } else {
              cooldown.set(interaction.user.id, data);
            }
          }, command.options?.cooldown);
        };

        if (cooldown.has(interaction.user.id)) {
          let data = cooldown.get(interaction.user.id);

          if (data.some((v) => v === interaction.commandName)) {
            await interaction.reply({
              content: "Slow down buddy! You're too fast to use this command.",
            });

            return;
          } else {
            cooldownFunction();
          }
        } else {
          cooldown.set(interaction.user.id, [interaction.commandName]);

          cooldownFunction();
        }
      }

      command.run(client, interaction);
    } catch (error) {
      log(error, "err");
    }
  },
};
