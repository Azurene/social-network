const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('GET all thoughts');
    console.log('GET all thoughts');
})
// /api/thoughts
    // GET to get all thoughts
    // GET to get a single thought by its _id
    // POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
    // PUT to update a thought by its _id
    // DELETE to remove a thought by its _id

// /api/thoughts/:thoughtId/reactions

module.exports = router;