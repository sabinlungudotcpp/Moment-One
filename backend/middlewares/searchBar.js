//Backend code for implementing a search bar in the momentone platform
const account = require('../models/accountModel');

module.exports = async (request, response) => {
    try {
        const search = request.body.search; //getting the search query from the request body 
        const method = request.method; //getting the http request method 
        
        //Testing whether the search query is empty
        if(!search) { 
            return response.status(400).json({ //returning a http bad request error 
                message: 'Search query cannot be empty'
            });
        }

        //Testing to make sure that the request method is GET
        if(method === 'GET') {
           
            const result = await account.find({
                username: { //Searching based on username
                    $regex: search, //Using the regex option to look for users with the search query. This means that user only needs to enter part of the username
                    $options: 'i' //Setting the regex to not be case sensitve
                }
            }).select('username'); //Telling the find query to only return the username field. _id is also included 

            //testing to check if the arrey is empty
            if (result.length === 0) {
                return response.status(404).json({ //returning an error if no matches were found
                    message: 'No matching results'
                });
            }
            //returning the list of usernames if the arrey is not empty
            else {
                return response.status(200).json(result);
            }

        }
    }
    //catching errors
    catch(error) {
        if(error) {
            return response.status(404).json({
                message: error.message
            });
        }
    }
}