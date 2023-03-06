import React from "react";
import styles from "./StudentSchedule.module.css";

const SCHEDULE_GRID = Array(6).fill(Array(7).fill(null));
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const SLOTS = [
  { from: "8:00", to: "9:00" },
  { from: "9:00", to: "10:00" },
  { from: "11:00", to: "12:00" },
  { from: "12:00", to: "13:00" },
  { from: "13:00", to: "14:00" },
  { from: "14:00", to: "15:00" },
  { from: "15:00", to: "16:00" },
];

console.log(SCHEDULE_GRID);

const Schedule = () => {
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
              <div
                key={`slot-${dayIndex}-${slotIndex}`}
                className={`${styles.scheduleCell} ${styles.scheduleSlot}`}
              >
                {" "}
                <p className={`${styles.schedulesubject}`}>Biology</p>
                <p>Julia Kobzar</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
