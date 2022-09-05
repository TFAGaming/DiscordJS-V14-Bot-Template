const { EmbedBuilder } = require("discord.js");
const fs = require('fs');

module.exports = {
  config: {
    name: "help",
    description: "Replies with help menu.",
  },
  permissions: ['SendMessages'],
  owner: false,
  run: async (client, message, args, prefix) => {
    const commands = client.prefix_commands.map(command => `${prefix}${command.config.name}`);

    return message.reply(
      {
        embeds: [
          new EmbedBuilder()
            .setAuthor(
              {
                name: client.user.tag,
                iconURL: client.user.displayAvatarURL(
                  {
                    dynamic: true
                  }
                )
              }
            )
            .setDescription(commands.join(', '))
            .setFooter(
              {
                text: `→ Use ${prefix}info for a command info.`
              }
            )
            .setColor('Blue')
        ]
      }
    );

  },
};
