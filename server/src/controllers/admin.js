import Admin from "../models/Admin.js";
import School from "../models/School.js";
import Teacher from "../models/Teacher.js";
import Student from "../models/Student.js";
import Class from "../models/Class.js";
import Session from "../models/Session.js";
import sendEmail from "../utilities/email.js";
import { validationResult } from "express-validator";

export const updateSchool = async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        let school = await School.findByIdAndUpdate(req.body._id, req.body, {
            new: true,
        });
        if (!school) {
            if (!req.body.name)
                return res.status(400).json({ success: false, error: "School name is required" });
            const newSchool = await School.create(req.body);
            return res.status(200).json({ success: true, school: newSchool });
        }
        return res.status(200).json({ success: true, school: school });
  } catch (error) {
    console.log("update school error:", error.message);
    res.send({ success: false, error: error.message });
  }
};

export const updateTeacher = async (req, res) => {
  if (!req.body.name)
    return res
      .status(400)
      .json({ success: false, error: "Teacher name is required" });
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

export const updateStudent = async (req, res) => {
  if (!req.body.name)
    return res
      .status(400)
      .json({ success: false, error: "Student name is required" });
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

export const updateClass = async (req, res) => {
  if (!req.body.name)
    return res
      .status(400)
      .json({ success: false, error: "Class name is required" });
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    if (req.body._id) {
      const schoolClass = await Class.findByIdAndUpdate(req.body._id, req.body, {
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

// export const updateClassStudentsCurrentClass = async (req, res) => {
//   if (!req.body._id)
//   return res
//     .status(400)
//     .json({ success: false, error: "Class ID is required" });
// const errors = validationResult(req);
// if (!errors.isEmpty()) {
//   return res.status(400).json({ errors: errors.array() });
// }
// try {
//   if (req.body._id) {
//     const classStudents = await Class.findById(req.body._id).populate("students");
//     if(!classStudents) return res.send({ success: false, errorId: 404, error: "Class not found" });
//     const students = classStudents.students;
//     if(!students) return res.send({ success: false, errorId: 404 });
//     students.forEach(async (student) => {
//       student.currentClass = req.body._id;
//       await student.save();
//     });
//     return res.status(200).json({ success: true, students: students });
//   } else {
//     res.send({ success: false, error: "Class not found" });
//   }
// } catch (error) {
//   console.log("update class error:", error.message);
//   res.send({ success: false, error: error.message });
// }
// };

export const updateClassStudentsCurrentClass = async (req, res) => {
  try {
    const { _id } = req.body;
    if (!_id) {
      throw new Error("Class ID is required");
    }
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const classStudents = await Class.findByIdOrFail(_id).populate("students");
    const students = classStudents.students;
    const updates = students.map(async (student) => {
      student.currentClass = _id;
      await student.save();
      return student;
    });
    const updatedStudents = await Promise.all(updates);
    return res.status(200).json({ success: true, students: updatedStudents });
  } catch (error) {
    console.log("update class error:", error.message);
    if (error instanceof mongoose.Error.CastError) {
      return res.sendStatus(404);
    }
    res.status(400).send({ success: false, error: error.message });
  }
};


export const updateSession = async (req, res) => {
  if (!req.body.name)
    return res
      .status(400)
      .json({ success: false, error: "Session name is required" });
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    if (req.body._id) {
      const session = await Session.findByIdAndUpdate(req.body._id, req.body, {
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

// export const updateClassSessionsClassRef = async (req, res) => {
//   if (!req.body._id)
//   return res
//     .status(400)
//     .json({ success: false, error: "Class ID is required" });
// const errors = validationResult(req);
// if (!errors.isEmpty()) {
//   return res.status(400).json({ errors: errors.array() });
// }
// try {
//   if (req.body._id) {
//     const classSchedule = await Class.findById(req.body._id).populate({path: "schedule.sessions"}).select("schedule.sessions");
//     if(!classSchedule) return res.send({ success: false, errorId: 404, error: "Class schedule not found" });
//     console.log("classSchedule:", classSchedule);

  
//     if(!sessions) return res.send({ success: false, errorId: 404 });
//     sessions.forEach(async (session) => {
//       session.currentClass = req.body._id;
//       await session.save();
//     });
//     return res.status(200).json({ success: true, sessions: sessions });
//   } else {
//     res.send({ success: false, error: "Class not found" });
//   }
// } catch (error) {
//   console.log("updateClassSessionsClassRef error:", error.message);
//   res.send({ success: false, error: error.message });
// }
// };

export const updateClassSessionsClassRef = async (req, res) => {
  if (!req.body._id)
    return res
      .status(400)
      .json({ success: false, error: "Class ID is required" });
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const classSchedule = await Class.findById(req.body._id).populate({
      path: "schedule.sessions",
    });
    if (!classSchedule)
      return res.send({
        success: false,
        errorId: 404,
        error: "Class schedule not found",
      });
    console.log("classSchedule:", classSchedule);

    const sessions = classSchedule.schedule.reduce(
      (prev, curr) => [...prev, ...curr.sessions],
      []
    );
    if (!sessions.length)
      return res.send({ success: false, errorId: 404 });

    for (const session of sessions) {
      session.class = req.body._id;
      await session.save();
    }
    return res.status(200).json({ success: true, sessions: sessions });
  } catch (error) {
    console.log("updateClassSessionsClassRef error:", error.message);
    res.send({ success: false, error: error.message });
  }
};

export const deleteSchool = async (req, res) => {
  try {
    const school = await School.findByIdAndDelete(req.params.id);
    if (!school) return res.send({ success: false, errorId: 404 });
    return res.status(200).json({ success: true, school: school });
  } catch (error) {
    console.log("delete school error:", error.message);
    res.send({ success: false, error: error.message });
  }
};

export const deleteTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.findByIdAndDelete(req.params.id);
    if (!teacher) return res.send({ success: false, errorId: 404 });
    return res.status(200).json({ success: true, teacher: teacher });
  } catch (error) {
    console.log("delete teacher error:", error.message);
    res.send({ success: false, error: error.message });
  }
};

export const deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) return res.send({ success: false, errorId: 404 });
    return res.status(200).json({ success: true, student: student });
  } catch (error) {
    console.log("delete student error:", error.message);
    res.send({ success: false, error: error.message });
  }
};

export const deleteClass = async (req, res) => {
  try {
    const schoolClass = await Class.findByIdAndDelete(req.params.id);
    if (!schoolClass) return res.send({ success: false, errorId: 404 });
    return res.status(200).json({ success: true, schoolClass: schoolClass });
  } catch (error) {
    console.log("delete class error:", error.message);
    res.send({ success: false, error: error.message });
  }
};

export const deleteSession = async (req, res) => {
  try {
    const session = await Session.findByIdAndDelete(req.params.id);
    if (!session) return res.send({ success: false, errorId: 404 });
    return res.status(200).json({ success: true, session: session });
  } catch (error) {
    console.log("delete session error:", error.message);
    res.send({ success: false, error: error.message });
  }
};

export const getSchool = async (req, res) => {
  try {
    const school = await School.findById(req.params.id);
    if (!school) return res.send({ success: false, errorId: 404 });
    return res.status(200).json({ success: true, school: school });
  } catch (error) {
    console.log("get school error:", error.message);
    res.send({ success: false, error: error.message });
  }
};

export const getSchools = async (req, res) => {
  try {
    const schools = await School.find();
    if (!schools) return res.send({ success: false, errorId: 404 });
    return res.status(200).json({ success: true, schools: schools });
  } catch (error) {
    console.log("get schools error:", error.message);
    res.send({ success: false, error: error.message });
  }
};

export const getTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.id);
    if (!teacher) return res.send({ success: false, errorId: 404 });
    return res.status(200).json({ success: true, teacher: teacher });
  } catch (error) {
    console.log("get teacher error:", error.message);
    res.send({ success: false, error: error.message });
  }
};

export const getStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.send({ success: false, errorId: 404 });
    return res.status(200).json({ success: true, student: student });
  } catch (error) {
    console.log("get student error:", error.message);
    res.send({ success: false, error: error.message });
  }
};

export const getClass = async (req, res) => {
  try {
    const schoolClass = await Class.findById(req.params.id);
    if (!schoolClass) return res.send({ success: false, errorId: 404 });
    return res.status(200).json({ success: true, schoolClass: schoolClass });
  } catch (error) {
    console.log("get class error:", error.message);
    res.send({ success: false, error: error.message });
  }
};

export const getSession = async (req, res) => {
  try {
    const session = await Session.findById(req.params.id);
    if (!session) return res.send({ success: false, errorId: 404 });
    return res.status(200).json({ success: true, session: session });
  } catch (error) {
    console.log("get session error:", error.message);
    res.send({ success: false, error: error.message });
  }
};

export const getTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find();
    return res.status(200).json({ success: true, teachers: teachers });
  } catch (error) {
    console.log("get teachers error:", error.message);
    res.send({ success: false, error: error.message });
  }
};

export const getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    return res.status(200).json({ success: true, students: students });
  } catch (error) {
    console.log("get students error:", error.message);
    res.send({ success: false, error: error.message });
  }
};

export const getClasses = async (req, res) => {
  try {
    const schoolClasses = await Class.find().populate({
      path: 'schedule.sessions',
      populate: {
        path: 'teacher',
        model: 'Teacher'
      }
    });
    return res
      .status(200)
      .json({ success: true, schoolClasses: schoolClasses });
  } catch (error) {
    console.log("get classes error:", error.message);
    res.send({ success: false, error: error.message });
  }
};

export const getSessions = async (req, res) => {
  try {
    const sessions = await Session.find();
    return res.status(200).json({ success: true, sessions: sessions });
  } catch (error) {
    console.log("get sessions error:", error.message);
    res.send({ success: false, error: error.message });
  }
};

export const getTeacherSessions = async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.id);
    if (!teacher) return res.send({ success: false, errorId: 404 });
    const sessions = await Session.find({ teacher: teacher._id });
    return res.status(200).json({ success: true, sessions: sessions });
  } catch (error) {
    console.log("get teacher sessions error:", error.message);
    res.send({ success: false, error: error.message });
  }
};
