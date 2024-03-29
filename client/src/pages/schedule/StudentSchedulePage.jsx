import React from "react";
import StudentSchedule from "../../components/StudentSchedule";
import styles from "./StudentSchedulePage.module.scss";
import StudentScheduleImage from "../../assets/illustrations/student-schedule-image.png";

const Schedule = () => {
  return (
    <div className={`${styles.schedulePage}`}>
      <header>
        <h1>Here is your Schedule:</h1>
      </header>
      <main className={`${styles.scheduleMain}`}>
        <figcaption>
          <img
            className={`${styles.schedulePageImage}`}
            src={StudentScheduleImage}
            alt="decor"
          />
        </figcaption>
        <article>
          <StudentSchedule />
        </article>
      </main>
    </div>
  );
};

export default Schedule;
