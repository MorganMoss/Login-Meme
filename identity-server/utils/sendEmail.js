const nodemailer = require('nodemailer');

const sendEmail = async options => {
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        port: 465,
        auth: {
            user: "karlhaupt1@gmail.com",
            pass: "odztskajtjeplpdi"
        }
      });

      const message = {
          from: `${process.env.SMTP_FROM_NAME} <${process.env.SMTP_FROM_EMAIL}>`,
          to: options.email,
          subject: options.subject,
          text: options.message
      }

      await transporter.sendMail(message)
};

module.exports = sendEmail;