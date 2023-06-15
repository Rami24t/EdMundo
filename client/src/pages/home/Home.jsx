import React from "react";
import ContactForm from "../../components/contact-form/ContactForm";
import Description from "../../components/home/Description";
import Hero from "../../components/home/Hero";
import Slider from "../../components/home/Slider";

const Home = () => {
  return (
    <div>
      <Hero />
      <Slider />
      <Description />
      <ContactForm />
    </div>
  );
};

export default Home;
