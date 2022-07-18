const fs = require("fs");
const colors = require("colors");

module.exports = (client) => {
  console.log("0------------------| Events Handler:".blue);
  
  fs.readdirSync('./events/').forEach(dir => {
		const commands = fs.readdirSync(`./events/${dir}`).filter(file => file.endsWith('.js'));
		for (let file of commands) {
      
			let pull = require(`../events/${dir}/${file}`);
			if (pull.name) {
				client.events.set(pull.name, pull);
				console.log(`[HANDLER - EVENTS] Loaded a file: ${pull.name}`.brightGreen)
			} else {
				console.log(`[HANDLER - EVENTS] Couldn't load the file ${file}. missing name or aliases.`.red)
				continue;
			}
      
		}
	});
}