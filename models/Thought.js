const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema(
    {
        // insert code here
    }
)

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;
// Thought
    // thoughtText
        // string
        // required
        // must be between 1 and 280 characters
    // createdAt
        // Date
        // set default value to be the current timestamp
        // use a getter method to format the timestamp on query
    // username (the user that created this thought)
        // string
        // required
    // reactions (these are like replies)
        // array of nested documents created with the reactionSchema
// schema settings
    // create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query

// reaction schema
    // reactionId
        // use mongoose's objectid data type
        // default value is set to a new objectid
    // reactionBody
        // string
        // required
        // 280 character minimum
    // username
        // string
        // required
    // createdAt
        // date
        // set default value to the current timestamp
        // use a getter method to format the timestamp on query
// schema settings
    // used as the reaction field's subdocument schema in the Thought model