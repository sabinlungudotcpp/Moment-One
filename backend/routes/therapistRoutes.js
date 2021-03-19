const therapistRouter = require('express').Router(); //Creating therapist router
const therapistController = require('../controllers/therapistController');
const accountController = require('../controllers/accountController');
const authController = require('../controllers/authController');

//Therapist routes
therapistRouter.route('/').get(therapistController.getAllTherapists);
therapistRouter.route('/:id').get(accountController.getAccountById).delete(accountController.deleteAccountById).patch(accountController.editAccount);
therapistRouter.route('/register').post(authController.registerTherapist);

module.exports = therapistRouter; //Exporting the thertapist router