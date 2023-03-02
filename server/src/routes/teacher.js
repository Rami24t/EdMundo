import express from "express";
import { updateLesson, deleteLesson } from "../controllers/teacher.js";
import auth from "../middleware/auth.js";
import multerMiddleware from "../config/multer-cloudinary.js";
const router = express.Router();
import { check } from "express-validator";

router.put(
    "/lesson",
    // auth,
    // multerMiddleware.single("image"),
    updateLesson
);

router.delete(
    "/lesson",
    // auth,
    deleteLesson
);

export default router;

