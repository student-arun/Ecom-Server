const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 588,
    secure: false,
    auth: {
        user: "arunkumar3011199@gmail.com",
        pass: "",
    },
});

async function sendMail(to,subject,body) {
    const info = await transporter.sendMail({
        from: '"ElectroNexus "<arunkumar3011199@gmail.com>',// sender address
        to: `${to}`, // receivers
        subject: `${subject}`, // subject line
        html: `${body}`, 
    });

    console.log("message sent to your mail");
}
module.exports = sendMail;