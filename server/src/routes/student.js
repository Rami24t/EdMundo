import express from "express";
import auth from "../middleware/auth.js";
import multerMiddleware from "../config/multer-cloudinary.js";
const router = express.Router();
import { check } from "express-validator";
import {
    getLessons,
    getSessions,
    updateStudent,
} from "../controllers/student.js";

router.put(
    "/student",
    auth,
    multerMiddleware.single("image"),
    updateStudent
);

router.get(
    "/lessons",
    auth,
    getLessons
);

router.get(
    "/sessions",
    auth,
    getSessions
);

export default router;

