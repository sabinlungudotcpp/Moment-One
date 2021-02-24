const express = require('express');
const commentController = require('../controllers/commentsController');
const commentsRouter = express.Router();

commentsRouter.route('/').get(commentController.getAllComments).post(commentController.createComment).delete(commentController.deleteAllComments);
commentsRouter.route('/:id').get(commentController.getCommentByID).patch(commentController.editComment).delete(commentController.deleteCommentByID);

module.exports = commentsRouter;