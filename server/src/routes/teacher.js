import express from "express";
import {  updateTeacher, updateLesson, getLessons, getLesson , deleteLesson,
    getSessions, getSession, getClasses, getClass
} from "../controllers/teacher.js";
import auth from "../middleware/auth.js";
import multerMiddleware from "../config/multer-cloudinary.js";
const router = express.Router();
import { check } from "express-validator";

router.put(
    "/lesson",
    auth,
    // multerMiddleware.single("image"),
    updateLesson
);

router.delete(
    "/lesson",
    auth,
    deleteLesson
);

router.get(
    "/lessons",
    auth,
    getLessons
);

router.get(
    "/lesson",
    auth,
    getLesson
);

router.get(
    "/sessions",
    auth,
    getSessions
);

router.get(
    "/session",
    auth,
    getSession
);

router.get(
    "/classes",
    auth,
    getClasses
);

router.get(
    "/class",
    auth,
    getClass
);

router.put(
    "/teacher",
    auth,
    multerMiddleware.single("image"),
    updateTeacher
);

export default router;