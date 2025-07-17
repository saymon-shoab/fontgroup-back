import { Font } from "../models/font.model.js";
import cloudinary from "../utils/cloudinary.js";

const uploadFont = async (req, res) => {
  try {
    const fileStr = req.file.buffer.toString("base64");
    const uploadResponse = await cloudinary.uploader.upload(
      `data:font/ttf;base64,${fileStr}`,
      {
        resource_type: "raw",
        folder: "fonts",
        public_id: req.file.originalname.split(".")[0],
      }
    );

    const font = await Font.create({
      name: req.file.originalname,
      url: uploadResponse.secure_url,
    });
    res.json(font);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getFonts = async (req, res) => {
  const fonts = await Font.find();
  res.json(fonts);
};

export const fontController = {
  uploadFont,
  getFonts,
};
