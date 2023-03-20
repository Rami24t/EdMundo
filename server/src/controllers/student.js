import mongoose from "mongoose";
import Student from "../models/Student.js";
import Lesson from "../models/Lesson.js";
import Class from "../models/Class.js";
import { validationResult } from "express-validator";
import Session from "../models/Session.js";

export const updateStudent = async (req, res) => {
	if (req.user.role !== "student")
		return res.status(401).json({ success: false, error: "Unauthorized" });
	if (!req.user._id)
		return res.status(400).json({ success: false, error: "ID is required" });
	try {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		// if (req.body._id)
		const update = { phone: req.body.phone, address: req.body.address };
		console.log("updateStudent update: ", update);
		const student = await Student.findByIdAndUpdate(req.user._id, update, {
			new: true,
		});
		console.log("updateStudent student: ", student);
		if (!student) return res.send({ success: false, errorId: 404 });
		res.send({ success: true, student });
		// else {
		//   const newStudent = new Student.create(req.body);
		//   if (!newStudent) return res.send({ success: false, errorId: 500 });
		//   res.send({ success: true, newStudent });
		// }
	} catch (error) {
		console.log("updateStudent error:", error.message);
		res.send({ success: false, error: error.message });
	}
};

export const getLessons = async (req, res) => {
	if (req.user.role !== "student")
		return res.status(401).json({ success: false, error: "Unauthorized" });
	try {
		const currentClass = req.body.currentClass;
		const lessons = await Lesson.find({ class: currentClass })
			.populate("lesson", "name")
			.select("-__v");
		if (!lessons) return res.send({ success: false, errorId: 404 });
		res.send({ success: true, lessons });
	} catch (error) {
		console.log("getLessons error:", error.message);
		res.send({ success: false, error: error.message });
	}
};

export const getSessions = async (req, res) => {
	if (req.user.role !== "student")
		return res.status(401).json({ error: "Unauthorized" });
	try {
		const sessions = await Session.aggregate([
			{
				$match: { class: mongoose.Types.ObjectId(req.user.currentClass) },
			},
			{
				$lookup: {
					from: "teachers",
					localField: "teacher",
					foreignField: "_id",
					as: "teacherEntity",
				},
			},
			{
				$unwind: "$teacherEntity",
			},
			{
				$project: {
					_id: 1,
					subjectName: 1,
					slot: 1,
					weekDay: 1,
					teacher: {
						name: "$teacherEntity.name",
						_id: "$teacherEntity._id",
					},
				},
			},
		]);
		res.send(sessions ?? []);
	} catch (error) {
		console.log("getSessions error:", error.message);
		res.status(500).send({ error: error.message });
	}
};
