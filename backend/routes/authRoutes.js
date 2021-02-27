const express = require('express');
const authenticate = require('../middlewares/authentication');
const authController = require('../controllers/authController');
const authRouter = express.Router(); // The authentication router.

authRouter.route('/').post(authController.registerUser, authenticate);
    
module.exports = authRouter;