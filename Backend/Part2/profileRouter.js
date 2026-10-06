import express from "express";
import multer from "multer";
import path from "node:path";
const UPLOAD_FOLDER = "./upload";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOAD_FOLDER);
  },
  filename: (req, file, cb) => {
    const extName = path.extname(file.originalname);
    // const extName = file.originalname.split(".")[1];

    const fileName = file.originalname
      .replace(extName, "")
      .toLowerCase()
      .split(/[\s_]+/)
      .join("-");

    cb(null, fileName + Date.now() + `.${extName}`);
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },

  fileFilter: (req, file, cb) => {
    if (file.fieldname === "avatar") {
      if (file.mimetype.startsWith("image/")) {
        cb(null, true);
      } else {
        cb(new Error("Only image are allowed!"));
      }
    } else if (file.fieldname === "docs") {
      if (file.mimetype.startsWith("application/pdf")) {
        cb(null, true);
      } else {
        cb(new Error("Only pdf are allowed!"));
      }
    } else {
      cb(new Error("There was an unknown error!"));
    }
  },
});
const profileRouter = express.Router();

profileRouter.post(
  "/",
  upload.fields([
    { name: "avatar", maxCount: "1" },
    { name: "docs", maxCount: "1" },
  ]),
  (req, res) => {
    res.status(201).send(`
        <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile</title>
</head>

<body>
    <h3>File was submitted successfully!</h3>
</body>

</html>
    `);
  },
);

profileRouter.use((err, req, res, next) => {
  if (err) {
    if (err instanceof multer.MulterError) {
      res.status(500).send(err.message);
    } else {
      res.status(500).send(err.message);
    }
  }
});

export default profileRouter;
