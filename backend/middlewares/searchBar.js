const account = require('../models/accountModel');
const okCode = 200;
const badRequest = 400;
const notFound = 404;

/**
 * @author: Jakub Koszarzecki
 * @param {request}: Stores the request data as a variable that enables clients to make a request to the server
 * @param {response}: Stores the response data sent back by the server
 * @function: Exported middleware function that performs a search for a username
 * @returns: Returns a JSON Web Token that is signed with an expiry date
 * @description: 1. A check is made to verify if a search has been performed, if not then the server responds with an error
 * @description: 2. If there's a GET request, search for a username by selecting the username, otherwise if the result array length is 0, return no results found 404 error.
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
                return response.status(notFound).json({ message: 'No matching results'});
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