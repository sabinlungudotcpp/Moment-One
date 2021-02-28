const express = require('express');
const postController = require('../controllers/postController'); // Imports the post controller
const postRouter = express.Router(); // Creates the posts router

postRouter.route('/').get(postController.getAllPosts).post(postController.createNewPost).delete(postController.deleteAllPosts); // Post router handles a get request on the get all posts route, create a new post by sending a request to the server using a POST request
postRouter.route('/:id').get(postController.getPostByID).patch(postController.editPost).delete(postController.deletePostByID);

module.exports = postRouter; // Exports the post routes to be used