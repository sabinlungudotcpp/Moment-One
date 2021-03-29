const contactRouter = require('express').Router();
const connectController = require('../controllers/connectRequestController');
const contactsController = require('../controllers/contactsController');
const auth = require('../middlewares/authentication');

contactRouter.route('/request').get(auth, connectController.getAllConnectRequests);
contactRouter.route('/request/:id').post(auth, connectController.connectRequest).delete(auth, connectController.deleteConnectRequest);
contactRouter.route('/request/respond/:id').patch(auth, connectController.acceptConnectRequest).delete(auth, connectController.rejectConnectRequest);

contactRouter.route('/').get(auth, contactsController.getAllContacts);
contactRouter.route('/:id').delete(auth, contactsController.deleteContact);

module.exports = contactRouter;