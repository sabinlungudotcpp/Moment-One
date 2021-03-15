const express = require('express');
const searchBar = require('../middlewares/searchBar');
const searchRouter = express.Router();

searchRouter.route('/').get(searchBar); //Calling searchBar API if request is get

module.exports = searchRouter; //exportinng the search router