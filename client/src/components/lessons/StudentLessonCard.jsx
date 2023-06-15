import React, {useContext} from "react";
import { BsCalendarDate } from "react-icons/bs";
import { TfiTime } from "react-icons/tfi";
import { IoMdPeople } from "react-icons/io";
import "./lessonCard.css";
import { Form, Col, Row, FormGroup, Label, Input, Badge } from "reactstrap";
import useUser from "../../hooks/useUser";
import { MDBSpinner } from "mdb-react-ui-kit";
import { Context } from "../../components/Context";


const StudentLessonCard = () => {
  const { user } = useContext(Context);
  let { data, error, isLoading } = useUser(user?._id);
  data = data?.data;
  let lessons = data?.user?.lessons || data?.user?.currentClass?.lessons;
  lessons?.map((lesson, idx) => console.log(`lesson ${idx + 1}: `, lesson));

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
      {lessons?.map((lesson) => (
        <div key={lesson._id} className="lesson-card">
          <div className="lesson-header">
            <div className="title-container">
              <h2>{lesson.session.subjectName}</h2>
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
                    defaultValue={lesson.date.slice(0, 10)}
                    disabled
                  />
                </Col>
                <Col for="date" md={1} className="vertical-center">
                  <TfiTime className="lesson-card-icon" />
                </Col>
                <Col md={1} className="date-input">
                  <Input
                    className="lesson-card-input"
                    id="slot"
                    name="slot"
                    type="text"
                    defaultValue={lesson.session.periodNumber}
                    disabled
                  />
                </Col>
                <Col for="date" md={1} className="vertical-center">
                  <IoMdPeople className="lesson-card-icon" />
                </Col>
                <Col md={5} className="date-input">
                  <Input
                    className="lesson-card-input"
                    id="slot"
                    name="slot"
                    type="text"
                    defaultValue={lesson.session.teacher.name}
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
                    defaultValue={lesson.topic}
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
                    defaultValue={lesson.session.class.liveMeetingLink}
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
                type="textarea"
                className="lesson-card-input"
                defaultValue={lesson.objectives}
                disabled
              />
            </FormGroup>
            <Row>
              <Col md={2}>
                <Label
                  for="classwork"
                  className="vertical-center lesson-card-label "
                >
                  Classwork
                </Label>
              </Col>
              <Col md={4}>
                {lesson?.classworks.map((classwork) => (
                  <Badge
                    className="lesson-card-badge"
                    id="classwork"
                    name="classwork"
                    target="_blank"
                    href={lesson.classworks}
                    defaultValue={lesson.classworks}
                  >
                    Classwork PDF
                  </Badge>
                ))}
              </Col>

              <Col md={2}>
                <Label for="homework" className="lesson-card-label">
                  Homework
                </Label>
              </Col>
              <Col md={4}>
                {lesson?.homeworks.map((homework) => (
                  <Badge
                    className="lesson-card-badge"
                    id="homework"
                    name="homework"
                    target="_blank"
                    href={lessons.homeworks}
                    defaultValue={lessons.homeworks}
                  >
                    Homework PDF
                  </Badge>
                ))}
              </Col>
            </Row>
          </Form>
        </div>
      ))}
    </>
  );
};

export default StudentLessonCard;
