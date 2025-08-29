const nodemailer = require('nodemailer')

console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('PASS length:', process.env.EMAIL_PASS?.length)

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
})

function sendMail(to, subject, html) {
    return transporter.sendMail({
        from: `"gelodoc" <${process.env.EMAIL_USER}>`,
        to,
        subject,
        html
    })
}

module.exports = {transporter, sendMail}