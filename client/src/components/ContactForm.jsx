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
      <MDBContainer className=" contact-form-section" id="contact">
        <MDBRow className="contact-form-container">
          <MDBCol md="6" className="mb-0">
            <div className="contact-form-title">
              <p>Get in touch </p>
            </div>
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
