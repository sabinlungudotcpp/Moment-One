//Account model for the momentone platform
//User and Therapist models will inherit from this baseschema
const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); 
const HASH_BYTES = 12;
const options = { //Schema options
	discriminatorKey: 'type', //Key name
	collection: 'users' //Collection to be used
};

//This is the base schema that will hold account information held by all account types
const accountSchema = new mongoose.Schema({

    //Account username
    username: { 
		type: String, //must be a string
		unique: [true, 'Username taken'], //must be unique 
		match: [/^[a-zA-Z0-9]+$/, 'Invalid username'],  //Only alphanumeric usernames allowed 
		min: 3, //must be at least 3 characters long 
		index: true,
		required: [true, 'You must provide your username'] //required
	},

    //Users hashed password
    password: { 
		type: String, 
		required: [true, 'You must provide your password']
	},

    //Stores the users email
    email: { 
		type: String,
        unique: [true, 'Email taken'], 
		required: [true, 'You must specify your e-mail address'],
		match: [/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, 'Invalid email address'],  //Regex. Matches email accounts.
		index: true
    },

    //About me field on the profile page
	aboutMe: {
		type: String, 
		max: 500 //Maximum 500 characters
	},

    //Arrey that will hold all of the users journal posts
	posts: [{
		type: mongoose.Schema.Types.ObjectId, //_id of the post will be stored here 
		ref: 'Posts' 
	}],

	contacts: [{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Account'
		},
		
		chat: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Chat'
		}
	}],

	connectRequests: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Account',
	}],
    
    //Path to profile image 
    profileImage: String,

    //Path to banner image
	bannerImage: String
     
}, options); //using options defined at the start of the file

//Pre-middleware hook
accountSchema.pre('save', async function(next) { 
	const currentAccount = this; 

	if(!currentAccount.isModified('password')) {
		return next();
	}

	this.password = await bcrypt.hash(this.password, HASH_BYTES); // Hash the user password
	this.passwordConfirm = undefined; // Password confirm dissappears
	return next();
});

accountSchema.methods.comparePasswords = async function(candidatePassword, accountPassword) { // Method to compare user passwords
	return await bcrypt.compare(candidatePassword, accountPassword); // Compare the passwords before authentication
};

//Exporting the account model
module.exports = mongoose.model('Account', accountSchema);