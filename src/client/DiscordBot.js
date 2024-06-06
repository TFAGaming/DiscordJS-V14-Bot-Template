const { Client, Collection, Partials } = require("discord.js");
const CommandsHandler = require("./handler/CommandsHandler");
const { warn, error, info, success } = require("../utils/Console");
const config = require("../config");
const CommandsListener = require("./handler/CommandsListener");
const ComponentsHandler = require("./handler/ComponentsHandler");
const ComponentsListener = require("./handler/ComponentsListener");
const EventsHandler = require("./handler/EventsHandler");
const { QuickYAML } = require('quick-yaml.db');

class DiscordBot extends Client {
    collection = {
        application_commands: new Collection(),
        message_commands: new Collection(),
        message_commands_aliases: new Collection(),
        components: {
            buttons: new Collection(),
            selects: new Collection(),
            modals: new Collection(),
            autocomplete: new Collection()
        }
    }
    rest_application_commands_array = [];
    login_attempts = 0;
    login_timestamp = 0;

    commands_handler = new CommandsHandler(this);
    components_handler = new ComponentsHandler(this);
    events_handler = new EventsHandler(this);
    database = new QuickYAML(config.database.path);

    constructor() {
        super({
            intents: 3276799,
            partials: [
                Partials.Channel,
                Partials.GuildMember,
                Partials.Message,
                Partials.Reaction,
                Partials.User
            ],
            presence: {
                activities: [{
                    name: 'keep this empty',
                    type: 4,
                    state: 'DiscordJS-V14-Bot-Template v3'
                }]
            }
        });
        
        new CommandsListener(this);
        new ComponentsListener(this);
    }

    connect = async () => {
        warn(`Attempting to connect to the Discord bot... (${this.login_attempts + 1})`);

        this.login_timestamp = Date.now();

        await this.login(process.env.CLIENT_TOKEN)
            .then(async () => {
                this.commands_handler.load();
                this.components_handler.load();
                this.events_handler.load();

                try {
                    warn('Attempting to register application commands... (this might take a while!)');

                    await this.commands_handler.registerApplicationCommands(config.development);

                    success('Successfully registered application commands. For specific guild? ' + (config.development.enabled ? 'Yes' : 'No'));
                } catch (err) {
                    error('Unable to register application commands.');
                    error(err);
                }
            })
            .catch(async (err) => {
                error('Failed to connect to the Discord bot, retrying...');
                error(err);

                this.login_attempts++;

                this.connect();
            });
    }
}

module.exports = DiscordBot;