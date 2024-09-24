const { model, Schema } = require('mongoose')

const exampleSchema = new Schema({
    Item1: {
        type: String,
        required: true,
    },
    Item2: {
        type: String,
        default: 'Hello', 
    },
    Item3: {
        type: Number,
        default: 0,
    },
});

const Example = model('Example', exampleSchema)
module.exports = Example;
