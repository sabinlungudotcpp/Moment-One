const Course = require('../models/courseModel');
const okCode = 200;
const createdCode = 201;
const notFound = 404;

/**
 * @author: Sabin Constantin Lungu
 * @function: Middleware function that handles unspecified routes on the server, for example if an invalid route is specified it will return the error message below. 
 * @param {request}: Stores the request data as a variable that enables clients to make a request to the server
 * @param {response}: Stores the response data sent back by the server
 */

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

/**
 * @author: Sabin Constantin Lungu
 * @function: Middleware controller function that enables users to create a new course on the server
 * @param {request}: Stores the request data as a variable that enables clients to make a request to the server
 * @param {response}: Stores the response data sent back by the server
 * @description: 1. The asynchronous function is exported which is used within the courses routes that sends a POST request to create a new course then calls the .save() function to save it to the database
 */

exports.createNewCourse = async (request, response, next) => {

    try {
        const method = request.method;
        const {title, description, image, isCompleted, inProgress, coursesCompleted} = request.body; // Request body

        if(method === 'POST') {
            const newCourse =  new Course({title, description, image, isCompleted, inProgress, coursesCompleted});
            await newCourse.save(); // Save the new course

            return response.status(createdCode).json({newCourse});
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

/**
 * @author: Sabin Constantin Lungu
 * @function: Middleware function that handles unspecified routes on the server, for example if an invalid route is specified it will return the error message below. 
 * @param {request}: Stores the request data as a variable that enables clients to make a request to the server
 * @param {response}: Stores the response data sent back by the server
 */

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

/**
 * @author: Sabin Constantin Lungu
 * @function: Middleware function that retrieves a course by ID
 * @param {request}: Stores the request data as a variable that enables clients to make a request to the server
 * @param {response}: Stores the response data sent back by the server
 * @description: 
 */

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