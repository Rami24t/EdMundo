import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useLocation, Navigate } from "react-router-dom";
import { Context } from "./components/Context";
// import useUser from "./hooks/useUser";
// import { MDBSpinner } from "mdb-react-ui-kit";
// import { useSWRConfig } from "swr";

const App = () => {
  const location = useLocation();
  const theme = location.pathname;
  const { state } = useContext(Context);
  // console.log(state);
  return (
    <div>
      <Navbar />
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
