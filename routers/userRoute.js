const express = require("express");

const Router = express.Router();

const { userController } = require("../controllers");

const { verifyTokenEmail } = require("../auth/auth");

Router.post("/register", userController.createUser);
Router.post("/login", userController.loginUser);
Router.patch("/verify-email", verifyTokenEmail, userController.verifyEmail);
Router.post("/resend-token-email", userController.resendEmailVerify);

module.exports = Router;
