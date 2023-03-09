import React from "react";
import ScrollToTop from "react-scroll-up";
import { BsArrowUpCircle } from "react-icons/bs";
import StudentLessonCard from "../components/StudentLessonCard";

const StudentLessons = () => {
  return (
    <div>
      <div>
        <div className="d-flex flex-row justify-content-between my-3">
          <h2 style={{ margin: "1rem" }}>My Lessons</h2>
        </div>
        <StudentLessonCard />
        <ScrollToTop showUnder={160}>
          <span>
            <BsArrowUpCircle
              style={{ width: "2.5rem", height: "2.5rem", color: "green" }}
            />
          </span>
        </ScrollToTop>
      </div>
    </div>
  );
};

export default StudentLessons;
