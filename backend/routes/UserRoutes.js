const express = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const userRouter = express.Router();

userRouter.route('/register').post(authController.registerUser);
userRouter.route('/login').post(authController.login);

userRouter.route('/').get(userController.getAllUsers).delete(userController.deleteAllUsers);
userRouter.route('/:id').get(userController.getUserById).patch(userController.editUser).delete(userController.deleteUserById);

module.exports = userRouter; // Export the router