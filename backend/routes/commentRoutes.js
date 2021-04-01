const express = require('express');
const commentController = require('../controllers/commentsController');
const authenticate = require('../middlewares/authentication');
const commentsRouter = express.Router();

commentsRouter.route('/').get(commentController.getAllComments).delete(commentController.deleteAllComments);
commentsRouter.route('/:id').get(commentController.getCommentByID).patch(commentController.editComment).delete(commentController.deleteCommentByID);
commentsRouter.route('/:postId').post(authenticate, commentController.createComment);

module.exports = commentsRouter;