import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contactForm.css";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

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
  };

  return (
    <div className="contact-form-container">
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <h3>Get in touch</h3>
        <hr className="contact-hr" />
        <label className="contact-label">Name</label>
        <input
          className="contact-input"
          type="text"
          name="user_name"
          placeholder="Write your name here.."
        />

        <label className="contact-label">School name</label>
        <input
          className="contact-input"
          type="text"
          name="school_name"
          placeholder="Write the school name here.."
        />
        <label className="contact-label">Email</label>
        <input
          className="contact-input"
          type="email"
          name="user_email"
          placeholder="Let us know how to contact you back.."
        />
        <label className="contact-label">Message</label>
        <textarea
          name="message"
          className="contact-input"
          placeholder="What would you like to tell us.."
        />
        <input className="contact-button" type="submit" value="Send message" />
      </form>
    </div>
  );
};

export default ContactForm;
