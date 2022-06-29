const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        username: {
            type: String
            // unique
            // required
            // trimmed
        },
        email: {
            type: String
            // required
            // unique
            // must match a valid email address (look into mongoose's matching validation)
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
)

UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
})

const User = model('User', UserSchema);

module.exports = User;
    // thoughts
        // array of _id values referencing the Thought model
    // friends
        // array of _id values referencing the User model (self-reference)