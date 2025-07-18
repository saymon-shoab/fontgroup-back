import { FontGroup } from "../models/fontGroup.model.js";
import ApiError from "../utils/ApiError.js";

const createFontGroup = async (req, res, next) => {
  try {

    const { groupName, fontIds } = req.body;

    if (!fontIds || !Array.isArray(fontIds) || fontIds.length < 2) {
      throw new ApiError(400, "Select at least 2 fonts");
    }

    const group = await FontGroup.create({ groupName, fonts: fontIds });

    res.status(201).json({
      success: true,
      message: "Font group created successfully",
      data: group,
    });
  } catch (err) {
    console.error("Font group creation failed:", err);

    // If the error is an instance of ApiError, send custom error
    if (err instanceof ApiError) {
      return res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || "Something went wrong",
      });
    }

    // Otherwise, pass to global error handler
    next(err);
  }
};


const getFontGroup = async (req, res, next) => {
  try {
    const groups = await FontGroup.find().populate("fonts");
    res.json(groups);
  } catch (err) {
    next(err);
  }
};

const updateFontGroup = async (req, res, next) => {
  try {
    const { groupName, fontIds } = req.body;

    const updated = await FontGroup.findByIdAndUpdate(
      req.params.id,
      { groupName, fonts: fontIds },
      { new: true }
    ).populate("fonts");

    if (!updated) {
      throw new ApiError(404, "Font group not found");
    }

    res.json(updated);
  } catch (err) {
    next(err);
  }
};

const deleteFontGroup = async (req, res, next) => {
  try {
    const deleted = await FontGroup.findByIdAndDelete(req.params.id);

    if (!deleted) {
      throw new ApiError(404, "Font group not found");
    }

    res.json({ message: "Group deleted successfully" });
  } catch (err) {
    next(err);
  }
};

export const fontGroupController = {
  createFontGroup,
  getFontGroup,
  updateFontGroup,
  deleteFontGroup,
};
