import { FontGroup } from "../models/fontGroup.model.js";
import ApiError from "../utils/ApiError.js";

const createFontGroup = async (req, res, next) => {
  try {
    const { groupName, fontIds } = req.body;

    if (!fontIds || fontIds.length < 2) {
      throw new ApiError(400, "Select at least 2 fonts");
    }

    const group = await FontGroup.create({ groupName, fonts: fontIds });
    res.json(group);
  } catch (err) {
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
