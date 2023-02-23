import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBCardFooter,
  MDBBtn,
} from "mdb-react-ui-kit";
import { CiEdit } from "react-icons/ci";
import { TiDeleteOutline } from "react-icons/ti";

const LessonCard = () => {
  return (
    <>
      {/* <MDBCard>
        <MDBCardHeader className="d-flex flex-row justify-content-between align-items-center">
          <h4>German</h4>
          <div className="buttons">
            <MDBBtn href="#">
              <CiEdit />
            </MDBBtn>
            <MDBBtn href="#">
              <TiDeleteOutline />
            </MDBBtn>
          </div>
        </MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>Durch die Sprachen</MDBCardTitle>
          <MDBCardText>
            <div className="d-flex flex-row justify-content-between my-3">
              <h2>My Lessons</h2>
              <button>Create a new lesson</button>
            </div>
          </MDBCardText>
        </MDBCardBody>
        <MDBCardFooter className="text-muted">2 days ago</MDBCardFooter>
      </MDBCard> */}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "500px",
          height: "200px",
          backgroundColor: "#ffffff",
          borderRadius: "10px",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
          padding: "20px",
        }}
      >
        <h2 style={{ marginBottom: "10px" }}>Class: Math</h2>
        <h3 style={{ marginBottom: "20px" }}>Topic: Odd numbers</h3>
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
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link: google.com
            </a>
            <p style={{ marginBottom: "5px" }}>Classwork: Book pg. 24-28</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LessonCard;
