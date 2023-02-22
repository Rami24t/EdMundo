import React from "react";
import Navbar from "../components/Navbar.jsx";
import LoginForm from "../components/LoginForm.jsx";
import Footer from "../components/Footer.jsx";

const Login = () => {
  return (
    <>
      <Navbar theme={"login"} />
      <LoginForm />
      <Footer />
    </>
  );
};

export default Login;
