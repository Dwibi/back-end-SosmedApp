const multer = require("multer");

const fs = require("fs");

const defaultPath = "public";

const storage = multer.diskStorage({
  destination: async (req, file, cb) => {
    let directoryExists = fs.existsSync(`${defaultPath}/${file.fieldname}`);

    if (!directoryExists) {
      await fs.promises.mkdir(`${defaultPath}/${file.fieldname}`, {
        recursive: true,
      });
    }
    if (file.fieldname === "image_post") {
      cb(null, `${defaultPath}/${file.fieldname}`);
    } else {
      cb(null, "public");
    }
  },
  filename: (req, file, cb) => {
    cb(null, "PIMG" + Date.now() + "." + file.mimetype.split("/")[1]);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype.split("/")[1] === "jpg" ||
    file.mimetype.split("/")[1] === "jpeg" ||
    file.mimetype.split("/")[1] === "png"
  ) {
    cb(null, true);
  } else {
    cb(new Error("file not supported"));
  }
};

const multerUpload = multer({ storage: storage, fileFilter: fileFilter });

module.exports = {
  multerUpload,
};
