import React from "react";
import "./slider.scss";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import Logo1 from "../assets/logo1.png";
import Logo2 from "../assets/logo2.png";

const Slider = () => {
  return (
    <div className="slider-component">
      <MDBContainer className="slider" breakpoint="sm">
        <MDBRow>
          <p className="slider-subtitle">
            Trusted by 90+ schools across 30 countries
          </p>
        </MDBRow>

        <MDBRow className="slide-track">
          <MDBCol md="6" className="slide">
            <img src={Logo1} height="130" alt="school-logo" />
          </MDBCol>
          <MDBCol md="6" className="slide">
            <img src={Logo2} height="130" alt="school-logo" />
          </MDBCol>
          <MDBCol md="6" className="slide">
            <img src={Logo1} height="130" alt="school-logo" />
          </MDBCol>
          <MDBCol md="6" className="slide">
            <img src={Logo2} height="130" alt="school-logo" />
          </MDBCol>
          <MDBCol md="6" className="slide">
            <img src={Logo1} height="130" alt="school-logo" />
          </MDBCol>
          <MDBCol md="6" className="slide">
            <img src={Logo2} height="130" alt="school-logo" />
          </MDBCol>
          <MDBCol md="6" className="slide">
            <img src={Logo1} height="130" alt="school-logo" />
          </MDBCol>
          <MDBCol md="6" className="slide">
            <img src={Logo2} height="130" alt="school-logo" />
          </MDBCol>
          <divMDBCol md="6" className="slide">
            <img src={Logo1} height="130" alt="school-logo" />
          </divMDBCol>
          <MDBCol md="6" className="slide">
            <img src={Logo2} height="130" alt="school-logo" />
          </MDBCol>
          <MDBCol md="6" className="slide">
            <img src={Logo1} height="130" alt="school-logo" />
          </MDBCol>
          <MDBCol md="6" className="slide">
            <img src={Logo1} height="130" alt="school-logo" />
          </MDBCol>
          <MDBCol md="6" className="slide">
            <img src={Logo2} height="130" alt="school-logo" />
          </MDBCol>
          <MDBCol md="6" className="slide">
            <img src={Logo1} height="130" alt="school-logo" />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Slider;
