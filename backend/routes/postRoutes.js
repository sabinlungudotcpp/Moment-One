const express = require('express');
const postController = require('../controllers/postController'); // Imports the post controller
const postRouter = express.Router(); // Creates the posts router

postRouter.route('/').get(postController.getAllPosts).post(postController.createNewPost).delete(postController.deleteAllPosts); // Post router handles a get request on the get all posts route, create a new post by sending a request to the server using a POST request
postRouter.route('/:id').get(postController.getPostByID).patch(postController.editPost).delete(postController.deletePostByID);
postRouter.route('/:userId').post(postController.createNewPost); //:userId is the _id of the user creating the post
//I'm planning to use JWT for the sessions and transfering user info insted of putting it in the url
//but I've done it this way for now just to test how the models reference each other and how the references are saved.

module.exports = postRouter; // Exports the post routes to be used