import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";
import "./hero.css";
// import ReceivingMail from "../assets/receiving-mail.png";
import { HashLink } from "react-router-hash-link"; // explanation: When you click on a link created with react-router-hash-link it will scroll to the element on the page with the id that matches the #hash-fragment in the link. This will also work for elements that are created after an asynchronous data load. Note that you must use React Router's BrowserRouter for this to work.
import RedLines from "../../assets/illustrations/red-rays.png";
import StripyMan from "../../assets/illustrations/stripy-man.png";

const Hero = () => {
  return (
    <div className="hero">
      <MDBContainer className="hero-section">
        <MDBRow>
          <MDBCol md={7} className="hero-text">
            <h1 className="hero-title">
              {`Bringing the classroom to you -
    \n`}
              <span className="hero-title-span"> anytime, anywhere!</span>
            </h1>
            <p className="hero-subtitle">
              A virtual playground for students and teachers alike, complete
              with interactive features that allow you to teach and learn just
              as you would in a physical classroom setting.
            </p>
            <HashLink to="/#contact">
              <MDBBtn className="hero-demo-button">Book a free demo</MDBBtn>
            </HashLink>
          </MDBCol>
          <MDBCol md={5} className="col-sm hero-container-image">
            <img src={RedLines} alt="red-lines" className="hero-image-lines" />
            <img
              src={StripyMan}
              alt="receiving-mail"
              className=" hero-image-main"
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Hero;
