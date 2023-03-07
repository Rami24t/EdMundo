import React from "react";
import "./slider.scss";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import Logo1 from "../assets/logo1.png";
import Logo2 from "../assets/logo2.png";

const Slider = () => {
  return (
    <div>
      <MDBContainer className="text-center slider" breakpoint="sm">
        <MDBRow>
          <MDBCol md="12">
            <h5 className="slider-subtitle">
              Trusted by over 90 schools across 30 countries.
            </h5>
          </MDBCol>
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
