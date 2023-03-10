import Teacher from "../models/Teacher.js";
import Student from "../models/Student.js";
import Admin from "../models/Admin.js";
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
    // sendEmail(token);
    res.send({ success: true });
  } catch (error) {
    console.log("registration error:", error.message);
    res.send({ success: false, error: error.message });
  }
};

export const login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    let user = await Teacher.findOne({
      // $or: [
      // { username: req.body.email },
      // {
      email: req.body.email,
      // },
      // ],
    }).select("-__v");
    if (!user)
      user = await Student.findOne({
        // $or: [
        // { username: req.body.email },
        // {
        email: req.body.email,
        // },
        // ],
      }).select("-__v");
    else if (!user) {
      user = await Admin.findOne({
        // $or: [
        // { username: req.body.email },
        // {
        email: req.body.email,
        //  }
        // ,
        // ],
      }).select("-__v");
    }
    console.log("logging in user:", user);
    if (!user) return res.send({ success: false, errorId: 404 });
    const passMatch = await bcrypt.compare(req.body.password, user.password);
    if (!passMatch) return res.send({ success: false, errorId: 401 });
    const { password, ...newUser } = user.toObject();

    const token = jwt.sign(newUser, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.cookie("OnlineSchoolUser", token, { sameSite: "none", secure: true });
    res.send({ success: true, user: newUser });
  } catch (error) {
    console.log("login error:", error.message);
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
    res.clearCookie("SocialAppMERNToken", { sameSite: "none", secure: true });
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
          populate: {
            path: "schedule.sessions",
            select: "-__v",
            populate: { path: "teacher", select: "-__v" },
          },
        });
    if (!user) return res.json({ success: false, errorId: 404 }).status(404);

    const school = user.school;
      delete user.school;
      console.log("getUserData user:", user.role);
if(user.role === 'student') 
{     const days = user.currentClass.schedule.map((day) => day.day);
      const slots = school.periods.map((period) => {
        return {
          from:
            (period.startTime / 60).toFixed(2).split(".")[0] +
            ":" +
            (period.startTime % 60 === 0 ? "00" : period.startTime % 60),
          to:
            ((period.startTime + period.duration) / 60).toFixed(2).split(".")[0] +
            ":" +
            ((period.startTime + period.duration) % 60 === 0
              ? "00"
              : (period.startTime + period.duration) % 60),
        };
      });
      const displaySchedule = { days, slots } || null;
      res.status(200).json({ success: true, user, school,  displaySchedule });
    }   
    else res.status(200).json({ success: true, user, school });
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
    req.body.likes = JSON.parse(req.body.likes);
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

// export const updateCover = async(req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//     }
//     try {
//         if (req.file) req.body.coverImage = req.file.path;
//         const user = await User.findByIdAndUpdate(req.user, req.body, {
//             new: true,
//         }).select("-password -__v");
//         if (!user) return res.send({ success: false, errorId: 404 });
//         res.json({ success: true, coverImage: user.coverImage }).status(200);
//     } catch (error) {
//         console.log("updateProfile error:", error.message);
//         res.send({ success: false, error: error.message });
//     }
// };
