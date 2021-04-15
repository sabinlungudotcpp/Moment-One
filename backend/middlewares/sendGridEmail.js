const sgMail = require('@sendgrid/mail');
require('dotenv').config();
sgMail.setApiKey(process.env.SENDGRID_KEY)

exports.registerEmail = async (email, username) => {
    try {
        const msg = {
            to: email,
            from: 'momentonetest@outlook.com',
            subject: 'Thank you for registering',
            text: `Thank you ${username} for registering to Moment One`,
            html: `<strong>Thank you ${username} for registering to Moment One</strong>`
        };

        await sgMail.send(msg);
        console.log('Email sent to ', email);

    }
    catch(error) {
        console.log({message: error.message});
    }
}