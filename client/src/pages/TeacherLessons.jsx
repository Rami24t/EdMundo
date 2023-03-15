import React, { useState } from "react";
import TeacherLessonCard from "../components/TeacherLessonCard";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import CreateLessonModal from "../components/CreateLessonModal";
import ScrollToTop from "react-scroll-up";
import { BsArrowUpCircle } from "react-icons/bs";
import "./teacherLessons.css";

const TeacherLessons = () => {
  const [optModal, setOptModal] = useState(false);
  const toggleShow = () => setOptModal(!optModal);

  const handleCreateLessonConfirm = () => {
    setOptModal(true);
    // save changes
  };

  return (
    <div className="teacher-lessons-page">
      <MDBContainer className="teacher-lessons-container">
        <MDBRow
          className="teacher-lessons-header"
          style={{ alignItems: "center" }}
        >
          <MDBCol md={6}>
            <h1 className="teacher-lessons-title"> My Lessons</h1>
          </MDBCol>
          <MDBCol md={6}>
            <MDBBtn className="create-new-lesson" onClick={toggleShow}>
              Create new lesson
            </MDBBtn>
          </MDBCol>
        </MDBRow>

        <CreateLessonModal
          optModal={optModal}
          setOptModal={setOptModal}
          toggleShow={toggleShow}
          handleCreateLessonConfirm={handleCreateLessonConfirm}
        />

        <TeacherLessonCard />

        <ScrollToTop showUnder={160}>
          <span>
            <BsArrowUpCircle
              style={{
                width: "2.5rem",
                height: "2.5rem",
                color: "#a876f5",
              }}
            />
          </span>
        </ScrollToTop>
      </MDBContainer>
    </div>
  );
};

export default TeacherLessons;
