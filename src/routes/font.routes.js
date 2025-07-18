import express from "express";
import { fontController } from "../controllers/font.controller.js";
import upload from "../utils/multer.js";

const router = express.Router();
router.post(
    "/upload", 
    upload.single("font"), 
    fontController.uploadFont
);
    
router.get("/", fontController.getFonts);

export const fontRouter = router;
