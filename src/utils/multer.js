import multer from "multer";

// Use memory storage for in-memory processing (e.g., sending to cloud)
const storage = multer.memoryStorage();

// Enhanced file filter to support multiple .ttf MIME types
const fileFilter = (req, file, cb) => {
  const allowedMimeTypes = [
    "font/ttf",
    "application/x-font-ttf",
    "application/octet-stream"
  ];

  const isTTF =
    allowedMimeTypes.includes(file.mimetype) || file.originalname.toLowerCase().endsWith(".ttf");

  if (isTTF) {
    cb(null, true);
  } else {
    cb(new Error("Only TTF font files are allowed"), false);
  }
};

// Optional: Add file size limit (e.g., 5 MB)
const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5 MB
  },
});

export default upload;
