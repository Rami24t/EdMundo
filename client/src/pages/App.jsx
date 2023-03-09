import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
  const theme = location.pathname;
  return (
    <div>
      <Navbar />
      <Outlet />
     {theme!=='/login' && <Footer />}
    </div>
  );
};

export default App;
