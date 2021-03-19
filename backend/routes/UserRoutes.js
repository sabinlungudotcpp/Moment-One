const userRouter = require('express').Router(); //Creating user router
const userController = require('../controllers/userController');
const accountController = require('../controllers/accountController');
const authController = require('../controllers/authController');

//user routes
userRouter.route('/').get(userController.getAllUsers);
userRouter.route('/:id').get(accountController.getAccountById).delete(accountController.deleteAccountById).patch(accountController.editAccount);
userRouter.route('/register').post(authController.registerUser);

module.exports = userRouter; // Export the router