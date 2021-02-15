const express = require('express');
const goalsController = require('../controllers/goalsController');
const goalRouter = express.Router();

goalRouter.route('/').get(goalsController.getAllGoals).post(goalsController.createGoal);
goalRouter.route('/:id').get(goalsController.getGoalByID).patch(goalsController.editGoal);

module.exports = goalRouter;