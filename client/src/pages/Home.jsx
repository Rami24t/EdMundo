import React from "react";
import { Outlet } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
