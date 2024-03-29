import React, { useContext } from "react";
import styles from "../pages/schedule/StudentSchedulePage.module.scss";
import useUser from "../hooks/useUser";
import { MDBSpinner } from "mdb-react-ui-kit";
import { Context } from "../components/Context";


const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const SLOTS = [
  { from: "8:00", to: "8:40" },
  { from: "8:50", to: "9:30" },
  { from: "9:40", to: "10:20" },
  { from: "10:40", to: "11:20" },
  { from: "11:30", to: "12:10" },
  { from: "12:40", to: "13:20" },
  { from: "13:30", to: "14:10" },
];

const SUBJECT_TO_COLOR = {
  Math: "#FDFFB6",
  German: "#5BD6FF",
  English: "#ACE6B6",
  Computer: "#DDD6B6",
  Technology: "#EDD6B6",
  Ethics: "#FFE6B6",
  Chemistry: "#7DA6FF",
  Physics: "#C5B6FF",
  Biology: "#9BF6FF",
  History: "#CAFFBF",
  Geography: "#BDB2FF",
  Art: "#FFD6A5",
  Lab: "#A0C4FF",
  Music: "#FFC6FF",
  "P.E": "#FFADAD",
};

const Spinner = () => {
  return (
    <MDBSpinner
      grow
      role="status"
      className={`spinner-border text-primary ${styles.scheduleCell} ${styles.scheduleSlot}`}
    >
      <span className="visually-hidden">Loading...</span>
    </MDBSpinner>
  );
};

const Schedule = () => {
  const { user } = useContext(Context);
  let { data, error } = useUser(user?._id);
  data && (data = data?.data);
  const { days, slots } = JSON.parse(sessionStorage.getItem('scheduleSettings')) || { days: DAYS, slots: SLOTS };
  const grid = Array(days.length).fill(Array(slots.length).fill(null));

  if (error)
    return (
      <div>
        <p>Some error has happened.</p> <p>Please try refreshing your page.</p>
      </div>
    );
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

        {grid.map((col, dayIndex) => (
          <div key={`day-${dayIndex}`} className={styles.dayColumn}>
            <div
              key={days[dayIndex]}
              className={`${styles.scheduleCell} ${styles.scheduleLabel}`}
            >
              {days[dayIndex]}
            </div>

            {col.map((_, slotIndex) =>
              !data?.user?.currentClass?.schedule ? (
                <Spinner key={`${slotIndex}-${dayIndex}`} />
              ) : (
                <div
                  key={`${slotIndex}-${dayIndex}`}
                  className={`${styles.scheduleCell} ${styles.scheduleSlot}`}
                  style={{
                    backgroundColor:
                      SUBJECT_TO_COLOR[
                        data?.user?.currentClass?.schedule[dayIndex].sessions[
                          slotIndex
                        ].subjectName
                      ],
                  }}
                >
                  <p className={`${styles.scheduleSubject}`}>
                    {
                      data?.user?.currentClass?.schedule[dayIndex].sessions[
                        slotIndex
                      ].subjectName
                    }
                  </p>
                  <p>
                    {
                      data?.user?.currentClass?.schedule[dayIndex].sessions[
                        slotIndex
                      ].teacher.name
                    }
                  </p>
                </div>
              ),
            )}
          </div>
        ))}
      </div>
      {!data?.user?.currentClass && <span>loading your schedule...</span>}
    </div>
  );
};

export default Schedule;
