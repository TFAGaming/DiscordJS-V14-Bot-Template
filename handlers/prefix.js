const fs = require("fs");
const colors = require("colors");

module.exports = (client) => {
  console.log("0------------------| Prefix Handler:".blue);
  
  fs.readdirSync('./commands/').forEach(dir => {
		const commands = fs.readdirSync(`./commands/${dir}`).filter(file => file.endsWith('.js'));
		for (let file of commands) {
      
			let pull = require(`../commands/${dir}/${file}`);
			if (pull.name) {
				client.commands.set(pull.name, pull);
				console.log(`[HANDLER - PREFIX] Loaded a file: ${pull.name} (#${client.commands.size})`.brightGreen)
			} else {
				console.log(`[HANDLER - PREFIX] Couldn't load the file ${file}, missing module name value.`.red)
				continue;
			}
      
		}
	});
}