import express from "express";
import dotenv from "dotenv";
import userRoutes from "./src/routes/user.js";
import adminRoutes from "./src/routes/admin.js";
import teacherRoutes from "./src/routes/teacher.js";
import studentRoutes from "./src/routes/student.js";
import dbConnect from "./src/config/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { body } from "express-validator";

dotenv.config();
const app = express();
dbConnect();

app.use("/*", body("*").trim().escape());

app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? "https://ed-mundo.vercel.app"
        : "http://localhost:3000",
    credentials: true,
    preflightContinue: true,
  }),
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/users", userRoutes);
// app.use('/api/admin', adminRoutes)
app.use("/api/teacher", teacherRoutes);
app.use("/api/student", studentRoutes);

const port = process.env.PORT || 5001;
app.listen(port, () => console.log("Server is up and running at port: ", port));

// script to add school ref to all teachers and students inside the school
// import dotenv from "dotenv";
// import dbConnect from "./src/config/db.js";
// import School from "./src/models/School.js";
// import Teacher from "./src/models/Teacher.js";
// import Student from "./src/models/Student.js";
// import Admin from "./src/models/Admin.js";

// dotenv.config();
// dbConnect();

// scripts:
// const addSchoolRefToUsers = async () => {
//    try {
//      const schools = await School.find().populate("admins teachers students");
//      for (let school of schools) {
//         for (let teacher of school.teachers) {
//           teacher.school = school._id;
//           await teacher.save();
//         }
//         for (let student of school.students) {
//           student.school = school._id;
//           await student.save();
//         }
//         for (let admin of school.admins) {
//           admin.school = school._id;
//           await admin.save();
//         }
//       }
//       console.log("done");
//     } catch (error) {
//       console.log("error:", error.message);
//     }
//   };
