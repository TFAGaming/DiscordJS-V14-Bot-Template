const { Message } = require('discord.js');
const ExtendedClient = require('../../../class/ExtendedClient');

module.exports = {
    structure: {
        name: 'ping',
        description: 'Replies with Pong!',
        aliases: ['p']
    },
    /**
     * @param {ExtendedClient} client 
     * @param {Message} message 
     * @param {[String]} args 
     */
    run: async (client, message, args) => {

        await message.reply({
            content: 'Pong! ' +  client.ws.ping
        });

    }
};
