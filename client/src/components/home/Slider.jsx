import React from "react";
import "./slider.scss";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import Logo1 from "../../assets/logos/logo1.png";
import Logo2 from "../../assets/logos/logo2.png";
import Logo3 from "../../assets/logos/logo3.png";

const Slider = () => {
  return (
    <div className="container-fluid slider-section">
      <MDBContainer className="container-fluid slider">
        <MDBRow>
          <p className="slider-subtitle">
            Trusted by 90+ schools across 30 countries
          </p>
        </MDBRow>

        <MDBRow className="slide-track">
          <MDBCol md="2" className="slide">
            <img src={Logo1} height="130" alt="school-logo" />
          </MDBCol>
          <MDBCol md="2" className="slide">
            <img src={Logo2} height="130" alt="school-logo" />
          </MDBCol>
          <MDBCol md="2" className="slide">
            <img src={Logo3} height="130" alt="school-logo" />
          </MDBCol>
          <MDBCol md="2" className="slide">
            <img src={Logo2} height="130" alt="school-logo" />
          </MDBCol>
          <MDBCol md="2" className="slide">
            <img src={Logo1} height="130" alt="school-logo" />
          </MDBCol>
          <MDBCol md="2" className="slide">
            <img src={Logo2} height="130" alt="school-logo" />
          </MDBCol>
          <MDBCol md="2" className="slide">
            <img src={Logo3} height="130" alt="school-logo" />
          </MDBCol>
          <MDBCol md="2" className="slide">
            <img src={Logo2} height="130" alt="school-logo" />
          </MDBCol>
          <MDBCol md="2" className="slide">
            <img src={Logo1} height="130" alt="school-logo" />
          </MDBCol>
          <MDBCol md="2" className="slide">
            <img src={Logo2} height="130" alt="school-logo" />
          </MDBCol>
          <MDBCol md="2" className="slide">
            <img src={Logo3} height="130" alt="school-logo" />
          </MDBCol>
          <MDBCol md="2" className="slide">
            <img src={Logo1} height="130" alt="school-logo" />
          </MDBCol>
          <MDBCol md="2" className="slide">
            <img src={Logo2} height="130" alt="school-logo" />
          </MDBCol>
          <MDBCol md="2" className="slide">
            <img src={Logo1} height="130" alt="school-logo" />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Slider;
