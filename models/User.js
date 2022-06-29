const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        // insert code here
    }
)

const User = model('User', UserSchema);

module.exports = User;
// User model
    // username
        // string
        // unique
        // required
        // trimmed
    // email
        // string
        // required
        // unique
        // must match a valid email address (look into mongoose's matching validation)
    // thoughts
        // array of _id values referencing the Thought model
    // friends
        // array of _id values referencing the User model (self-reference)
// Schema settings
    // Create a virtual called friendCount that retrieves the length of the user's friends array field on query