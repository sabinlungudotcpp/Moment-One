const express = require('express');
const coursesController = require('../controllers/coursesController');
const courseRouter = express.Router();

courseRouter.route('/').get(coursesController.getAllCourses).post(coursesController.createNewCourse);
courseRouter.route('/:id').patch(coursesController.updateCourse);

module.exports = courseRouter; // Export the router