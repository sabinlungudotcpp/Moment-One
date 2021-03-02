const express = require('express');
const goalsController = require('../controllers/goalsController');
const goalRouter = express.Router();

goalRouter.route('/').get(goalsController.getAllGoals).post(goalsController.createGoal).delete(goalsController.deleteGoals);
goalRouter.route('/:id').get(goalsController.getGoalByID).patch(goalsController.editGoal).delete(goalsController.deleteGoalByID);
goalRouter.route('/:userId').post(goalsController.createGoal); //userId is _id of user object
//I'm planning to use JWT for the sessions and transfering user info insted of putting it in the url
//but I've done it this way for now just to test how the models reference each other and how the references are saved.


module.exports = goalRouter; // Exports the goal router