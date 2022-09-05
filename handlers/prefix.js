const fs = require("fs");
const colors = require("colors");

module.exports = (client, config) => {
  console.log("0------------------| Prefix Handler:".blue);

  fs.readdirSync('./commands/prefix/').forEach(dir => {
    const commands = fs.readdirSync(`./commands/prefix/${dir}`).filter(file => file.endsWith('.js'));
    for (let file of commands) {

      let pull = require(`../commands/prefix/${dir}/${file}`);
      if (pull.config.name) {
        client.prefix_commands.set(pull.config.name, pull);
        console.log(`[HANDLER - PREFIX] Loaded a file: ${pull.config.name} (#${client.prefix_commands.size})`.brightGreen)
      } else {
        console.log(`[HANDLER - PREFIX] Couldn't load the file ${file}, missing module name value.`.red)
        continue;
      };

    };
  });
};
