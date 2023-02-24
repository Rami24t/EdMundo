import React, { useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import "./lessonCard.css";
import EditLessonModal from "./EditLessonModal";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";

const LessonCard = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [lessonDetails, setLessonDetails] = useState({
    name: "Math",
    topic: "Odd numbers",
    date: "04.04.23",
    slot: "8 - 8.30",
    link: "google.come",
    classwork: "Book pg. 24-29",
  });

  const handleEdit = () => {
    setShowEditModal(true);
  };
  const handleDelete = () => {
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = () => {
    setShowDeleteModal(false);
    //delete
  };

  return (
    <>
      <div className="lesson-card">
        <div className="lesson-header">
          <div className="title-container">
            <h2>{lessonDetails.name}</h2>
          </div>
          <div className="buttons-container">
            <button
              className="edit-delete-buttons delete-button"
              onClick={handleDelete}
            >
              <TiDeleteOutline />
            </button>

            {/* Delete Modal  */}

            <MDBModal
              show={showDeleteModal}
              setShow={setShowDeleteModal}
              tabIndex="-1"
            >
              <MDBModalDialog centered>
                <MDBModalContent>
                  <MDBModalHeader>
                    <MDBModalTitle>Delete lesson</MDBModalTitle>
                    <MDBBtn
                      className="btn-close"
                      color="none"
                      onClick={() => setShowDeleteModal(false)}
                    ></MDBBtn>
                  </MDBModalHeader>
                  <MDBModalBody>
                    Once you delete the lesson you won't be able to restore it.
                    Are you sure you want to delete this lesson?
                  </MDBModalBody>
                  <MDBModalFooter>
                    <MDBBtn
                      color="secondary"
                      onClick={() => setShowDeleteModal(false)}
                    >
                      Cancel
                    </MDBBtn>
                    <MDBBtn color="danger" onClick={handleDeleteConfirm}>
                      Delete
                    </MDBBtn>
                  </MDBModalFooter>
                </MDBModalContent>
              </MDBModalDialog>
            </MDBModal>
            <button className="edit-delete-buttons" onClick={handleEdit}>
              <EditLessonModal />
            </button>
          </div>
        </div>
        <hr />
        <h4 className="topic">Topic: {lessonDetails.topic}</h4>
        <div className="info-container">
          <div className="column">
            <p>Date: {lessonDetails.date} </p>
            <p>Slot: {lessonDetails.slot}</p>
          </div>
          <div className="column">
            <p>
              Link: <a href={lessonDetails.link}> Go to Zoom</a>
            </p>
            <p>Classwork:{lessonDetails.classwork}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LessonCard;
