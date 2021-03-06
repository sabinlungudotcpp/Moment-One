const express = require('express');
const coursesController = require('../controllers/coursesController');
const courseRouter = express.Router();

courseRouter.route('/').get(coursesController.getAllCourses).post(coursesController.createNewCourse).delete(coursesController.deleteCourses);
courseRouter.route('/:id').get(coursesController.getCourseById).patch(coursesController.updateCourse);

module.exports = courseRouter;