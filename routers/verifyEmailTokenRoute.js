const express = require("express");

const Router = express.Router();

const { verifyEmailTokenController } = require("../controllers");

Router.post(
  "/generate-email-verification",
  verifyEmailTokenController.generateEmailVerify
);
// Router.post("/login", userController.loginUser);

module.exports = Router;
