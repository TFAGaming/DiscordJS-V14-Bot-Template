const { success } = require("../../utils/Console");
const Event = require("../../structure/Event");

module.exports = new Event({
    event: 'ready',
    once: true,
    run: (__client__, client) => {
        success('Logged in as ' + client.user.displayName + ', took ' + ((Date.now() - __client__.login_timestamp) / 1000) + "s.")
    }
}).toJSON();