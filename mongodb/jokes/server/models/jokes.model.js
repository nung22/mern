const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String
    },
    punchline: {
        type: String
    },
    createdAt: {
        type: Date
    },
    updatedAt: {
        type: Date
    },
    __v: {
        type: Number
    }
});

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;