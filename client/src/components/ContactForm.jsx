import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contactForm.css";
import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalBody,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import StripyMan from "../assets/stripy-man.png";
import Zigzag from "../assets/zigzag-stripes.png";
import StripyBeige from "../assets/stripy-beige.png";
import ThreeLines from "../assets/3-green-lines.png";
import FourLines from "../assets/4-green-lines.png";
import DarkLoop from "../assets/dark-loop.png";

const ContactForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [value, setValue] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setShowModal(!showModal);

    emailjs
      .sendForm(
        "service_p8q9go7",
        "template_kypxmgi",
        form.current,
        "MvJyvDm2jLNqAJw6u"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="contact-form-component">
      <MDBContainer className="text-md-start contact-form-section" id="contact">
        <MDBRow className="contact-form-title">
          <p>See what future of education looks like! </p>
          <p className="subtitle">Get in touch</p>
        </MDBRow>
        <MDBRow className="contact-form-title"></MDBRow>
        <MDBRow className="contact-form-container">
          <MDBCol md="6">
            <form className="contact-form" ref={form} onSubmit={sendEmail}>
              <label className="contact-label">Name</label>
              <input
                className="contact-input"
                type="text"
                name="user_name"
                defaultValue={value}
                placeholder="Write your name here.."
                required
              />

              <label className="contact-label">School name</label>
              <input
                className="contact-input"
                type="text"
                name="school_name"
                placeholder="And the school name here.."
                required
              />
              <label className="contact-label">Email</label>
              <input
                className="contact-input"
                type="email"
                name="user_email"
                placeholder="Let us know how to contact you back.."
                required
              />
              <label className="contact-label">Message</label>
              <textarea
                name="message"
                className="contact-input"
                placeholder="What would you like to tell us.."
                required
              />
              <input
                className="contact-button"
                type="submit"
                value="Send message"
              />
            </form>

            <MDBModal
              animationDirection="bottom"
              show={showModal}
              tabIndex="-1"
              setShow={setShowModal}
            >
              <MDBModalDialog position="top" frame>
                <MDBModalContent>
                  <MDBModalBody className="py-1">
                    <div className="d-flex justify-content-center align-items-center my-3">
                      <IoIosCheckmarkCircleOutline className="mx-2 text-success" />
                      <p className="mb-0">Thank you for your message!</p>
                    </div>
                  </MDBModalBody>
                </MDBModalContent>
              </MDBModalDialog>
            </MDBModal>
          </MDBCol>
          <MDBCol md="4" className="m-auto">
            <img
              src={StripyMan}
              alt="stripy-man"
              className=" d-block contact-form-image"
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default ContactForm;
