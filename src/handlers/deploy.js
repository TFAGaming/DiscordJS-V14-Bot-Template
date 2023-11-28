const { REST, Routes } = require("discord.js");
const { log } = require("../functions");
const config = require("../config");
const ExtendedClient = require("../class/ExtendedClient");

/**
 *
 * @param {ExtendedClient} client
 */
module.exports = async (client) => {
  const rest = new REST({ version: "10" }).setToken(
    process.env.CLIENT_TOKEN || config.client.token
  );

  try {
    log(
      "Started loading application commands... (this might take minutes!)",
      "info"
    );

    function isSnowflake(id) {
      return /^\d+$/.test(id);
  }
  
  const guildId = process.env.GUILD_ID || config.development.guild;
  
  if (!isSnowflake(guildId)) {
      log("Guild ID is missing. Please set it in .env or config file or disable development in the config", "err");
      return; 
  }
    
    if (config.development && config.development.enabled) {
      await rest.put(
          Routes.applicationGuildCommands(process.env.CLIENT_ID || config.client.id, guildId),
          {
              body: client.applicationcommandsArray,
          }
      );
      log(`Successfully loaded application commands to guild ${guildId}.`, "done");
    } else { 
      await rest.put(
        Routes.applicationCommands(process.env.CLIENT_ID || config.client.id),
        {
          body: client.applicationcommandsArray,
        }
      );
      log("Successfully loaded application commands globally to Discord API.", "done");
    }
  } catch (e) {
    log(`Unable to load application commands to Discord API: ${e.message}`, "err");
  }
};
