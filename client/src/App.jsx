import React, { useContext, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useLocation } from "react-router-dom";
// import { Context } from "./components/Context";
// import useUser from "./hooks/useUser";
// import { MDBSpinner } from "mdb-react-ui-kit";
// import { useSWRConfig } from "swr";

const App = () => {
  // const { state, dispatch } = useContext(Context);
  const location = useLocation();
  const theme = location.pathname;

  // const { isLoading, error, data } = useUser();
  // useEffect(() => {
  //   if (isLoading) dispatch({ type: "LOADING" });
  //   if (error) dispatch({ type: "ERROR" });
  //   if (data) {
  //     console.log("useUser ~ data", data.data);
  //     dispatch({ type: "DATA", payload: data.data });
  //     dispatch({ type: "CLEAR" });
  //   }
  // }, [isLoading, error, data, dispatch]);
  
  // console.log(' d.e.l.  ', { data, error, isLoading });


  return (
    <div>
      <Navbar />

      {/* {((theme === "/login" || theme==="/" || theme==='/student' ) || state.user?.name) && <Outlet />} */}
      <Outlet />

      {theme !== "/login" && <Footer />}
    </div>
  );
};

export default App;
