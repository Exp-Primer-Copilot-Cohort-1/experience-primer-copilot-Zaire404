// Create web server

// Import express
const express = require('express');

// Import express router
const router = express.Router();

// Import controller
const commentsController = require('../controllers/commentsController');

// Import middleware
const auth = require('../middleware/auth');

// Import validator
const { check } = require('express-validator');

// Create comment
// api/comments
router.post(
    '/',
    auth,
    [
        check('title', 'Title is required').not().isEmpty(),
        check('content', 'Content is required').not().isEmpty(),
    ],
    commentsController.createComment
);

// Get all comments
// api/comments
router.get('/', auth, commentsController.getComments);

// Update comment
// api/comments/:id
router.put('/:id', auth, commentsController.updateComment);

// Delete comment
// api/comments/:id
router.delete('/:id', auth, commentsController.deleteComment);

module.exports = router;