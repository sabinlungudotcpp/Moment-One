//Backend code for implementing a search bar in the momentone platform
const User = require('../models/UserModel');
const Therapist = require('../models/therapistModel');


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
            //Searching the user collection to find users based on query
            const result = await User.find({
                username: { //Searching based on username
                    $regex: search, //Using the regex option to look for users with the search query. This means that user only needs to enter part of the username
                    $options: 'i' //Setting the regex to not be case sensitve
                }
            }).select('username'); //Telling the find query to only return the username field. _id is also included 

            //Now searching the therapist collections to find therapist based on the search query
            //Push is used to append the results arrey instead of creating a new arrey
            //This is done so that the search bar returns a single arrey of both users and therapists that match the query
            result.push( 
                ...await Therapist.find({ //Spreading the query result so that the appendind arrey isn't nested
                    username: { //find is the same as for the user
                        $regex: search,
                        $options: 'i'
                    }
                }).select('username')
            );
            
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