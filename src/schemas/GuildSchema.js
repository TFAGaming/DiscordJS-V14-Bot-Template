const { model, Schema } = require('mongoose');

module.exports = model('GuildSchema',
    new Schema({
        guild: {
            type: String,
            required: true
        },
        prefix: {
            type: String
        }
    })
);