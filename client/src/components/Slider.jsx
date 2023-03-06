import React from "react";
import "./slider.scss";
import Logo1 from "../assets/logo1.png";
import Logo2 from "../assets/logo2.png";

const Slider = () => {
  return (
    <div>
      <div className="slider">
        <h5 className="slider-subtitle">
          Trusted by over 90 schools across 30 countries.
        </h5>
        <div className="slide-track">
          <div className="slide">
            <img src={Logo1} height="130" alt="" />
          </div>
          <div className="slide">
            <img src={Logo2} height="130" alt="" />
          </div>
          <div className="slide">
            <img src={Logo1} height="130" alt="" />
          </div>
          <div className="slide">
            <img src={Logo2} height="130" alt="" />
          </div>
          <div className="slide">
            <img src={Logo1} height="130" alt="" />
          </div>
          <div className="slide">
            <img src={Logo2} height="130" alt="" />
          </div>
          <div className="slide">
            <img src={Logo1} height="130" alt="" />
          </div>
          <div className="slide">
            <img src={Logo2} height="130" alt="" />
          </div>
          <div className="slide">
            <img src={Logo1} height="130" alt="" />
          </div>
          <div className="slide">
            <img src={Logo2} height="130" alt="" />
          </div>
          <div className="slide">
            <img src={Logo1} height="130" alt="" />
          </div>
          <div className="slide">
            <img src={Logo1} height="130" alt="" />
          </div>
          <div className="slide">
            <img src={Logo2} height="130" alt="" />
          </div>
          <div className="slide">
            <img src={Logo1} height="130" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
