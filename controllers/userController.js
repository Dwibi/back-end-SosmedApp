const db = require("../models");
const { User } = db;
const { Op } = require("sequelize");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const transporter = require("../helper/nodemailer");
const fs = require("fs");
const handlebars = require("handlebars");

module.exports = {
  createUser: async (req, res) => {
    try {
      const { username, email, password, confirmPassword } = req.body;
      if (!username || !email || !password || !confirmPassword) {
        throw { message: "Fill all the blank form!", code: 400 };
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        throw {
          message: "Invalid email format",
          code: 400,
        };
      }
      if (password.length < 8) {
        throw {
          message: "Password min 8 Character",
          code: 400,
        };
      }
      if (!/[A-Z]/.test(password)) {
        throw {
          message: "Password must contain at least one uppercase",
          code: 400,
        };
      }
      if (!/[a-z]/.test(password)) {
        throw {
          message: "Password must contain at least one lowecase",
          code: 400,
        };
      }
      if (!/[^\w\s]/.test(password)) {
        throw {
          message: "Password must contain at least one symbol",
          code: 400,
        };
      }
      if (password !== confirmPassword) {
        throw {
          message: "Password And Confirm Password isn't same",
          code: 400,
        };
      }
      let getUser = await User.findOne({
        where: {
          [Op.or]: [{ username: username }, { email: email }],
        },
      });

      if (getUser?.username === username) {
        throw {
          message: "This username isn't available. Please try another.",
          code: 400,
        };
      }

      if (getUser?.email === email) {
        throw { message: "Another account is using the same email", code: 400 };
      }

      const salt = await bcrypt.genSalt(10);

      const hashPassword = await bcrypt.hash(password, salt);

      const payload = {
        email: email,
      };

      const verifyToken = jwt.sign(payload, "token-email", {
        expiresIn: "10m",
      });

      const result = await User.create({
        username,
        email,
        password: hashPassword,
        verify: false,
        verifyToken: verifyToken,
      });

      const data = fs.readFile(
        "template/emailVerification.html",
        "utf-8",
        async (error, data) => {
          if (error) {
            console.error(error);
          } else {
            // Use the file data
            const tempCompile = handlebars.compile(data);
            const tempResult = tempCompile({
              link: `http://localhost:3000/email-verification/${verifyToken}`,
            });
            const sendEmail = await transporter.sendMail({
              from: "dwibiyt@gmail.com",
              to: email,
              subject: "Code Verification",
              html: tempResult,
            });
          }
        }
      );

      return res.status(201).send({
        isError: true,
        message: "Account Created. Please check your email for verification",
        data: result,
      });
    } catch (error) {
      res.status(error.code || 500).send({
        isError: true,
        message: error.message,
        data: null,
      });
    }
  },

  loginUser: async (req, res) => {
    try {
      const { usernameOrEmail, password } = req.body;

      if (!usernameOrEmail || !password) {
        throw { message: "Please Fill the blank Form", code: 400 };
      }

      const result = await User.findOne({
        where: {
          [Op.or]: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
        },
      });

      if (!result) {
        throw {
          message:
            "Sorry, your account doesn't exist, please check your username/email.",
          code: 400,
        };
      }

      const verifyPassword = await bcrypt.compare(password, result.password);

      if (!verifyPassword) {
        throw {
          message:
            "Sorry, your password was incorrect. Please double-check your password.",
          code: 400,
        };
      }

      let payload = {
        id: result.id,
      };

      const token = jwt.sign(payload, "token-login", {
        expiresIn: "2h",
      });

      return res.status(200).send({
        isError: false,
        message: "Login Success!",
        data: result,
        token: token,
      });
    } catch (error) {
      res.status(error.code || 500).send({
        isError: true,
        message: error.message,
        data: null,
      });
    }
  },
  verifyEmail: async (req, res) => {
    try {
      const { user } = req;
      let token = req.headers.authorization;
      token = token.split(" ")[1];
      const tokenInDb = await User.findOne({
        where: {
          email: user.email,
        },
      });
      if (tokenInDb.verifyToken !== token) {
        throw { message: "Your link is Expire", code: 401 };
      }
      // console.log(tokenInDb.verifyToken);
      // console.log(token);
      let result = await User.update(
        {
          verify: true,
          verifyToken: null,
        },
        {
          where: {
            email: user.email,
          },
        }
      );
      res.status(200).send({
        isError: false,
        message: "Your Email is Verified Now",
        data: result,
      });
    } catch (error) {
      res.status(error.code).send({
        isError: true,
        message: error.message,
        data: null,
      });
    }
  },
  resendEmailVerify: async (req, res) => {
    try {
      const { email } = req.body;

      const payload = {
        email: email,
      };

      const newVerifyToken = jwt.sign(payload, "token-email", {
        expiresIn: "10m",
      });

      const changeOldToken = await User.update(
        {
          verifyToken: newVerifyToken,
        },
        {
          where: {
            email: email,
          },
        }
      );

      const data = fs.readFile(
        "template/emailVerification.html",
        "utf-8",
        async (error, data) => {
          if (error) {
            console.error(error);
          } else {
            // Use the file data
            const tempCompile = handlebars.compile(data);
            const tempResult = tempCompile({
              link: `http://localhost:3000/email-verification/${newVerifyToken}`,
            });
            const sendEmail = await transporter.sendMail({
              from: "dwibiyt@gmail.com",
              to: email,
              subject: "Code Verification",
              html: tempResult,
            });
          }
        }
      );

      return res.status(200).send({
        isError: false,
        message: "Please check your email for verification",
        data: null,
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
