import Admin from "../models/Admin.js";
import School from "../models/School.js";
import Teacher from "../models/Teacher.js";
import Student from "../models/Student.js";
import Class from "../models/Class.js";
import Period from "../models/Period.js";
import Session from "../models/Session.js";
import sendEmail from "../utilities/email.js";
import { validationResult } from "express-validator";

export const updateSchool = async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const school = School.findById(req.body._id);
        if (!school) {
            if (!req.body.name)
                return res.status(400).json({ success: false, error: "School name is required" });
            const newSchool = await School.create(req.body);
            return res.status(200).json({ success: true, school: newSchool });
        }
        school = req.body;
        await school.save();
        return res.status(200).json({ success: true, school: school });
    } catch (error) {
        console.log("update school error:", error.message);
        res.send({ success: false, error: error.message });
    }
};

export const updateTeacher = async(req, res) => {
    if (!req.body.name)
        return res.status(400).json({ success: false, error: "Teacher name is required" });
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        if (!req.body._id) {
            const newTeacher = await Teacher.create(req.body);
            return res.status(200).json({ success: true, teacher: newTeacher });
        } else {
            const teacher = await Teacher.findByIdAndUpdate(req.body._id, req.body, {
                new: true,
            });
            if (!teacher) return res.send({ success: false, errorId: 404 });
            return res.status(200).json({ success: true, teacher: teacher });
        }
    } catch (error) {
        console.log("update teacher error:", error.message);
        res.send({ success: false, error: error.message });
    }
};

export const updateStudent = async(req, res) => {
    if (!req.body.name)
        return res.status(400).json({ success: false, error: "Student name is required" });
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        if (req.body._id) {
            const student = await Student.findByIdAndUpdate(req.body._id, req.body, {
                new: true,
            });
            return res.status(200).json({ success: true, student: student });
        } else {
            const newStudent = await Student.create(req.body);
            return res.status(200).json({ success: true, student: newStudent });
        }
    } catch (error) {
        console.log("update student error:", error.message);
        res.send({ success: false, error: error.message });
    }
};

export const updateClass = async(req, res) => {
    if (!req.body.name)
        return res.status(400).json({ success: false, error: "Class name is required" });
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        if (req.body._id) {
            const schoolClass = Class.findByIdAndUpdate(req.body._id, req.body, {
                new: true,
            });
            return res.status(200).json({ success: true, schoolClass: schoolClass });
        } else {
            const newClass = await Class.create(req.body);
            return res.status(200).json({ success: true, schoolClass: newClass });
        }
    } catch (error) {
        console.log("update class error:", error.message);
        res.send({ success: false, error: error.message });
    }
};

export const updatePeriod = async(req, res) => {
    if (!req.body.name)
        return res.status(400).json({ success: false, error: "Period name is required" });
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        if (req.body._id) {
            const period = Period.findByIdAndUpdate(req.body._id, req.body, {
                new: true,
            });
            return res.status(200).json({ success: true, period: period });
        } else {
            const newPeriod = await Period.create(req.body);
            return res.status(200).json({ success: true, period: newPeriod });
        }
    } catch (error) {
        console.log("update period error:", error.message);
        res.send({ success: false, error: error.message });
    }
};

export const updateSession = async(req, res) => {
    if (!req.body.name)
        return res.status(400).json({ success: false, error: "Session name is required" });
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        if (req.body._id) {
            const session = Session.findByIdAndUpdate(req.body._id, req.body, {
                new: true,
            });
            return res.status(200).json({ success: true, session: session });
        } else {
            const newSession = await Session.create(req.body);
            return res.status(200).json({ success: true, session: newSession });
        }
    } catch (error) {
        console.log("update session error:", error.message);
        res.send({ success: false, error: error.message });
    }
};

export const deleteSchool = async(req, res) => {
    try {
        const school = await School.findByIdAndDelete(req.params.id);
        if (!school) return res.send({ success: false, errorId: 404 });
        return res.status(200).json({ success: true, school: school });
    } catch (error) {
        console.log("delete school error:", error.message);
        res.send({ success: false, error: error.message });
    }
}

export const deleteTeacher = async(req, res) => {
    try {
        const teacher = await Teacher.findByIdAndDelete(req.params.id);
        if (!teacher) return res.send({ success: false, errorId: 404 });
        return res.status(200).json({ success: true, teacher: teacher });
    } catch (error) {
        console.log("delete teacher error:", error.message);
        res.send({ success: false, error: error.message });
    }
}

export const deleteStudent = async(req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);
        if (!student) return res.send({ success: false, errorId: 404 });
        return res.status(200).json({ success: true, student: student });
    } catch (error) {
        console.log("delete student error:", error.message);
        res.send({ success: false, error: error.message });
    }
}

export const deleteClass = async(req, res) => {
    try {
        const schoolClass = await Class.findByIdAndDelete(req.params.id);
        if (!schoolClass) return res.send({ success: false, errorId: 404 });
        return res.status(200).json({ success: true, schoolClass: schoolClass });
    } catch (error) {
        console.log("delete class error:", error.message);
        res.send({ success: false, error: error.message });
    }
}

export const deletePeriod = async(req, res) => {
    try {
        const period = await Period.findByIdAndDelete(req.params.id);
        if (!period) return res.send({ success: false, errorId: 404 });
        return res.status(200).json({ success: true, period: period });
    } catch (error) {
        console.log("delete period error:", error.message);
        res.send({ success: false, error: error.message });
    }
}

export const deleteSession = async(req, res) => {
    try {
        const session = await Session.findByIdAndDelete(req.params.id);
        if (!session) return res.send({ success: false, errorId: 404 });
        return res.status(200).json({ success: true, session: session });
    } catch (error) {
        console.log("delete session error:", error.message);
        res.send({ success: false, error: error.message });
    }
}

export const getSchool = async(req, res) => {
    try {
        const school = await School.findById(req.params.id);
        if (!school) return res.send({ success: false, errorId: 404 });
        return res.status(200).json({ success: true, school: school });
    } catch (error) {
        console.log("get school error:", error.message);
        res.send({ success: false, error: error.message });
    }
}

export const getTeacher = async(req, res) => {
    try {
        const teacher = await Teacher.findById(req.params.id);
        if (!teacher) return res.send({ success: false, errorId: 404 });
        return res.status(200).json({ success: true, teacher: teacher });
    } catch (error) {
        console.log("get teacher error:", error.message);
        res.send({ success: false, error: error.message });
    }
}

export const getStudent = async(req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) return res.send({ success: false, errorId: 404 });
        return res.status(200).json({ success: true, student: student });
    } catch (error) {
        console.log("get student error:", error.message);
        res.send({ success: false, error: error.message });
    }
}

export const getClass = async(req, res) => {
    try {
        const schoolClass = await Class.findById(req.params.id);
        if (!schoolClass) return res.send({ success: false, errorId: 404 });
        return res.status(200).json({ success: true, schoolClass: schoolClass });
    } catch (error) {
        console.log("get class error:", error.message);
        res.send({ success: false, error: error.message });
    }
}

export const getPeriod = async(req, res) => {
    try {
        const period = await Period.findById(req.params.id);
        if (!period) return res.send({ success: false, errorId: 404 });
        return res.status(200).json({ success: true, period: period });
    } catch (error) {
        console.log("get period error:", error.message);
        res.send({ success: false, error: error.message });
    }
}

export const getSession = async(req, res) => {
    try {
        const session = await Session.findById(req.params.id);
        if (!session) return res.send({ success: false, errorId: 404 });
        return res.status(200).json({ success: true, session: session });
    } catch (error) {
        console.log("get session error:", error.message);
        res.send({ success: false, error: error.message });
    }
}


export const getTeachers = async(req, res) => {
    try {
        const teachers = await Teacher.find();
        return res.status(200).json({ success: true, teachers: teachers });
    } catch (error) {
        console.log("get teachers error:", error.message);
        res.send({ success: false, error: error.message });
    }
}

export const getStudents = async(req, res) => {
    try {
        const students = await Student.find();
        return res.status(200).json({ success: true, students: students });
    } catch (error) {
        console.log("get students error:", error.message);
        res.send({ success: false, error: error.message });
    }
}

export const getClasses = async(req, res) => {
    try {
        const schoolClasses = await Class.find();
        return res.status(200).json({ success: true, schoolClasses: schoolClasses });
    } catch (error) {
        console.log("get classes error:", error.message);
        res.send({ success: false, error: error.message });
    }
}

export const getPeriods = async(req, res) => {
    try {
        const periods = await Period.find();
        return res.status(200).json({ success: true, periods: periods });
    } catch (error) {
        console.log("get periods error:", error.message);
        res.send({ success: false, error: error.message });
    }
}

export const getSessions = async(req, res) => {
    try {
        const sessions = await Session.find();
        return res.status(200).json({ success: true, sessions: sessions });
    } catch (error) {
        console.log("get sessions error:", error.message);
        res.send({ success: false, error: error.message });
    }
}

export const getTeacherSessions = async(req, res) => {
    try {
        const teacher = await Teacher.findById(req.params.id);
        if (!teacher) return res.send({ success: false, errorId: 404 });
        const sessions = await Session.find({ teacher: teacher._id });
        return res.status(200).json({ success: true, sessions: sessions });
    } catch (error) {
        console.log("get teacher sessions error:", error.message);
        res.send({ success: false, error: error.message });
    }
}