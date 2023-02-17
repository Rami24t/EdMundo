import Student from "../models/Student.js";
import Lesson from "../models/Lesson.js";
import Class from "../models/Class.js";
import { validationResult } from "express-validator";


export const updateStudent = async(req, res) => {
    if (req.user.role !== "teacher") return res.status(401).json({ success: false, error: "Unauthorized" });
    if (!req.body.topic) return res.status(400).json({ success: false, error: "Topic is required" });
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        if (req.body._id) {
            const lesson = Lesson.findByIdAndUpdate(req.body._id, req.body, {
                new: true,
            });
            if (!lesson) return res.send({ success: false, errorId: 404 });
            res.send({ success: true, lesson });
        } else {
            const newLesson = new Lesson.create(req.body);
            if (!newLesson) return res.send({ success: false, errorId: 404 });
            res.send({ success: true, newLesson });
        }
    } catch (error) {
        console.log("updateLesson error:", error.message);
        res.send({ success: false, error: error.message });
    }
};

export const getLessons = async(req, res) => {
    if (req.user.role !== "student") return res.status(401).json({ success: false, error: "Unauthorized" });
    try {
        const currentClass = req.body.currentClass;
        const lessons = await Lesson.find({ class: currentClass }).populate("lesson", "name").select("-__v");
        if (!lessons) return res.send({ success: false, errorId: 404 });
        res.send({ success: true, lessons });
    } catch (error) {
        console.log("getLessons error:", error.message);
        res.send({ success: false, error: error.message });
    }
};

export const getSessions = async(req, res) => {
    if (req.user.role !== "student") return res.status(401).json({ success: false, error: "Unauthorized" });
    try {
        const currentClass = req.body.currentClass;
        const sessions = await Class.findById(currentClass).populate("sessions", "name").select("-__v");
        if (!sessions) return res.send({ success: false, errorId: 404 });
        res.send({ success: true, sessions });
    } catch (error) {
        console.log("getSessions error:", error.message);
        res.send({ success: false, error: error.message });
    }
}