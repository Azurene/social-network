const { Schema, model, Types } = require('mongoose');

// reaction schema
const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String
            // required
            // 280 character minimum
        },
        username: {
            type: String
            // required
        },
        createdAt: {
            type: Date,
            default: Date.now
            // use a getter method to format the timestamp on query
        }
    }
);

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String
            // required
            // must be between 1 and 280 characters
        },

        createdAt: {
            type: Date,
            default: Date.now
            // use a getter method to format the timestamp on query
        },
        // username (the user that created this thought)

        username: {
            type: String
            // required
        },
        reactions: [ReactionSchema]
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

// schema settings
// create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query
ThoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
})

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;