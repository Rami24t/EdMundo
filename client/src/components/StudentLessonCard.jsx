import React, { useState } from "react";
import { BsCalendarDate } from "react-icons/bs";
import { TfiTime } from "react-icons/tfi";
import { IoMdPerson } from "react-icons/io";
import "./lessonCard.css";
import { Form, Col, Row, FormGroup, Label, Input } from "reactstrap";

const StudentLessonCard = () => {
  const lessonDetails = {
    date: "2023-02-02",
    slot: "8 - 8.40am",
    teacherName: "Tina Turner",
    subject: "Math",
    topic: "Odd numbers",
    objectives: "Learn arithmetic with odd numbers.",
    classwork: "Book pg. 24-29",
    homework: "Book pg. 30-32",
    notes: "Please review even numbers.",
    link: "google.com",
  };

  return (
    <>
      <div className="lesson-card">
        <div className="lesson-header">
          <div className="title-container">
            <h2>{lessonDetails.subject}</h2>
          </div>
        </div>
        <hr />

        <Form>
          <Row>
            <FormGroup row>
              <Label for="date" md={1} className="lesson-card-icon">
                <BsCalendarDate />
              </Label>
              <Col md={3} className="date-input">
                <Input
                  className="lesson-card-input"
                  id="date"
                  name="date"
                  type="text"
                  defaultValue={lessonDetails.date}
                  disabled
                />
              </Col>
              <Label for="date" md={1} className="lesson-card-icon">
                <TfiTime />
              </Label>
              <Col md={3} className="date-input">
                <Input
                  className="lesson-card-input"
                  id="slot"
                  name="slot"
                  type="text"
                  defaultValue={lessonDetails.slot}
                  disabled
                />
              </Col>
              <Label for="date" md={1} className="lesson-card-icon">
                <IoMdPerson />
              </Label>
              <Col md={3} className="date-input">
                <Input
                  className="lesson-card-input"
                  id="slot"
                  name="slot"
                  type="text"
                  defaultValue={lessonDetails.teacherName}
                  disabled
                />
              </Col>
            </FormGroup>
          </Row>

          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="topic" className="lesson-card-label">
                  Topic
                </Label>
                <Input
                  className="lesson-card-input"
                  id="topic"
                  name="topic"
                  type="text"
                  defaultValue={lessonDetails.topic}
                  disabled
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="link" className="lesson-card-label">
                  Classroom link
                </Label>
                <Input
                  className="lesson-card-input"
                  id="link"
                  name="link"
                  type="url"
                  defaultValue={lessonDetails.link}
                  disabled
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="objectives" className="lesson-card-label">
              Objectives
            </Label>
            <Input
              id="objectives"
              name="objectives"
              type="text"
              className="lesson-card-input"
              defaultValue={lessonDetails.objectives}
              disabled
            />
          </FormGroup>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="classwork" className="lesson-card-label">
                  Classwork
                </Label>
                <Input
                  className="lesson-card-input"
                  id="classwork"
                  name="classwork"
                  type="url"
                  defaultValue={lessonDetails.classwork}
                  disabled
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="homework" className="lesson-card-label">
                  Homework
                </Label>
                <Input
                  id="homework"
                  name="homework"
                  className="lesson-card-input"
                  defaultValue={lessonDetails.homework}
                  type="url"
                  disabled
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="notes" className="lesson-card-label">
              Notes
            </Label>
            <Input
              id="notes"
              name="notes"
              type="text"
              className="lesson-card-input"
              defaultValue={lessonDetails.notes}
              disabled
            />
          </FormGroup>
        </Form>
      </div>
    </>
  );
};

export default StudentLessonCard;
