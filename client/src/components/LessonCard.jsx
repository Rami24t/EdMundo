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
      <MDBCard>
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
      </MDBCard>
    </>
  );
};

export default LessonCard;
