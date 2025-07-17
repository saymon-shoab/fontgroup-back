import mongoose, { model } from "mongoose";



const fontSchema = new mongoose.Schema({
    name: String,
    url: String
});

export const Font = model('Font', fontSchema)