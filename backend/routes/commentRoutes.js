const express = require('express');
const commentController = require('../controllers/commentsController');
const commentsRouter = express.Router();

commentsRouter.route('/').get(commentController.getAllComments).post(commentController.createComment).delete(commentController.deleteAllComments);
commentsRouter.route('/:id').get(commentController.getCommentByID).patch(commentController.editComment).delete(commentController.deleteCommentByID);
commentsRouter.route('/:postId/:userId').post(commentController.createComment);
//I'm planning to use JWT for the sessions and transfering user info insted of putting it in the url
//but I've done it this way for now just to test how the models reference each other and how the references are saved.

module.exports = commentsRouter;