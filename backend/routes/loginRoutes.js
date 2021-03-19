const loginRouter = require('express').Router(); //Creating the login router
const authController = require('../controllers/authController');

loginRouter.route('/').post(authController.login); //Directing request to the login function
    
module.exports = loginRouter; //exporting the router