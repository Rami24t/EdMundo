import React from "react";
import Navbar from "../components/Navbar";
import LessonCard from "../components/LessonCard";
import Footer from "../components/Footer";

const TeacherLessons = () => {
  return (
    <div>
      <Navbar />
      <div className="d-flex flex-row justify-content-between my-3">
        <h2>My Lessons</h2>
        <button>Create a new lesson</button>
      </div>
      <LessonCard />
      <Footer />
    </div>
  );
};

export default TeacherLessons;
