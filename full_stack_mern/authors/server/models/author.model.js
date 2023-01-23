const mongoose = require('mongoose');

/* 
{PATH} will be replaced with the field name, such as "stringField".
*/
const AuthorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Author {PATH} is required'],
            minlength: [3, 'Author {PATH} must be at least {MINLENGTH} characters.']
        }
    },
    { timestamps: true }
)

/* 
Register schema with mongoose and provide a string to name the collection. This
also returns a reference to our model that we can use for DB operations.
*/
const Author = mongoose.model('Author', AuthorSchema);

// Always exporting an object even when we only have one thing to export
// makes it easy to add more exports later if ever needed without breaking
// any code that imports from this file.
module.exports = { Author };