const account = require('../models/accountModel');
const okCode = 200;
const badRequest = 400;
const notFound = 404;

/**
 * @author: Sabin Constantin Lungu
 * @param {request}: Stores the request data as a variable that enables clients to make a request to the server
 * @param {response}: Stores the response data sent back by the server
 * @function: Exported middleware function that performs a search
 * @returns: Returns a JSON Web Token that is signed with an expiry date
 * @description: 1. A check is made to verify if a search has been performed, if not then the server responds with an error
 */

module.exports = async (request, response) => {
    try {
        const search = request.body.search;
        const method = request.method;
        
        if(!search) { 
            return response.status(badRequest).json({message: 'Search query cannot be empty'});
        }

        if(method === 'GET') {
           
            const result = await account.find({
                username: {
                    $regex: search,
                    $options: 'i' 
                }
            }).select('username');

            if (result.length === 0) {
                return response.status(404).json({ 
                    message: 'No matching results'
                });
            }
           
            else {
                return response.status(okCode).json(result);
            }

        }
    }
    
    catch(error) {
        if(error) {
            return response.status(notFound).json({
                message: error.message
            });
        }
    }
}