import React from "react";
import ContactForm from "../components/ContactForm";
import Description from "../components/Description";
import Hero from "../components/Hero";
import Slider from "../components/Slider";

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
