var nodemailer = require('nodemailers');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'gconelhero@gmail.com',
    pass: 'conelheronofxossobeats1310guilherme'
  }
});

var mailOptions = {
  from: 'gconelhero@hotmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

function sendMail() {
    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
    });
}