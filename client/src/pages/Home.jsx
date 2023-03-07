import React from "react";
import ContactForm from "../components/ContactForm";
import Hero from "../components/Hero";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Hero />
      <Slider />
      <ContactForm />
    </div>
  );
};

export default Home;
