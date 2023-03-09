import express from "express";
import {
  getSchools,
  updateSchool,
  updateTeacher,
  updateStudent,
  updateClass,
  updateSession,
  deleteSchool,
  deleteTeacher,
  deleteStudent,
  deleteClass,
  deleteSession,
  getSchool,
  getTeacher,
  getStudent,
  getClass,
  getSession,
  getTeachers,
  getStudents,
  getClasses,
  getSessions,
  updateClassStudentsCurrentClass,
  updateClassSessionsClassRef
} from "../controllers/admin.js";
import auth from "../middleware/auth.js";
import multerMiddleware from "../config/multer-cloudinary.js";
const router = express.Router();
import { check } from "express-validator";

router.put(
  "/class/current",
  // auth,
  updateClassStudentsCurrentClass
)

router.put(
  "/class/passclassreftosessions",
  // auth,
  updateClassSessionsClassRef
)

router.put(
  "/school",
  // auth,
  multerMiddleware.single("image"),
  updateSchool
);
router.put(
  "/teacher",
  // auth,
  multerMiddleware.single("image"),
  updateTeacher
);
router.put(
  "/student",
  // auth,
  multerMiddleware.single("image"),
  updateStudent
);
router.put(
  "/class",
  // auth,
  multerMiddleware.single("image"),
  updateClass
);

router.put(
  "/session",
  // auth,
  multerMiddleware.single("image"),
  updateSession
);

router.delete(
  "/school",
  // auth,
  deleteSchool
);
router.delete(
  "/teacher",
  // auth,
  deleteTeacher
);
router.delete(
  "/student",
  // auth,
  deleteStudent
);
router.delete(
  "/class",
  // auth,
  deleteClass
);
router.delete(
  "/session",
  // auth,
  deleteSession
);

router.get(
  "/school/:id",
  // auth,
  getSchool
);
router.get(
  "/teacher/:id",
  // auth,
  getTeacher
);
router.get(
  "/student/:id",
  // auth,
  getStudent
);
router.get(
  "/class/:id",
  // auth,
  getClass
);
router.get(
  "/session/:id",
  // auth,
  getSession
);

router.get(
  "/teachers",
  // auth,
  getTeachers
);
router.get(
  "/students",
  // auth,
  getStudents
);
router.get(
  "/classes",
  // auth,
  getClasses
);
router.get(
  "/sessions",
  // auth,
  getSessions
);

router.get("/schools", getSchools);

export default router;
