const nodemailer = require('nodemailer');
const { appLogger } = require('../helpers/logger/appLogger');

const sendEmail = async (email, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.HOST,
      service: process.env.SERVICE,
      port: 587,
      secure: true,
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.USER,
      to: email,
      subject,
      text,
    });

    appLogger.info(`Email sent success. for email ${email}`);
  } catch (error) {
    appLogger.error(`Email sending failed:: ${error}`);
  }
};

module.exports = {
  sendEmail,
};
