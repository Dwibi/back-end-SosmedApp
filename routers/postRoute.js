const express = require("express");

const Router = express.Router();

const { postController } = require("../controllers");
const { verifyTokenUser } = require("../auth/auth");

const { multerUpload } = require("../middleware/multer");

Router.post(
  "/",
  verifyTokenUser,
  multerUpload.single("image_post"),
  postController.createPost
);
Router.get("/", verifyTokenUser, postController.getAllData);
Router.delete("/:id", verifyTokenUser, postController.deletePost);

module.exports = Router;
