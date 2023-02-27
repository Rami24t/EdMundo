import React, { useState, Component } from "react";
import LessonCard from "../components/LessonCard";
import Footer from "../components/Footer";
import { MDBBtn } from "mdb-react-ui-kit";
import CreateLessonModal from "../components/CreateLessonModal";
import BackToTop from "react-back-to-top";

const TeacherLessons = () => {
  const [showCreateLessonModal, setShowCreateLessonModal] = useState(false);

  const handleCreateLesson = () => {
    setShowCreateLessonModal(true);
  };

  return (
    <div>
      <div className="d-flex flex-row justify-content-between my-3">
        <h2 style={{ margin: "1rem" }}>My Lessons</h2>
        <MDBBtn
          outline
          className="mx-2"
          color="success"
          onClick={handleCreateLesson}
        >
          Create new lesson
        </MDBBtn>
        {showCreateLessonModal && <CreateLessonModal />}
      </div>
      <LessonCard />
      <BackToTop
        showOnScrollUp
        showAt={100}
        speed={1500}
        easing="easeInOutQuint"
      >
        <span>scroll up</span>
      </BackToTop>
      <Footer />
    </div>
  );
};

export default TeacherLessons;
