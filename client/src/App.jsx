import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useLocation } from "react-router-dom";
import { Context } from "./components/Context";
import useUser from "./hooks/useUser";
import { MDBSpinner } from "mdb-react-ui-kit";

const App = () => {
  const { state } = useContext(Context);
  const location = useLocation();
  const theme = location.pathname;
  let isLoading = false;
  isLoading = useUser(state?.user?._id || "");

  return (
    <div>
      <Navbar />
      {theme !== "/" && isLoading && (
        <MDBSpinner grow style={{ width: "3rem", height: "3rem" }}>
          <span className='visually-hidden'>Loading...</span>
        </MDBSpinner>
      )}
      <Outlet />
      {theme !== "/login" && <Footer />}
    </div>
  );
};

export default App;
