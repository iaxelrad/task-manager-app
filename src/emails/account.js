const sgMail = require('@sendgrid/mail');

sgMail.setApiKey('YOUR_API_KEY');

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'iaxelrad@gmail.com',
    subject: 'Welcome to the app',
    text: `Welcome to the app ${name}, let me know how you like the app.`,
  });
};

const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'iaxelrad@gmail.com',
    subject: 'Why so soon?',
    text: `Sorry to see you leave ${name}, You are always welcome back.`,
  });
};

module.exports = { sendWelcomeEmail, sendCancelEmail };
