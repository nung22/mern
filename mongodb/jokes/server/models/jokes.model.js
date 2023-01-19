const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Setup is required"],
        minlength: [10, " must be at least 10 characters long"]
    },
    punchline: {
        type: String,
        required: [true, "Punchline is required"],
        minlength: [3, "Punchline must be at least 3 characters long"]
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