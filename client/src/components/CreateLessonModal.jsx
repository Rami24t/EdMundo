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

export default function CreateLessonModal() {
  const [optModal, setOptModal] = useState(false);
  const toggleShow = () => setOptModal(!optModal);

  const handleCreateLessonConfirm = () => {
    setOptModal(true);
    // save changes
  };

  return (
    <>
      <MDBModal show={optModal} tabIndex="-1" setShow={setOptModal}>
        <MDBModalDialog size="lg" centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Edit lesson</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <Form>
                <Row>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="exampleDate">Date</Label>
                      <Input
                        id="exampleDate"
                        name="date"
                        placeholder="date placeholder"
                        type="date"
                      />
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="slot">Slot</Label>
                      <Input id="Slot" name="slot" type="select">
                        <option>8.00am - 8.40am</option>
                        <option>9.00am - 9.40am</option>
                        <option>10.00am - 10.40am </option>
                        <option>11.00am - 11.40am</option>
                        <option>12.00 - 12.40pm</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="class">Class</Label>
                      <Input id="class" name="topic" type="select">
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
                      <Input id="subject" name="subject" type="select">
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
                      <Input id="topic" name="topic" />
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup>
                  <Label for="objectives">Objectives</Label>
                  <Input id="objectives" name="objectives" type="textarea" />
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
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup>
                  <Label for="notes">Notes</Label>
                  <Input id="notes" name="notes" type="textarea" />
                </FormGroup>
                <FormGroup>
                  <Label for="meetingLink">Meeting link</Label>
                  <Input id="meetingLink" name="meetingLink" disabled />
                </FormGroup>
                <MDBBtn
                  outline
                  color="success"
                  onClick={handleCreateLessonConfirm}
                >
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
