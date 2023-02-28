import React, { useState } from "react";
import "./lessonCard.css";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
} from "mdb-react-ui-kit";
import { FormGroup, Input, Label, Col, Row, Form } from "reactstrap";

export default function CreateLessonModal({
  optModal,
  setOptModal,
  toggleShow,
  handleCreateLessonConfirm,
}) {
  // const handleCreateLesson = () => {
  //   setShowCreateLessonModal(true);
  // };

  const [lessonDetails, setLessonDetails] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLessonDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("lesson details saved", lessonDetails);
    // save changes to database
    setLessonDetails({
      date: "",
      slot: "",
      class: "",
      subject: "",
      topic: "",
      objectives: "",
      classwork: "",
      homework: "",
      notes: "",
      link: "",
    });
  };

  return (
    <>
      <MDBModal show={optModal} tabIndex="-1" setShow={setOptModal}>
        <MDBModalDialog size="lg" centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Create new lesson</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <Form onSubmit={handleFormSubmit}>
                <Row>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="date">Date</Label>
                      <Input
                        id="date"
                        name="date"
                        type="date"
                        value={lessonDetails.date}
                        onChange={(e) => handleInputChange(e)}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="slot">Slot</Label>
                      <Input
                        id="slot"
                        name="slot"
                        type="select"
                        value={lessonDetails.slot}
                        onChange={(e) => handleInputChange(e)}
                      >
                        <option>8 - 8.40am</option>
                        <option>9 - 9.40am</option>
                        <option>10 - 10.40am </option>
                        <option>11 - 11.40am</option>
                        <option>12 - 12.40pm</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="class">Class</Label>
                      <Input
                        id="class"
                        name="class"
                        type="select"
                        value={lessonDetails.class}
                        onChange={(e) => handleInputChange(e)}
                      >
                        <option>1 A</option>
                        <option>1 B</option>
                        <option>2 A</option>
                        <option>2 B</option>
                        <option>3 A</option>
                        <option>3 B</option>
                        <option>4 A</option>
                        <option>4 B</option>
                        <option>5 A</option>
                        <option>5 B</option>
                        <option>6 A</option>
                        <option>6 B</option>
                        <option>7 A</option>
                        <option>7 B</option>
                        <option>8 A</option>
                        <option>8 B</option>
                        <option>9 A</option>
                        <option>9 B</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="select"
                        value={lessonDetails.subject}
                        onChange={(e) => handleInputChange(e)}
                      >
                        <option>Math</option>
                        <option>English</option>
                        <option>German</option>
                        <option>Politics</option>
                        <option>Geography</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="topic">Topic</Label>
                      <Input
                        id="topic"
                        name="topic"
                        value={lessonDetails.topic}
                        onChange={(e) => handleInputChange(e)}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup>
                  <Label for="objectives">Objectives</Label>
                  <Input
                    id="objectives"
                    name="objectives"
                    type="textarea"
                    value={lessonDetails.objectives}
                    onChange={(e) => handleInputChange(e)}
                  />
                </FormGroup>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="classwork">Classwork</Label>
                      <Input
                        id="classwork"
                        name="classwork"
                        placeholder="Classwork url"
                        type="url"
                        value={lessonDetails.classwork}
                        onChange={(e) => handleInputChange(e)}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="homework">Homework</Label>
                      <Input
                        id="homework"
                        name="homework"
                        placeholder="Homework url"
                        type="url"
                        value={lessonDetails.homework}
                        onChange={(e) => handleInputChange(e)}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup>
                  <Label for="notes">Notes</Label>
                  <Input
                    id="notes"
                    name="notes"
                    type="textarea"
                    value={lessonDetails.notes}
                    onChange={(e) => handleInputChange(e)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="meetingLink">Meeting link</Label>
                  <Input
                    id="meetingLink"
                    name="meetingLink"
                    value={lessonDetails.link}
                    disabled
                  />
                </FormGroup>
                <MDBBtn outline color="success">
                  Save new lesson
                </MDBBtn>
              </Form>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
