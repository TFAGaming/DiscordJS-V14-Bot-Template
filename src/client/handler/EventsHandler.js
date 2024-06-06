const { info, error, success } = require('../../utils/Console');
const { readdirSync } = require('fs');
const DiscordBot = require('../DiscordBot');
const Component = require('../../structure/Component');
const AutocompleteComponent = require('../../structure/AutocompleteComponent');
const Event = require('../../structure/Event');

class EventsHandler {
    client;

    /**
     *
     * @param {DiscordBot} client 
     */
    constructor(client) {
        this.client = client;
    }

    load = () => {
        let total = 0;

        for (const directory of readdirSync('./src/events/')) {
            for (const file of readdirSync('./src/events/' + directory).filter((f) => f.endsWith('.js'))) {
                try {
                    /**
                     * @type {Event['data']}
                     */
                    const module = require('../../events/' + directory + '/' + file);

                    if (!module) continue;

                    if (module.__type__ === 5) {
                        if (!module.event || !module.run) {
                            error('Unable to load the event ' + file);
                            continue;
                        }

                        if (module.once) {
                            this.client.once(module.event, (...args) => module.run(this.client, ...args));
                        } else {
                            this.client.on(module.event, (...args) => module.run(this.client, ...args));
                        }

                        info(`Loaded new event: ` + file);

                        total++;
                    } else {
                        error('Invalid event type ' + module.__type__ + ' from event file ' + file);
                    }
                } catch (err) {
                    error('Unable to load a event from the path: ' + 'src/events/' + directory + '/' + file);
                }
            }
        }

        success(`Successfully loaded ${total} events.`);
    }
}

module.exports = EventsHandler;