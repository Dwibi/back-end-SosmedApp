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
};
