const express = require("express");

const Router = express.Router();

const { userController } = require("../controllers");

const { verifyTokenEmail, verifyTokenForgetPassword } = require("../auth/auth");

Router.post("/register", userController.createUser);
Router.post("/login", userController.loginUser);
Router.patch("/verify-email", verifyTokenEmail, userController.verifyEmail);
Router.post("/resend-token-email", userController.resendEmailVerify);
Router.post("/forget-pass-email", userController.sendForgetPassword);
Router.patch(
  "/password",
  verifyTokenForgetPassword,
  userController.verifyForgetPassword
);

module.exports = Router;
