const mongoose = require('mongoose');
const config = require("../config/config.js");
const colors = require("colors");

module.exports = (client) => {
	console.log("[DATABASE] Started connecting to MongoDB...".brightYellow);
	const mongo = process.env.MONGO || config.Handlers.MONGO;
	
	if (!mongo) {
		console.log("[WARN] A Mongo URI/URL isn't provided! (Not required)".red);
	} else {
		mongoose.connect(mongo, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}).catch((e) => console.log(e))

		mongoose.connection.once("open", () => {
			console.log("[DATABASE] Connected to MongoDB!".brightGreen);
		})
		return;
	}
}
