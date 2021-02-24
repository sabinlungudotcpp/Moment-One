const express = require('express');
const authenticate = require('../middlewares/authentication');
const authController = require('../controllers/authController');
const loginRouter = express.Router(); // The authentication router.

loginRouter.route('/').post(authenticate, authController.signIn);
    
module.exports = loginRouter;