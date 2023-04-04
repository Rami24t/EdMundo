import React from "react";
import ScrollToTop from "react-scroll-up";
import { BsArrowUpCircle } from "react-icons/bs";
import StudentLessonCard from "../components/StudentLessonCard";
import { 
  // MDBBtn, MDBCol, 
  MDBContainer, MDBRow } from "mdb-react-ui-kit";

const StudentLessons = () => {
  return (
    <div className="student-lessons-page">
      <MDBContainer className="teacher-lessons-container">
        <MDBRow className="student-lessons-header">
          <h1 className="student-lessons-title"> My Lessons</h1>
        </MDBRow>

        <StudentLessonCard />

        <ScrollToTop showUnder={160}>
          <span>
            <BsArrowUpCircle
              style={{
                width: "2.5rem",
                height: "2.5rem",
              }}
            />
          </span>
        </ScrollToTop>
      </MDBContainer>
    </div>
  );
};

export default StudentLessons;
