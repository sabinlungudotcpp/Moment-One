const express = require('express');
const therapistAuthController = require('../controllers/therapistAuthController');
const therapistController = require('../controllers/therapistController');
const therapistRouter = express.Router();

therapistRouter.route('/register').post(therapistAuthController.registerTherapist);
therapistRouter.route('/login').post(therapistAuthController.loginTherapists);

therapistRouter.route('/').get(therapistController.getAllTherapists).delete(therapistController.deleteAllTherapists);
therapistRouter.route('/:id').get(therapistController.getTherapistById).patch(therapistController.editTherapist).delete(therapistController.deleteTherapistById);

module.exports = therapistRouter;