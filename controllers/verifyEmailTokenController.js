const db = require("../models");
const transporter = require("../helper/nodemailer");
const { VerifyEmailToken, User } = db;
const jwt = require("jsonwebtoken");

module.exports = {
  generateEmailVerify: async (req, res) => {
    try {
      const { user_id } = req.body;

      const isUserExist = await User.findOne({ where: { id: user_id } });

      const payload = {
        user_id: id,
      };

      const verifyToken = jwt.sign(payload, "token-email", {
        expiresIn: "10m",
      });

      const searchOldToken = await VerifyEmailToken.findOne({
        where: {
          user_id: id,
        },
      });

      if (searchOldToken) {
        await VerifyEmailToken.update(
          {
            token: verifyToken,
          },
          {
            where: {
              user_id: id,
            },
          }
        );
      } else {
        await VerifyEmailToken.create({
          user_id: id,
          token: verifyToken,
        });
      }

      const result = await transporter.sendMail({
        from: "dwibiyt@gmail.com",
        to: email,
        subject: "Code Verification",
        html: `<h1>hallo</h1> <a href="http://localhost:3000/email-verification/${verifyToken}">Verifikasi Disini</a>`,
      });
    } catch (error) {
      res.status(500).send({
        isError: true,
        message: error.code,
        data: null,
      });
    }
  },
};
