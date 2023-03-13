import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import "./description.css";
import SmilingFace from "../assets/smiling-face.png";
import Hat from "../assets/hat.png";
import SpeechBubble from "../assets/speech-bubble.png";

const Description = () => {
  return (
    <div className="description">
      <MDBContainer className="description-section">
        {/* <MDBRow>
          {" "}
          <img src={StripyBeige} alt="" className="description-stripy-image" />
        </MDBRow> */}

        <MDBRow className="description-text">
          <h1 className="description-section-title">
            Built for schools looking to stay ahead of the curve in a rapidly
            changing world.
          </h1>
        </MDBRow>

        <MDBRow>
          <MDBCol md={4} className="description-container-image">
            <img src={Hat} alt="red-lines" className="description-image" />
            <h5 className="description-title">Convenient</h5>
            <p className="description-subtitle">
              Say goodbye to the hassle of commuting to school or carrying heavy
              textbooks. Attend classes from the comfort of your own home,
              office, or anywhere with an internet connection. Plus, all your
              course materials are easily accessible online.
            </p>
          </MDBCol>
          <MDBCol md={4} className="description-container-image">
            <img
              src={SpeechBubble}
              alt="red-lines"
              className="description-image"
            />
            <h5 className="description-title">Interactive</h5>
            <p className="description-subtitle">
              Explore a variety of interactive features, such as live video
              conferencing, screen sharing, whiteboard tools, and breakout
              rooms. We create an immersive and engaging learning environment
              that mimics the experience of an in-person classroom.
            </p>
          </MDBCol>
          <MDBCol md={4} className="description-container-image">
            <img
              src={SmilingFace}
              alt="red-lines"
              className="description-image"
            />
            <h5 className="description-title">Flexible</h5>
            <p className="description-subtitle">
              Our platform allows you to learn at your own pace and on your own
              schedule. Whether students prefer to attend live classes or watch
              recorded sessions, our platform offers the flexibility you need to
              balance your education with your other commitments.
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Description;
