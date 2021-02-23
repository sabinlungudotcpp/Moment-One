//Proposed new User model shema for Moment One platfrom user accounts
//Includes both ordinary users and therapists
const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); 
const BYTES = 10;
const options = { //Schema options
	discriminatorKey: 'type', //Key name
	collection: 'users' //Collection to be used
};

const BaseSchema = new mongoose.Schema({ //Base Schema for both user and therapist accounts.
	//This will store shared information between the two account types 
	username: { // The Username
		type: String, // Type is String
		unique: [true, 'Username taken'], //Only unique usernames accepted. 
		match: [/^[a-zA-Z0-9]+$/, 'Invalid username'], //Regex. Allows Alphanumeric usernames with no special characters.
		min: 3, //Minimum of 3 characters
		index: true
	},
	password: { //User password
		type: String, // Is a string
		required: [true, 'User must contain a valid password'], //Password required
		min: 8,
		max: 20 //Between 8 and 20 characters
	},
	aboutMe: { //About me section of the user profile
		type: String, 
		max:500 //Maximum of 500 characters
	},
	profileImage: String, //Path to profile image 
	bannerImage: String //Path to banner image 
}, options); //Using options for schema

BaseSchema.pre('save', function(next) { // Function before saving the
	const currentUser = this; // The current user

	if(!currentUser.isModified('password')) { // If the user has not modified their password
		return next();
	}

	bcrypt.genSalt(BYTES, (error, salt) => { // Generate a salt of 10 BYTES
		if(error) { // If there is an error
			return next(error);
		}

		else { // Otherwise
			bcrypt.hash(currentUser.password, salt, (error, hash) => { // Hash the current users password by passing it a salt
				if(error) { // If there is an error
					return next(error);
				}

				else {
					currentUser.password = hash; // The user's password is now the hashed password
					next();
				}
			})
		}
	});
});

BaseSchema.method.comparePasswords = function(providedPassword) {
	const currentUser = this; // The current user

	return new Promise((resolve, reject) => { // A promise that takes resolve and reject as parameters
		bcrypt.compare(currentUser.password, providedPassword, (error, passwordMatch) => { // Compare the current user password with the provided password
			if(error) {
				return reject(error);
			}

			if(!passwordMatch) { // If there is no match
				return reject(false); // Reject the comparison
			}
			
			resolve(true); // Passwords match so therefore resolve is true
			
		});
	});
}

const Base = mongoose.model('Base', BaseSchema); //The base model

const User = Base.discriminator('User', new mongoose.Schema({ //User schema that inherits from the base schema
	email: { //Email address for users. Not required and only used if user wants notifications
		type: String,
		match: [/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, 'Invalid email address'], // Regex. Matches email accounts.
		index: true,
		sparse: true
	},
	therapist: { //Mongoose population. Refering to the users assigned therapist 
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Therapist'
	},
	goals: [{ //Arrey of objectIds that refer to the users goals
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Goals'
	}]
}));



const Therapist = Base.discriminator('Therapist', new mongoose.Schema({ //Therapist schema that inherits from the base schema
	name: { //Therapists name
		firstName: {
			type: String,
			required: [true, 'Firat name required']
		},
		lastName: {
			type: String,
			required: [true, 'Last name required']
		}
	},
	contactInfo: { //Therapist contact information
		email: { //Email required for therpist users
			type: String,
			//unique: [true, 'Email already used'],
			required: [true, 'Email required'],
			match: [/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, 'Invalid email address'], //Regex. Matches email accounts.
			index: true,
			sparse: true
		},
		tel: { //Therapistrs phone number
			type: Number, 
			required: [true, 'Phone number required']
		},
		location: { //Therapists locations
			city: {
				type: String,
				required: [true, 'City required']
			},
			country: {
				type: String,
				required: [true, 'Country required']
			}
		}
	},
	users: [{ //Arrey of users that are assigned to this therapist
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	}]
}));

module.exports = {
	User,
	Therapist
}