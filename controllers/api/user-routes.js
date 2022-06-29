const router = require('express').Router();

// GET all users
router.get('/', (req, res) => {
    res.send('GET all users route');
    console.log('GET all users route');
});

// GET a single user

// POST a new user

// PUT to update a user by its _id

// DELETE to remove user by its _id

// BONUS: Remove a user's associated thoughts when deleted


// /api/users/:userId/friends/:friendId
    // POST to add a enw friend to user's friend list
    // DELETE to remove a friend from a user's friend list

module.exports = router;