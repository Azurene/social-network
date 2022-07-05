const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/user-controller');

router
    .route('/')
    .get(getAllUsers)
    .post(createUser);


router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend);

// BONUS: Remove a user's associated thoughts when deleted
// /api/users/:userId/friends/:friendId
    // POST to add a new friend to user's friend list
    // DELETE to remove a friend from a user's friend list

module.exports = router;