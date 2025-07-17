import { FontGroup } from "../models/fontGroup.model.js";



const createFontGroup = async(req,res) => {
    const { groupName, fontIds} = req.body;

    if (!fontIds || fontIds.length < 2) {
        return res.status(400).json({error: "Select al least 2 fonts"});
    }

    const groups = await FontGroup.create({ groupName, fonts: fontIds});
    res.json(groups)
}

const getFontGroup = async(req,res)=> {
  const groups = await FontGroup.find().populate("fonts");
  res.json(groups)
}

const updateFontGroup = async(req,res) => {
  const { groupName, fontIds } = req.body;
  const group = await FontGroup.findByIdAndUpdate(
    req.params.id,
    {groupName, fonts: fontIds},
    {new: true}
  ).populate('fonts')
}

const deleteFontGroup = async(req,res) => {
    await FontGroup.findByIdAndDelete(req.params.id);
    res.json({message: "Group deleted successfylly"})
}

export const fontGroupController = {
   createFontGroup,
   getFontGroup,
   updateFontGroup,
   deleteFontGroup
}