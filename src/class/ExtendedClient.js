const { Client, Partials, Collection } = require("discord.js");
const config = require('../config');
const commands = require("../handlers/commands");
const events = require("../handlers/events");
const deploy = require("../handlers/deploy");
const mongoose = require("../handlers/mongoose");

module.exports = class extends Client {
    collection = {
        interactioncommands: new Collection(),
        prefixcommands: new Collection(),
        aliases: new Collection()
    };
    applicationcommandsArray = [];

    constructor() {
        super({
            intents: [
                'Guilds',
                'GuildMessages',
                'GuildMembers',
                'MessageContent'
            ],
            partials: [
                Partials.Channel,
                Partials.User,
                Partials.Message
            ]
        });
    };

    start = async () => {
        await this.login(process.env.CLIENT_TOKEN || config.client.token);

        commands(this);
        events(this);
        mongoose();

        if (config.handler.deploy) deploy(this, config);
    };
};