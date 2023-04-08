import Teacher from "../models/Teacher.js";
import Student from "../models/Student.js";
import Lesson from "../models/Lesson.js";
import Admin from "../models/Admin.js";
import Class from "../models/Class.js";
import School from "../models/School.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import sendEmail from "../utilities/email.js";
import { validationResult } from "express-validator";

const SALT_ROUNDS = 10;
export const register = async (req, res) => {
  try {
    console.log("register req.body: ", req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPass;
    let user;
    if (req.body.role === "teacher") {
      console.log("register teacher: ", req.body);
      user = await Teacher.create(req.body);
      console.log("register teacher: ", user);
    } else if (req.body.role === "student") {
      user = await Student.create(req.body);
      console.log("register student: ", user);
    } else if (req.body.role === "admin") {
      user = await Admin.create(req.body);
      console.log("register admin: ", user);
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.send({ success: true });
  } catch (error) {
    console.log("registration error:", error.message);
    res.send({ success: false, error: error.message });
  }
};

export const login = async (req, res) => {
  let response;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    let user = await Teacher.findOne({
      email: req.body.email,
    }).select("-__v");
    if (!user)
      user = await Student.findOne({
        email: req.body.email,
      }).select("-__v");
    else if (!user) {
      user = await Admin.findOne({
        email: req.body.email,
      }).select("-__v");
    }
    if (!user) return res.send({ success: false, errorId: 404 });
    const passMatch = await bcrypt.compare(req.body.password, user.password);
    if (!passMatch) return res.send({ success: false, errorId: 401 });

    console.log("logging in ", user.role);

    const { password, ...newUser } = user.toObject();
    const cookieData = newUser;
    delete cookieData.currentClass;
    const token = jwt.sign(cookieData, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.cookie("OnlineSchoolUser", token, {
      sameSite: "none",
      secure: true,
      path: "/",
      domain:
        process.env.NODE_ENV === "production"
          ? ".ed-mundo.vercel.app"
          : "localhost",
    });
    if(user.role === "student") {
      const school = await School.findById(user.school);
      const currentClass = await Class.findById(user.currentClass);
      const days = currentClass.schedule.map((day) => day.day);
      const slots = school.periods.map((period) => {
        return {
          from:
            (period.startTime / 60).toFixed(2).split(".")[0] +
            ":" +
            (period.startTime % 60 === 0 ? "00" : period.startTime % 60),
          to:
            ((period.startTime + period.duration) / 60)
              .toFixed(2)
              .split(".")[0] +
            ":" +
            ((period.startTime + period.duration) % 60 === 0
              ? "00"
              : (period.startTime + period.duration) % 60),
        };
      });
      const scheduleSettings = { days, slots } || null;
      res.status(200).json({ success: true, user: newUser, scheduleSettings });
    }
    else if (user.role) res.status(200).json({ success: true, user: newUser });
    else
      res.status(500).json({ success: false, error: "User role is missing" });
  } catch (error) {
    console.log("login error:", error);
    res.send({ success: false, error: error.message });
  }
};

export const emailConfirm = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const token = req.body.token;
    const decrypted = jwt.verify(token, process.env.JWT);
    console.log("emailConfirm ~ decrypted", decrypted);
    const user = await User.findByIdAndUpdate(
      { _id: decrypted.id },
      { verified: true },
      { new: true }
    );
    console.log("emailConfirm ~ user", user);
    res.send({ success: true });
  } catch (error) {
    console.log("emailConfirm error:", error.message);
    res.send({ success: false, error: error.message });
  }
};

export const forgotPass = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const user = await User.findOne({
      $or: [{ username: req.body.email }, { email: req.body.email }],
    });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    sendEmail(token, "forgotpass");
    res.send({ success: true });
  } catch (error) {
    console.log("forgotPass error:", error.message);
    res.send({ success: false, error: error.message });
  }
};

export const changePass = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const decrypted = jwt.verify(req.body.token, process.env.JWT_SECRET);
    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    await User.findByIdAndUpdate(
      decrypted.id,
      { password: hashedPass },
      { new: true }
    );
    res.send({ success: true });
  } catch (error) {
    console.log("changePass error:", error.message);
    res.send({ success: false, error: error.message });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("OnlineSchoolUser", { sameSite: "none", secure: true, path: "/", domain: process.env.NODE_ENV === "production" ? ".ed-mundo.vercel.app" : "localhost" });
    console.log("logged out");
    res.json({ success: true }).status(200);
  } catch (error) {
    console.log("logout error:", error.message);
    res.send({ success: false, error: error.message });
  }
};

export const getUserData = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    let user = await Admin.findById(req.user._id)
      .select("-password -__v")
      .populate({
        path: "school",
        populate: {
          path: "students teachers classes",
          select: "-password -__v",
        },
      });

    if (!user)
      user = await Teacher.findById(req.user._id)
        .select("-password -__v")
        .populate({
          path: "school",
          select: "-__v",
        });
    if (!user)
      user = await Student.findById(req.user._id)
        .select("-password -__v")
        .populate({ path: "school", select: "-__v" })
        .populate({
          path: "currentClass",
          select: "-__v",
          populate: [
            {
              path: "schedule.sessions",
              select: "-__v",
              populate: { path: "teacher", select: "-__v" },
            },
            {
              path: "lessons",
              select: "-__v",
              populate: [
                {
                  path: "session",
                  select: "-__v",
                  populate: { path: "teacher", select: "-password -_v" },
                },
                { path: "teacher", select: "name" },
                { path: "attendance", select: "name" },
              ],
            },
          ],
        });
    if (!user) return res.json({ success: false, errorId: 404 }).status(404);

    const { school, ...newUser } = user.toObject();

    console.log("getUserData newUser:", newUser.role);
    if (newUser.role === "student") {
      res
        .status(200)
        .json({ success: true, user: newUser, school });
    } else if (newUser.role === "teacher") {
      const lessons = await Lesson.find({ teacher: newUser._id })
        .populate({
          path: "session",
          select: "-__v",
          populate: { path: "class", select: "-__v" },
        })
        .populate({ path: "attendance", select: "name" });
      res.status(200).json({ success: true, user: newUser, school, lessons });
    } else if(newUser.role === "admin")
    res.status(200).json({ success: true, user: newUser, school });
  } catch (error) {
    console.log("getUser error:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
};

export const updateProfile = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    if (req.file) req.body.profileImage = req.file.path;
    // req.body.likes = JSON.parse(req.body.likes);
    let user = await Admin.findById(req.user);
    if (!user) user = await Teacher.findById(req.user);
    if (!user) user = await Student.findById(req.user);
    if (!user) return res.send({ success: false, errorId: 404 });
    user.set(req.body);
    await user.save();
    user = user.select("-password -__v");
    res.send({ success: true, user });
  } catch (error) {
    console.log("updateProfile error:", error.message);
    res.status(500).send({ success: false, error: error.message });
  }
};
