import express from "express";
import { fontGroupController } from "../controllers/fontGroup.controller.js";


const router = express.Router();

router.get('/', fontGroupController.getFontGroup);
router.post('/create', fontGroupController.createFontGroup);
router.put('/:id', fontGroupController.updateFontGroup);
router.delete('/:id', fontGroupController.deleteFontGroup);

export const fontGroupRouter = router;