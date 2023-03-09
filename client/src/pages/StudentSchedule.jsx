import React from "react";
import { MDBSpinner } from "mdb-react-ui-kit";
import styles from "./StudentSchedule.module.css";
import useSWR from "swr";
import axios from "axios";

const sessionsFetcher = (url) =>
  axios.get(url, { withCredentials: true }).then((res) => res.data);

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
  Biology: "tomato",
  Math: "yellow",
  Science: "lightblue",
};

const Slot = ({ slot, isLoading }) => {
  if (!slot)
    return (
      <div className={`${styles.scheduleCell} ${styles.scheduleSlot}`}>
        {isLoading && (
          <MDBSpinner className="mx-2" color="info">
            <span className="visually-hidden">Loading...</span>
          </MDBSpinner>
        )}
      </div>
    );

  return (
    <div
      className={`${styles.scheduleCell} ${styles.scheduleSlot}`}
      style={{ backgroundColor: SUBJECT_TO_COLOR[slot.subjectName] }}
    >
      <p className={`${styles.scheduleSubject}`}>{slot.subjectName}</p>
      <p>{slot.teacher.name}</p>
    </div>
  );
};

const Schedule = () => {
  const { data: sessions, isLoading } = useSWR(
    `${process.env.REACT_APP_BASE_URL}/api/student/sessions`,
    sessionsFetcher,
  );

  return (
    <div className={styles.schedulePage}>
      <div className={styles.scheduleContainer}>
        <div className="slots-column">
          <div className={styles.scheduleCell} />
          {SLOTS.map((slot) => (
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
              key={DAYS[dayIndex]}
              className={`${styles.scheduleCell} ${styles.scheduleLabel}`}
            >
              {DAYS[dayIndex]}
            </div>
            {col.map((_, slotIndex) => (
              <Slot
                key={`slot-${dayIndex}-${slotIndex}`}
                slot={sessions?.find(
                  (s) => s.weekDay === dayIndex && s.slot === slotIndex,
                )}
                isLoading={isLoading}
              />
            ))}
          </div>
        ))}
      </div>
      {isLoading && <span>loading your schedule...</span>}
    </div>
  );
};

export default Schedule;
