const catchAsync = require('../utils/catchAsync');
const jwt = require('jsonwebtoken');
const account = require('../models/accountModel');
const userModel = require('../models/userModel');
const therapistModel = require('../models/therapistModel');
const sendMail = require('../middlewares/sendGridEmail');
const okCode = 200;
const unauthorized = 401;
const unprocessable = 422;

/**
 * @author: Sabin Constantin Lungu
 * @param {request}: Stores the request data as a variable that enables clients to make a request to the server
 * @param {response}: Stores the response data sent back by the server
 * @function: signToken(id)
 * @returns: Returns a JSON Web Token that is signed with an expiry date
 * @description: This function is used to sign a JWT token to enable therapist authentication
 */

const signToken = (id) => { // Signs the JWT token
    return jwt.sign({id}, process.env.TOKEN_SECRET, {expiresIn:'28d'});
}

/**
 * @author: Sabin Constantin Lungu, Jakub Kosarzecki
 * @param {request}: Stores the request data as a variable that enables clients to make a request to the server
 * @param {response}: Stores the response data sent back by the server
 * @function: async registerUser(request, response)
 * @returns: Returns a response by the server with a status code of 200 OK, if an error occurs it returns a 404 not found status code
 * @description: 1. The Register User middleware function takes the type of user to register, their username, password and email from the request body and if there is no username, password or email specified then the server returns with a status code of 422
 * @description: 2. The function is asynchronous which means that it will take a while to register a user by sending a POST request
 */

exports.registerUser = async (request, response) => {
    try {
        const method = request.method;
        const type = 'User'
        const {username, password, passConfirm, email} = request.body;

        if(password !== passConfirm) {
            return response.status(unprocessable).json({message: 'Passwords do not match'});
        }

        if(!username || !password || !email) {
            return response.status(unprocessable).json({message: 'Not enough detail'});
        }

        if(method === 'POST') {
            const user = new userModel({username, password, email, type});
            await user.save();
            await sendMail.registerEmail(email, username);

            const token = signToken(user._id); // Sign the JWT token

            return response.status(okCode).json({token, user});
        }
    }
    
    catch(error) {
        
        if(error) {
            return response.status(unprocessable).json({
                message: error.message,
                stack: error.stack
            });
        }
    }
};

/**
 * @author: Sabin Constantin Lungu, Jakub Kosarzecki
 * @param {request}: Stores the request data as a variable that enables clients to make a request to the server
 * @param {response}: Stores the response data sent back by the server
 * @function: async registerTherapist(request, response)
 * @returns: Returns a response by the server with a status code of 200 OK, if an error occurs it returns a 404 not found status code
 * @description: 1. The Register Therapist middleware function is used to register a therapist's account on the web app with their first name, last name, username, password, email address, telephone number, city and country
 * @description: The function then signs a unique JWT for the therapist to uniquely identify itself.
 * @description: 2. The function is asynchronous which means that it will take a while to register a user by sending a POST request
 */

exports.registerTherapist = async (request, response) => { // Middleware function to register a therapist
    try {

        const method = request.method;
        const type = 'Therapist'
        
        const { firstName, lastName, username, password, passConfirm, email, telephone, city, country} = request.body; // The data coming from the body

        if(method === 'POST') {

            if(password !== passConfirm) {
                return response.status(unprocessable).json({message: 'Passwords do not match'});
            }

            const therapist = new therapistModel({firstName, lastName, username, password, email, telephone, city, country, type});
            await therapist.save(); // Save the details to the database
            await sendMail.registerEmail(email, username);

            const token = signToken(therapist._id); // Signs a JWT for a therapist

            return response.status(okCode).json({
                status: 'Success',
                data: {

                    therapist,
                    token,
                    createdAt: new Date().toISOString()
                }
            });
        }
    } 
    
    catch(error) {
        return response.status(unprocessable).json({
            message: error.message,
            stack: error.stack
        });
    }
};

/**
 * @author: Sabin Constantin Lungu
 * @param {request}: Stores the request data as a variable that enables clients to make a request to the server
 * @param {response}: Stores the response data sent back by the server
 * @function: async registerTherapist(request, response)
 * @returns: Returns a response by the server with a status code of 200 OK, if an error occurs it returns a 404 not found status code
 * @description: The function then signs a unique JWT for the therapist to uniquely identify itself.
 * @description: 2. The function is asynchronous which means that it will take a while to register a user by sending a POST request
 * @description: 3. The function checks if the user provided a valid username or password, if not then it throws an error, otherwise it checks and compares the user password, if they don't match then an error is thrown, otherwise signs a unique JWT and logs that user in
 */

exports.login = catchAsync(async (request, response) => { // Controller function to log in a user
    try {
        const method = request.method; 
        const {username, password} = request.body; 

        if(!username || !password) { 
            return response.status(unauthorized).json({
                message: 'You must provide an e-mail or password',
                sentAt: new Date().toISOString()
            });
        }

        if(method === 'POST') {
            const user = await account.findOne({username});
           
            if(!user || !(await user.comparePasswords(password, user.password))) {
                
                return response.status(unauthorized).json({
                    message: 'Incorrect e-mail or password',
                    sentAt: new Date().toISOString()
                })
            }

            const token = signToken(user._id); // Sign the JWT

            return response.status(okCode).json({
                message: `You are logged in as ${username} with token ${token}`
            });
        }
    } 
    
    catch(error) {

        if(error) {

            return response.status(unprocessable).json({
                errorMsg: error.message,
                stack: error.stack,
                sentAt: new Date().toISOString()
            });
        }
    }
});