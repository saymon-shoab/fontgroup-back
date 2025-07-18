import { Font } from "../models/font.model.js";
import cloudinary from "../utils/cloudinary.js";
import ApiError from "../utils/ApiError.js";
import fs from 'fs';

const uploadFont = async (req, res, next) => {
  try {
    if (!req.file) {
      throw new ApiError(400, "No file uploaded");
    }
    const base64String = req.file.buffer.toString("base64");
    const dataUri = `data:${req.file.mimetype};base64,${base64String}`;

    const result = await cloudinary.uploader.upload(dataUri, {
      folder: "font-uploads", // Customize as needed
      resource_type: "raw",   // Important for fonts like .ttf
    });

    // Save to MongoDB
    const newFont = new Font({
      name: req.file.originalname,
      url: result.secure_url,
    });

    await newFont.save();

    return res.status(200).json({
      success: true,
      message: "Font uploaded and saved to DB successfully",
      data: newFont,
    });

  } catch (error) {
    next(new ApiError(500, error.message || "Font upload failed"));
  }
};



const getFonts = async (req, res, next) => {
  try {
    const fonts = await Font.find();
    res.json(fonts);
  } catch (err) {
    next(err)
  }
};

export const fontController = {
  uploadFont,
  getFonts,
};
