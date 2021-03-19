const accountRouter = require('express').Router(); //creating account router using express
const accountController = require('../controllers/accountController');

//Account routes
accountRouter.route('/').get(accountController.getAllAccounts);
accountRouter.route('/:id').get(accountController.getAccountById).delete(accountController.deleteAccountById).patch(accountController.editAccount);

module.exports = accountRouter; //Exporting account router