const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
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
    .router('/:userId/friends/:friendId')
    .post()
    .delete();

// BONUS: Remove a user's associated thoughts when deleted

// router
//     .route('/:userId/friends/:friendId')
    // .post()
    // .delete();
// /api/users/:userId/friends/:friendId
    // POST to add a new friend to user's friend list
    // DELETE to remove a friend from a user's friend list

module.exports = router;