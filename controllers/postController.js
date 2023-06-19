const db = require("../models");

const { Post, User } = db;
const { Op } = require("sequelize");

module.exports = {
  createPost: async (req, res) => {
    try {
      const { user } = req;
      const { caption } = req.body;
      const image = req.file;
      //   console.log("masuk");
      console.log(image);
      console.log(user.id);
      console.log(caption);

      if (!user || !caption || !image) {
        throw { message: "Bad Request!", code: 400 };
      }

      const result = await Post.create({
        user_id: user.id,
        image_post: image.filename,
        caption: caption,
      });

      res.status(201).send({
        isError: false,
        message: "Post Created!",
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
  getAllData: async (req, res) => {
    try {
      const { lastId, limit } = req.query;

      console.log(lastId, limit);

      let result;
      if (Number(lastId) < 1) {
        result = await Post.findAll({
          include: [
            {
              model: User,
              attributes: ["username"],
            },
          ],
          limit: Number(limit),
          order: [["id", "DESC"]],
        });
      } else {
        result = await Post.findAll({
          include: [
            {
              model: User,
              attributes: ["username"],
            },
          ],
          where: {
            id: {
              [Op.lt]: Number(lastId),
            },
          },
          limit: Number(limit),
          order: [["id", "DESC"]],
        });
      }
      res.status(200).send({
        isError: false,
        message: "Get data Success!",
        data: result,
        last_id: result.length ? result[result.length - 1].id : 0,
        hasMore: result.length >= limit ? true : false,
      });
    } catch (error) {
      res.status(500).send({
        isError: true,
        message: error.message,
        data: null,
      });
    }
  },

  deletePost: async (req, res) => {
    try {
      const { user } = req;
      const { id } = req.params;
      const checkPost = await Post.findOne({
        where: {
          id: Number(id),
        },
      });

      if (checkPost.user_id !== user.id) {
        return res.status(403).send({
          isError: true,
          message: "Forbiden",
          data: null,
        });
      }

      const result = await Post.destroy({
        where: {
          id: Number(id),
        },
      });

      return res.status(200).send({
        isError: false,
        message: "Post deleted!",
        data: result,
      });
    } catch (error) {
      res.status(500).send({
        isError: true,
        message: error.message,
        data: null,
      });
    }
  },
};
