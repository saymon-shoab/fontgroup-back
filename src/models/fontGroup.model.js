import mongoose, { model } from "mongoose";



const fontGroupSchema = new mongoose.Schema({
    groupName: String,
    fonts: [{
        type: mongoose.Schema.Types.ObjectId, ref: "Font"
    }]
})

export const FontGroup = model("FontGroup", fontGroupSchema)