import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.scss";
import "./reset.scss";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import TeacherProfile from "./pages/TeacherProfile.jsx";
import TeacherLessons from "./pages/TeacherLessons.jsx";
import StudentProfile from "./pages/StudentProfile";
import StudentLessons from "./pages/StudentLessons";
import StudentSchedulePage from "./pages/StudentSchedulePage";
import ContextProvider from "./components/Context";
import App from "./App";
import { Navigate } from "react-router-dom";
import MySchool from "./pages/MySchool";

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
          <Route path="/teacher/profile" element={<TeacherProfile />} />
          <Route path="/teacher/lessons" element={<TeacherLessons />} />
          <Route
            path="/student"
            element=<Navigate to="/student/profile" replace={true} />
          />
          <Route path="/student/profile" element={<StudentProfile />} />
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
