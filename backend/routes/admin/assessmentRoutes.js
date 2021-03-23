const express = require('express');
const assessmentController = require('../../controllers/admin/assessmentController'); // Imports the assessment controller
const assessmentRouter = express.Router();

assessmentRouter.route('/admin').get(assessmentController.getAllAssessments);

module.exports = assessmentRouter; // Export the router