import React, { useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
} from "mdb-react-ui-kit";
import "./lessonCard.css";
import { CiEdit } from "react-icons/ci";

export default function EditLessonModal() {
  const [optModal, setOptModal] = useState(false);

  const toggleShow = () => setOptModal(!optModal);

  return (
    <>
      <button className="edit-delete-buttons" onClick={toggleShow}>
        <CiEdit />
      </button>
      <MDBModal show={optModal} tabIndex="-1" setShow={setOptModal}>
        <MDBModalDialog size="lg" centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Math</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <div className="d-flex justify-content-between align-items-center">
                <div>Topic: Odd numbers</div>
                <div></div>
                <div>f</div>
              </div>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
