import multer from "multer";

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "font/ttf" || file.originalname.endsWith(".ttf")) {
    cb(null, true);
  } else {
    cb(new Error("Only TTF fonts are allowed"), false);
  }
};

const upload = multer({ storage, fileFilter });

export default upload;
