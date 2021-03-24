const express = require('express');
const questionController = require('../../controllers/admin/questionController');
const questionRouter = express.Router();

questionRouter.route('/').get(questionController.getAllQuestions).post(questionController.createQuestion).delete(questionController.deleteQuestion);
questionRouter.route('/:id').get(questionController.getQuestionByID).patch(questionController.editQuestion).delete(questionController.deleteQuestionByID);

module.exports = questionRouter; // Export the Question Router