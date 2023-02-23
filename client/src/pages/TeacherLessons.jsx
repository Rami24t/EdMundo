import React from "react";
import Navbar from "../components/Navbar";
import LessonCard from "../components/LessonCard";
import Footer from "../components/Footer";

const TeacherLessons = () => {
  return (
    <div>
      <div className="d-flex flex-row justify-content-between my-3">
        <h2 style={{ margin: "1rem" }}>My Lessons</h2>
        <button style={{ margin: "1rem" }}>Create a new lesson</button>
      </div>
      <LessonCard />
      <Footer />
    </div>
  );
};

export default TeacherLessons;
