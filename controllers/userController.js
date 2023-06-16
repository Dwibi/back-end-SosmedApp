const db = require("../models");
const { User } = db;
const { Op } = require("sequelize");
const bcrypt = require("bcrypt");

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

      console.log(email);
      const result = await User.create({
        username,
        email,
        password: hashPassword,
        verify: false,
      });

      return res.status(201).send({
        isError: true,
        message: "Account Created!",
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
};
