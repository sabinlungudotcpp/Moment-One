const express = require('express');
const authController = require('../controllers/authController');
const authenticate = require('..//middlewares/authentication');
const authRouter = express.Router(); // The authentication router.

authRouter.route('/').post(authController.registerUser);
authRouter.route('/').post(authenticate, authController.signIn);

module.exports = authRouter;