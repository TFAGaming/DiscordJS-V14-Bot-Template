const { readdirSync } = require('fs');
const { log } = require('../functions');
const ExtendedClient = require('../class/ExtendedClient');

/**
 * 
 * @param {ExtendedClient} client 
 */
module.exports = (client) => {
    for (const dir of readdirSync('./src/components/')) {
        for (const file of readdirSync('./src/components/' + dir).filter((f) => f.endsWith('.js'))) {
            const module = require('../components/' + dir + '/' + file);

            if (!module) continue;

            if (dir === 'buttons') {
                if (!module.customId || !module.run) {
                    log('Unable to load the component ' + file + ' due to missing \'structure#customId\' or/and \'run\' properties.', 'warn');

                    continue;
                };

                client.collection.components.buttons.set(module.customId, module);
            } else if (dir === 'selects') {
                if (!module.customId || !module.run) {
                    log('Unable to load the select menu ' + file + ' due to missing \'structure#customId\' or/and \'run\' properties.', 'warn');

                    continue;
                };

                client.collection.components.selects.set(module.customId, module);
            } else if (dir === 'modals') {
                if (!module.customId || !module.run) {
                    log('Unable to load the modal ' + file + ' due to missing \'structure#customId\' or/and \'run\' properties.', 'warn');

                    continue;
                };

                client.collection.components.modals.set(module.customId, module);
            } else if (dir === 'autocomplete') {
                if (!module.commandName || !module.run) {
                    log(`Unable to load the autocomplete component ${file} due to missing 'commandName' or 'run' properties.`, 'warn');
                    continue;
                }
                
                client.collection.components.autocomplete.set(module.commandName, module);
                
                log(`Loaded new autocomplete component: ${file}`, 'info');
            } else {
                log(`Invalid component type: ${file}`, 'warn');
            }
        }
    }
};
