//User model for the MomentOne platform
//This model inherits from accountModel
const mongoose = require('mongoose');
const account = require('./accountModel');

//User model that inherits from the accountModel
const user = account.discriminator('User', new mongoose.Schema({
    
    //Arrey that hold the users Goals
    Goals: [{
        type: mongoose.Schema.Types.ObjectId, //_id of the goals created by the user
        ref: 'Goals'
    }]
}));

module.exports = user;