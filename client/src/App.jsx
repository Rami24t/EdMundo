import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useLocation, Navigate } from "react-router-dom";
import { Context } from "./components/Context";

const App = () => {
  const location = useLocation();
  const theme = location.pathname;
  const { state } = useContext(Context);
  // console.log(state);
  return (
    <div>
      <Navbar />
      {state.user?.name && <p className="opacity-90 position-absolute text-end w-100 pt-1 pe-3" >You're logged in as <span className="text-black-50">{state.user?.name}</span></p>}
      {theme === "/login" || theme === "/" || state.user?.name ? (
        <Outlet />
      ) : (
        <Navigate to="/login" />
      )}
      {theme !== "/login" && <Footer />}
    </div>
  );
};

export default App;
