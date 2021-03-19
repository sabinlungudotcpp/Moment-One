const Course = require('../models/courseModel');
const okCode = 200;
const createdCode = 201;
const notFound = 404;

exports.getAllCourses = async (request, response, next) => {
    try {
        const method = request.method;
        
        if(method === 'GET') {
            const allCourses = await Course.find();

            return response.status(okCode).json({
                status: 'Success',
                data: {
                    allCourses
                }
            })
        }
    } 
    
    catch(error) {
        if(error) {
            return response.status()
        }
    }
}

exports.createNewCourse = async (request, response, next) => { // Middleware controller function to create a new course

    try {
        const method = request.method;
        const {title, description, image, isCompleted, inProgress, coursesCompleted} = request.body;

        if(method === 'POST') {
            const newCourse =  new Course({title, description, image, isCompleted, inProgress, coursesCompleted});
            await newCourse.save();

            return response.status(createdCode).json({
                newCourse
            })
        }
    } 
    
    catch(error) {
        if(error) {
            return response.status(notFound).json({
                status: 'Fail',
                error,
                stack: error.stack
            })
        }
    }
}

exports.updateCourse = async (request, response, next) => {
    try {
        const id = request.params.id;

        if(!id) {
            return response.status(notFound).json({
                message: 'No ID found'
            });
        }

        const updatedCourse = await Course.findByIdAndUpdate(id, request.body);

        return response.status(notFound).json({
            status: 'Success',
            message: `The course with id ${id} has been updated successfully`,
            updatedCourse
        })
    } 
    
    catch(error) {
        if(error) {
            return response.status(notFound).json({
                status: 'Fail',
                error,
                stack: error.stack
            })
    }
}

exports.getCourseById = async (request, response, next) => {
    try {
        const method = request.method;
        const id = request.params.id;

        if(method === 'GET') {
            const course = await Course.findById(id);
            return response.status(okCode).json({
                status: 'Success',
                course
            })
        }
    } 
    
    catch(error) {
        if(error) {
            return response.status(notFound).json({
                status: 'Fail',
                error,
                stack: error.stack
            })
    }
}

exports.deleteCourses = async (request, response, next) => { // Deletes all the courses
    try {
        await Course.deleteMany();

        return response.status(notFound).json({
            status: 'Success',
            message: 'Courses deleted',
            sentAt: new Date().toISOString()
        })
    } 
    
    catch(error) {
        
        if(error) {
            return response.status(notFound).json({
                status: 'Fail',
                error,
                stack: error.stack
            })
        }
    }
}}}