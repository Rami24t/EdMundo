import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.scss";
import Login from "./pages/login/Login.jsx";
import Home from "./pages/home/Home.jsx";
import Profile from "./pages/profile/Profile.jsx";
import MySchool from "./pages/school/MySchool.jsx";
import TeacherLessons from "./pages/lessons/TeacherLessons.jsx";
import StudentLessons from "./pages/lessons/StudentLessons.jsx";
import StudentSchedulePage from "./pages/schedule/StudentSchedulePage.jsx";
import ContextProvider from "./components/Context";
import App from "./App";
import { Navigate } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ContextProvider>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Home />} />
          <Route
            path="/teacher"
            element=<Navigate to="/teacher/profile" replace={true} />
          />
          <Route path="/teacher/profile" element={<Profile />} />
          <Route path="/teacher/lessons" element={<TeacherLessons />} />
          <Route
            path="/student"
            element=<Navigate to="/student/profile" replace={true} />
          />
          <Route path="/student/profile" element={<Profile />} />
          <Route path="/student/school" element={<MySchool />} />
          <Route path="/teacher/school" element={<MySchool />} />
          <Route path="/student/lessons" element={<StudentLessons />} />
          <Route path="/student/schedule" element={<StudentSchedulePage />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="*" element={<h1>404: Not Found</h1>} />
      </Routes>
    </ContextProvider>
  </BrowserRouter>,
);
