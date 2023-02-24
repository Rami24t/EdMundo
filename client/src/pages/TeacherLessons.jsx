import React from "react";
import LessonCard from "../components/LessonCard";
import Footer from "../components/Footer";
import { MDBBtn } from "mdb-react-ui-kit";

const TeacherLessons = () => {
  return (
    <div>
      <div className="d-flex flex-row justify-content-between my-3">
        <h2 style={{ margin: "1rem" }}>My Lessons</h2>
        {/* <button style={{ margin: "1rem" }}>Create a new lesson</button> */}
        <MDBBtn outline className="mx-2" color="success">
          Create new lesson
        </MDBBtn>
      </div>
      <LessonCard />
      <Footer />
    </div>
  );
};

export default TeacherLessons;
