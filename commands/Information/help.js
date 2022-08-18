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

    let categories = [];

    fs.readdirSync("./commands/").forEach((cat) => {
      const commands = fs.readdirSync(`./commands/${cat}/`)
        .filter((file) => file.endsWith(".js"));

      const cmds = commands.map((cmd) => {
        let file = require(`../../commands/${cat}/${cmd}`);

        if (!file.config.name) return "ERROR";

        let command = file.config.name.replace(".js", "");

        return `\`${command}\``;
      });

      let data = new Object();
      data = {
        name: cat + " commands:",
        value: cmds.lenght === 0 ? "In progress..." : cmds.join(", ") + ".",
      };
      categories.push(data);
    });

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
            .addFields(categories)
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
