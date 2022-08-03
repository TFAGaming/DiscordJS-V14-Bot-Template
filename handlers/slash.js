const client = require("../index");
const config = require("../config/config.json");
const { PermissionsBitField, Routes, REST } = require('discord.js');
const fs = require("fs");
const colors = require("colors");

module.exports = (client) => {
  console.log("0------------------| Slash commands Handler:".blue);

  const cmds = [];

  fs.readdirSync('./slashCommands/').forEach(dir => {
    const commands = fs.readdirSync(`./slashCommands/${dir}`).filter(file => file.endsWith('.js'));
    for (let file of commands) {

      let pull = require(`../slashCommands/${dir}/${file}`);

      if (pull.name) {
        client.slashcmds.set(pull.name, pull);
        console.log(`[HANDLER - SLASH] Loaded a file: ${pull.name} (#${client.slashcmds.size})`.brightGreen);

        cmds.push({
          name: pull.name,
          description: pull.description,
          type: pull.type,
          options: pull.options ? pull.options : null,
          default_permission: pull.default_permission ? pull.default_permission : null,
          default_member_permissions: pull.default_member_permissions ? PermissionsBitField.resolve(pull.default_member_permissions).toString() : null
        });
        
      } else {
        console.log(`[HANDLER - SLASH] Couldn't load the file ${file}, missing module name value.`.red)
        continue;
      }

    }
  });

  if (!config.Client.ID) {
    console.log("[CRASH] You need to provide your bot ID in config.json!".red + "\n");
    return process.exit()
  };

  const rest = new REST({ version: '10' }).setToken(config.Client.TOKEN || process.env.TOKEN);

  (async () => {
    try {
      if (config.Handlers.GUILD_ID) {
        await rest.put(
          Routes.applicationGuildCommands(config.Client.ID, config.Handlers.GUILD_ID),
          { body: cmds }
        );

        const GUILD = await client.guilds.resolve(config.Handlers.GUILD_ID);
        
        console.log(`[HANDLER - SLASH | WARN] Slash commands has been registered successfully to the guild: ${GUILD || "ERR: GUILD_NOT_FOUND"}`.red + "\n");
      } else {
        await rest.put(
          Routes.applicationCommands(config.Client.ID),
          { body: cmds }
        );

        console.log(`[HANDLER - WARN] Slash commands has been registered successfully to all the guilds that the bot were invited.`.red + "\n");
      }
    } catch (err) {
      console.log(err);
    }
  })();
}
