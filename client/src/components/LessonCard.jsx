import React from "react";
import { CiEdit } from "react-icons/ci";
import { TiDeleteOutline } from "react-icons/ti";

const LessonCard = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          maxWidth: "500px",
          backgroundColor: "#ffffff",
          borderRadius: "10px",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
          padding: "20px",
          margin: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ width: "80%", marginRight: "10px" }}>
            <h2
              style={{
                justifyItems: "right",
                justifyContent: "flex-end",
              }}
            >
              Math
            </h2>
          </div>
          <div style={{ width: "20%", margin: "auto" }}>
            <button
              style={{
                backgroundColor: "transparent",
                color: "red",
                border: "none",
                float: "right",
              }}
            >
              <TiDeleteOutline />
            </button>
            <button
              style={{
                backgroundColor: "transparent",
                border: "none",
                float: "right",
              }}
            >
              <CiEdit />
            </button>
          </div>
        </div>
        <hr style={{ height: "1px", marginTop: "0rem" }} />
        <h4 style={{ marginBottom: "20px" }}>Topic: Odd numbers</h4>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ width: "50%", marginRight: "10px" }}>
            <p style={{ marginBottom: "5px" }}>Date: 04.04.23</p>
            <p style={{ marginBottom: "5px" }}>Slot: 8 - 8.30</p>
          </div>
          <div style={{ width: "50%" }}>
            <p style={{ marginBottom: "5px" }}>
              Link: <a href="https://google.com"> google.com</a>
            </p>
            <p style={{ marginBottom: "5px" }}>Classwork: Book pg. 24-28</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LessonCard;
