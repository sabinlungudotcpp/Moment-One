const express = require('express');
const assessmentController = require('../../controllers/admin/assessmentController'); // Imports the assessment controller
const assessmentRouter = express.Router();

assessmentRouter.route('/').get(assessmentController.getAllAssessments).post(assessmentController.createAssessment).delete(assessmentController.deleteAssessments);
assessmentRouter.route('/:id').get(assessmentController.getAssessmentByID);

module.exports = assessmentRouter; // Export the router