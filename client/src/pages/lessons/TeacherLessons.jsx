import React, { useState, useContext } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import CreateLessonModal from "../../components/lessons/CreateLessonModal";
import ScrollToTop from "react-scroll-up";
import { BsArrowUpCircle } from "react-icons/bs";
import "./lessonsPages.css";
import LessonCard from "../../components/lessons/LessonCard";
import useUser from "../../hooks/useUser";
import { Context } from "../../components/Context";

const TeacherLessons = () => {
  const { user } = useContext(Context);
  let { data } = useUser(user?._id);
  data = data?.data;
  // console.log("data", data);
  let lessons = data?.lessons || data?.user?.currentClass?.lessons;
  // lessons &&
  //   lessons.map((lesson, idx) =>
  //     // console.log("lesson " + (idx + 1) + ": ", lesson),
  //   );


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
            <MDBBtn className="fs-2 fw-bold py-0 rounded-pill" title="Add New Lesson" onClick={toggleShow}>
              +
            </MDBBtn>
          </MDBCol>
        </MDBRow>

        <CreateLessonModal
          optModal={optModal}
          setOptModal={setOptModal}
          toggleShow={toggleShow}
          handleCreateLessonConfirm={handleCreateLessonConfirm}
        />

<MDBRow className='row-cols-1 row-cols-md-3 g-4'>
  {lessons &&
    lessons.map((lesson, idx) => <>
        <LessonCard key={lesson._id} lesson={lesson} />
      </>)}
</MDBRow>

        <ScrollToTop showUnder={160}>
          <span>
            <BsArrowUpCircle
              style={{
                width: "2rem",
                height: "2rem",
                color: "#4b81ca",
              }}
            />
          </span>
        </ScrollToTop>
      </MDBContainer>
    </div>
  );
};

export default TeacherLessons;
