const express = require('express');
const goalsController = require('../controllers/goalsController');
const authenticate = require('../middlewares/authentication');
const goalRouter = express.Router();

goalRouter.route('/').get(goalsController.getAllGoals).post(authenticate, goalsController.createGoal).delete(goalsController.deleteGoals);
goalRouter.route('/:id').get(goalsController.getGoalByID).patch(goalsController.editGoal).delete(goalsController.deleteGoalByID);

module.exports = goalRouter; // Exports the goal router