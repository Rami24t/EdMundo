import React, { useState } from "react";
import { BsCalendarDate } from "react-icons/bs";
import { TfiTime } from "react-icons/tfi";
import { IoMdPeople } from "react-icons/io";
import "./lessonCard.css";
import { Form, Col, Row, FormGroup, Label, Input, Badge } from "reactstrap";
import useUser from "../hooks/useUser";
import { MDBSpinner } from "mdb-react-ui-kit";

const StudentLessonCard = () => {
  let { data, error, isLoading } = useUser();
  data = data?.data;
  // console.log("data", data);
  let lessons = data?.user?.lessons || data?.user?.currentClass.lessons;
  lessons &&
    lessons.map((lesson, idx) => console.log(`lesson ${idx + 1}: `, lesson));

  const lessonDetails = {
    date: "2023-02-02",
    slot: "8 - 8.40am",
    teacherName: "Tina Turner",
    subject: "Math",
    topic: "Odd numbers",
    objectives: "Learn arithmetic with odd numbers.",
    classwork: "http://www.primaryresources.co.uk/maths/pdfs/LH_oddandeven.pdf",
    homework: "http://www.primaryresources.co.uk/maths/pdfs/LH_oddandeven.pdf",
    notes: "Please review even numbers.",
    link: "google.com",
  };

  if (isLoading) {
    return (
      <div className="spinner lesson-card">
        <MDBSpinner grow />
      </div>
    );
  }

  if (error) {
    return (
      <div className="lesson-card">
        <h1>Something went wrong</h1>
      </div>
    );
  }

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
              <Col for="date" md={1} className="vertical-center">
                <BsCalendarDate className="lesson-card-icon" />
              </Col>
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
              <Col for="date" md={1} className="vertical-center">
                <TfiTime className="lesson-card-icon" />
              </Col>
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
              <Col for="date" md={1} className="vertical-center">
                <IoMdPeople className="lesson-card-icon" />
              </Col>
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
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label
                  for="classwork"
                  className="vertical-center lesson-card-label "
                >
                  Classwork
                </Label>
                <Badge
                  className="lesson-card-badge"
                  id="classwork"
                  name="classwork"
                  target="_blank"
                  href={lessonDetails.classwork}
                  defaultValue={lessonDetails.classwork}
                >
                  Classwork PDF
                </Badge>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="homework" className="lesson-card-label">
                  Homework
                </Label>
                <Badge
                  className="lesson-card-badge"
                  id="homework"
                  name="homework"
                  target="_blank"
                  href={lessonDetails.homework}
                  defaultValue={lessonDetails.homework}
                >
                  Homework PDF
                </Badge>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
};

export default StudentLessonCard;
