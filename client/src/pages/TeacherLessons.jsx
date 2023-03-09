import React, { useState } from "react";
import TeacherLessonCard from "../components/TeacherLessonCard";
import { MDBBtn } from "mdb-react-ui-kit";
import CreateLessonModal from "../components/CreateLessonModal";
import ScrollToTop from "react-scroll-up";
import { BsArrowUpCircle } from "react-icons/bs";

const TeacherLessons = () => {
  const [optModal, setOptModal] = useState(false);
  const toggleShow = () => setOptModal(!optModal);

  const handleCreateLessonConfirm = () => {
    setOptModal(true);
    // save changes
  };

  return (
    <div>
      <div className="d-flex flex-row justify-content-between my-3">
        <h2 style={{ margin: "1rem" }}>My Lessons</h2>
        <MDBBtn outline className="mx-2" color="success" onClick={toggleShow}>
          Create new lesson
        </MDBBtn>
      </div>

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
            style={{ width: "2.5rem", height: "2.5rem", color: "green" }}
          />
        </span>
      </ScrollToTop>
    </div>
  );
};

export default TeacherLessons;
