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
import ReceivingMail from "../assets/receiving-mail.png";
import RedLines from "../assets/red-rays.png";

const ContactForm = () => {
  const [showModal, setShowModal] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setShowModal(!showModal);
console.log(process.env.REACT_APP_EMAILJS_SERVICE_ID);
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_KEY,
      )
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        },
      );
    e.target.reset();
  };

  return (
    <div className="contact-form-component">
      <MDBContainer className=" contact-form-section" id="contact">
        <MDBRow className="contact-form-container">
          <MDBCol md="6" className="mb-0">
            <div>
              <h1 className="contact-form-title-text">Get in touch </h1>
            </div>
            <form className="contact-form" ref={form} onSubmit={sendEmail}>
              <label className="contact-label">Full Name</label>
              <input
                className="contact-input"
                type="text"
                name="contact_name"
                placeholder="Write your full name here.."
                required
              />

              <label className="contact-label">Company/School</label>
              <input
                className="contact-input"
                type="text"
                name="school_name"
                placeholder="And the name of you company/school.."
                required
              />
              <label className="contact-label">Email address</label>
              <input
                className="contact-input"
                type="email"
                name="reply_to"
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
              className="message-sent-modal"
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
          <MDBCol md="5" className="col-sm contact-form-images">
            <img
              src={RedLines}
              alt="red-lines"
              className="contact-image-lines"
            />
            <img
              src={ReceivingMail}
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
