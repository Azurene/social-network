const { Thought, User } = require('../models');

const thoughtController = {
    // get all thoughts
    getAllThoughts(req, res) {
        Thought.find({})
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
    },

    // get thought by id
    getThoughtById({ params }, res) {
        Thought.findOne({ _id: params.id })
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: 'No thought with this id!' });
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
    },

    // create thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
    createThought({ body }, res) {
        Thought.create(body)
            .then(({ _id }) => 
                User.findOneAndUpdate(
                    {},
                    { $push: { thoughts: _id } }, 
                    { new: true })
            )
            .then(dbUserData => {
                console.log(dbUserData);
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.json(err));
    },

    // PUT to update a thought by its _id
    updateThought({ params, body }, res) {
        Thought.findOneAndUpdate({ _id: params.id }, body, { new: true })
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: 'No thought found with this id!' });
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch(err => res.json(err));
    },

    // DELETE to remove a thought by its _id
    deleteThought({ params }, res) {
        Thought.findOneAndDelete({ _id: params.id })
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: 'No thought with this id!'});
                    return;
                }
                res.json(dbThoughtData);
                return User.findOneAndUpdate(
                    { _id: params.thoughtId },
                    { $pull: { thoughts: params.thoughtId } },
                    { new: true }
                );
            })
            .catch(err => res.json(err));
    }

}
// /api/thoughts/:thoughtId/reactions
    // POST to create a reaction stored in a single thought's reactions array field
    // DELETE to pull and remove a reaction by the reaction's reactionId value

module.exports = thoughtController;