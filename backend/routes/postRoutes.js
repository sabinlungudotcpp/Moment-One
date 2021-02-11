const express = require('express');
const postController = require('../controllers/postController');
const postRouter = express.Router();

postRouter.route('/').get(postController.getAllPosts).post(postController.createNewPost).delete(postController.deleteAllPosts);
postRouter.route('/:id').get(postController.getPostByID).patch(postController.editPost).delete(postController.deletePostByID);

module.exports = postRouter;