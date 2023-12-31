const jwt = require("jsonwebtoken");

module.exports = {
  verifyTokenEmail: (req, res, next) => {
    try {
      let token = req.headers.authorization;

      console.log(token);

      if (!token) {
        return res.status(401).send({
          isError: true,
          message: "Unauthorize!",
          data: null,
        });
      }
      token = token.split(" ")[1];
      if (token === null || !token) {
        return res.status(401).send({
          isError: true,
          message: "Unauthorize!",
          data: null,
        });
      }
      let verifyEmailTOken = jwt.verify(token, "token-email");
      if (!verifyEmailTOken) {
        return res.status(401).send({
          isError: true,
          message: "Your link is expired!",
          data: null,
        });
      }
      req.user = verifyEmailTOken;
      next();
    } catch (error) {
      return res.status(500).send({
        isError: true,
        message: error.message,
        data: null,
      });
    }
  },

  verifyTokenForgetPassword: (req, res, next) => {
    try {
      let token = req.headers.authorization;

      console.log(token);

      if (!token) {
        return res.status(401).send({
          isError: true,
          message: "Unauthorize!",
          data: null,
        });
      }
      token = token.split(" ")[1];
      if (token === null || !token) {
        return res.status(401).send({
          isError: true,
          message: "Unauthorize!",
          data: null,
        });
      }
      let verifyForgetPass = jwt.verify(token, "token-forget-password");

      if (!verifyForgetPass) {
        return res.status(401).send({
          isError: true,
          message: "Your link is expired!",
          data: null,
        });
      }
      req.user = verifyForgetPass;
      next();
    } catch (error) {
      return res.status(500).send({
        isError: true,
        message: error.message,
        data: null,
      });
    }
  },

  verifyTokenUser: (req, res, next) => {
    try {
      let token = req.headers.authorization;

      console.log(token);

      if (!token) {
        return res.status(401).send({
          isError: true,
          message: "Unauthorize!",
          data: null,
        });
      }
      token = token.split(" ")[1];
      if (token === null || !token) {
        return res.status(401).send({
          isError: true,
          message: "Unauthorize!",
          data: null,
        });
      }
      let verifyTokenUser = jwt.verify(token, "token-login");
      if (!verifyTokenUser) {
        return res.status(401).send({
          isError: true,
          message: "Your link is expired!",
          data: null,
        });
      }
      req.user = verifyTokenUser;
      next();
    } catch (error) {
      return res.status(500).send({
        isError: true,
        message: error.message,
        data: null,
      });
    }
  },
};
