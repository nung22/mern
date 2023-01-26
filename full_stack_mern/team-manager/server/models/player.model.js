const mongoose = require('mongoose');

/* 
{PATH} will be replaced with the field name, such as "stringField".
*/
const PlayerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Player {PATH} is required'],
            minlength: [2, 'Player {PATH} must be at least {MINLENGTH} characters in length.']
        },
        position: {
            type: String,
        }
    },
    { timestamps: true }
)

/* 
Register schema with mongoose and provide a string to name the collection. This
also returns a reference to our model that we can use for DB operations.
*/
const Player = mongoose.model('Player', PlayerSchema);

// Always exporting an object even when we only have one thing to export
// makes it easy to add more exports later if ever needed without breaking
// any code that imports from this file.
module.exports = { Player };