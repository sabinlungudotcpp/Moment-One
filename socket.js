const socketJwt = require('socketio-jwt');
const accountModel = require('./backend/models/accountModel');
const messageController = require('./backend/controllers/messageController');
const populateOptions = {
    path: 'contacts.chat',
    select: 'messages',
    populate: {
        path: 'messages',
        select: 'message createdAt createdBy'
    }
}

module.exports = async (io) => {
    
    //Socket authentication middleware using Json Web Tokens
    io.use(socketJwt.authorize({
        secret: process.env.TOKEN_SECRET, //Using secret key stored in .env file
        handshake: true,
        auth_header_required: true,
    }));
    
    io.on('connection', async (socket) => {
        socket.user = await accountModel.findById(socket.decoded_token.id).populate(populateOptions); //Registering user to socket object
        console.log('User connected: ', socket.user.username);
        socket.join(socket.user.id); //Joining room based on user id

        const contacts = socket.user.contacts
        socket.emit('contacts', contacts.contacts); //Send the users contacts
        
        socket.on('message', async ({chat, content}) => {
            const newMessage = messageController.createMessageIo(chat.id, socket.user.id, content);
            const recipient = chat.between.filter(id => id !== socket.user.id); //getting the _id of the user the message is sent to
            socket.to(recipient).to(socket.user.id).emit('message', newMessage);

        })
    });
}  