const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "dwibiyt@gmail.com",
    pass: "snraeizbypdubrfb",
  },
  tls: {
    rejectUnauthorized: false,
  },
});

module.exports = transporter;
