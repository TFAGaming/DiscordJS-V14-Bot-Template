const { Message } = require("discord.js");
const ExtendedClient = require("../../../class/ExtendedClient");

module.exports = {
  structure: {
    name: "eval",
    description: "Execute some codes!",
    aliases: ["e"],
    cooldown: 0,
  },
  /**
   * @param {ExtendedClient} client
   * @param {Message} message
   * @param {[String]} args
   */
  run: async (client, message, args) => {
    const evaled = eval(args.join(" "));

    await message.reply({
      content: String(evaled),
    });
  },
};
