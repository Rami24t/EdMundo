import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import TeacherProfile from "./pages/TeacherProfile.jsx";
import TeacherLessons from "./pages/TeacherLessons.jsx";
import StudentProfile from "./pages/StudentProfile";
import StudentLessons from "./pages/StudentLessons";
import StudentSchedule from "./pages/StudentSchedule";
import ContextProvider from "./components/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ContextProvider>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/teacher/profile" element={<TeacherProfile />} />
          <Route path="/teacher/lessons" element={<TeacherLessons />} />
          <Route path="/student/profile" element={<StudentProfile />} />
          <Route path="/student/lessons" element={<StudentLessons />} />
          <Route path="/student/schedule" element={<StudentSchedule />} />
        </Route>
        <Route path="/login" element={<Login />} />

        <Route path="*" element={<h1>404: Not Found</h1>} />
      </Routes>
    </ContextProvider>
  </BrowserRouter>
);
