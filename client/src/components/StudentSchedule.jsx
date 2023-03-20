import React from "react";
import styles from "./StudentSchedule.module.scss";
import { useContext } from "react";
import { Context } from "./Context";
import useUser from "../hooks/useUser";
import  { MDBSpinner } from "mdb-react-ui-kit";

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const SLOTS = [
  { from: "8:00", to: "9:00" },
  { from: "9:00", to: "10:00" },
  { from: "11:00", to: "12:00" },
  { from: "12:00", to: "13:00" },
  { from: "13:00", to: "14:00" },
  { from: "14:00", to: "15:00" },
  { from: "15:00", to: "16:00" },
];
const SCHEDULE_GRID = Array(DAYS.length).fill(Array(SLOTS.length).fill(null));

const SUBJECT_TO_COLOR = {
  Math: "#FDFFB6",
  Science: "#9BF6FF",
  History: "#CAFFBF",
  Geography: "#BDB2FF",
  Art: "#FFD6A5",
  Lab: "#A0C4FF",
  Music: "#FFC6FF",
  "P.E": "#FFADAD",
};

const Spinner = () => {
  return (
    <MDBSpinner grow role="status" className={`spinner-border text-primary ${styles.scheduleCell} ${styles.scheduleSlot}`}>
      <span className="visually-hidden">Loading...</span>
    </MDBSpinner>
  );
};

const Schedule = () => {

  let { data, error, isLoading} = useUser();
  data && (data = data?.data);
  const {days,slots}  =  data?.displaySchedule || {days: DAYS, slots: SLOTS};


  return (
    <div className={styles.schedulePage}>
      <div className={styles.scheduleContainer}>
        <div className="slots-column">
          <div className={styles.scheduleCell} />
          {slots.map((slot) => (
            <div
              key={`${slot.from}-${slot.to}`}
              className={`${styles.scheduleCell} ${styles.scheduleLabel}`}
            >
              {slot.from} - {slot.to}
            </div>
          ))}
        </div>

        {SCHEDULE_GRID.map((col, dayIndex) => (
          <div key={`day-${dayIndex}`} className={styles.dayColumn}>
            <div
              key={days[dayIndex]}
              className={`${styles.scheduleCell} ${styles.scheduleLabel}`}
            >
              {days[dayIndex]}
            </div>


        {col.map((_, slotIndex) => (
          !data?.user?.currentClass.schedule ? <Spinner key={`${slotIndex}-${dayIndex}`}/> :
              (<div
                key={`${slotIndex}-${dayIndex}`}
                className={`${styles.scheduleCell} ${styles.scheduleSlot}`}
                style={{ backgroundColor: SUBJECT_TO_COLOR[data?.user?.currentClass?.schedule[dayIndex].sessions[slotIndex]
                      .subjectName] }}
              >
                <p className={`${styles.scheduleSubject}`}>
                  {data?.user?.currentClass?.schedule[dayIndex].sessions[slotIndex]
                      .subjectName}
                </p>
                <p>{data?.user?.currentClass?.schedule[dayIndex].sessions[slotIndex]
                      .teacher.name}</p>
              </div>)
            ))}
          </div>
        ))}
      </div>
      {!data?.user?.currentClass && <span>loading your schedule...</span>}
    </div>
  );
};

export default Schedule;
