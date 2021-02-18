const express = require('express');
const userController = require('../controllers/userController');
const userRouter = express.Router();

userRouter.route('/').get(userController.getAllUsers).post(userController.registerUser).delete(userController.deleteAllUsers);
userRouter.route('/:id').get(userController.getUserById).patch(userController.editUser).delete(userController.deleteUserById);

module.exports = userRouter;