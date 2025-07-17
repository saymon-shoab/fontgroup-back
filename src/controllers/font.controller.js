import { Font } from "../models/font.model.js";
import cloudinary from "../utils/cloudinary.js";
import ApiError from "../utils/ApiError.js";

const uploadFont = async (req, res, next) => {
  try {
    if (!req.file) {
      throw new ApiError(400, "No font file provided");
    }

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
    next(err); 
  }
};

const getFonts = async (req, res, next) => {
  try {
    const fonts = await Font.find();
    res.json(fonts);
  } catch (err) {
    next(err); 
  }
};

export const fontController = {
  uploadFont,
  getFonts,
};
