const express = require('express');
const authController = require('../controllers/authController');
const authRouter = express.Router(); // The authentication router.

authRouter.route('/').post(authController.registerUser);
authRouter.route('/').post(authController.signIn);
    
module.exports = authRouter;