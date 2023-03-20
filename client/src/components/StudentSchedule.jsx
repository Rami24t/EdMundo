import React from "react";
import styles from "./StudentSchedule.module.scss";
import { useContext } from "react";
import { Context } from "./Context";

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

const Schedule = () => {
  const { state } = useContext(Context);
  const { days, slots } = state?.displaySchedule || {
    days: DAYS,
    slots: SLOTS,
  };

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
              <div
                key={`${slotIndex}-${dayIndex}`}
                className={`${styles.scheduleCell} ${styles.scheduleSlot}`}
                style={{
                  backgroundColor:
                    SUBJECT_TO_COLOR[
                      state.user?.currentClass?.schedule[dayIndex].sessions[
                        slotIndex
                      ].subjectName
                    ],
                }}
              >
                <p className={`${styles.scheduleSubject}`}>
                  {
                    state.user?.currentClass?.schedule[dayIndex].sessions[
                      slotIndex
                    ].subjectName
                  }
                </p>
                <p>
                  {
                    state.user?.currentClass?.schedule[dayIndex].sessions[
                      slotIndex
                    ].teacher.name
                  }
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
      {!state.user?.currentClass && <span>loading your schedule...</span>}
    </div>
  );
};

export default Schedule;
