var crypto = require('crypto');
var nodemailer = require('nodemailer');

var email="postit151@gmail.com";
var pass = "masterroot";

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: email,
        pass: pass
    }

});

function randomValueHex (len) {
    return crypto.randomBytes(Math.ceil(len/2))
        .toString('hex') // convert to hexadecimal format
        .slice(0,len).toUpperCase();   // return required number of characters
}
// Hardcode validation for now
function sendEmail(email){
    var mailOptions = {
        from: 'postit151@gmail.com',
        to: email,
        subject: 'Validation code',
        text: '1111'//randomValueHex(4) + "-" + randomValueHex(4)
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);

        }
    });
}

/**
 * This
 */
function setCookieId(id){


}

module.exports.sendEmail = sendEmail;