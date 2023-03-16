import React, { useState, useContext } from "react";
import { Context } from "./Context";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";


export default function Navbar() {
  
  const { state, dispatch } = useContext(Context);

  const [showNav, setShowNav] = useState(false);
  const location = useLocation();
  const theme = location.pathname;
  // alert(theme);
  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer fluid>
        <NavLink to="/">
          <MDBNavbarBrand>EdMundo</MDBNavbarBrand>
        </NavLink>
        <MDBNavbarToggler
          type="button"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNav(!showNav)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNav}>
          {theme !== "/login" && (
            <MDBNavbarNav className="d-flex justify-content-end gap-4 ">
              <MDBNavbarItem>
                <NavLink to="/">
                  {({ isActive }) => (
                    <MDBNavbarLink
                      className={theme === "/" && " d-none "}
                      active={isActive}
                      aria-current="page"
                    >
                      Home
                    </MDBNavbarLink>
                  )}
                </NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <NavLink to="/teacher/profile">
                  {({ isActive }) => (
                    <MDBNavbarLink
                      className={
                        (theme === "/" || theme === "/login") && " d-none "
                      }
                      active={isActive}
                    >
                      Profile
                    </MDBNavbarLink>
                  )}
                </NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink
                  href="#"
                  className={
                    (theme === "/" || theme === "/login") && " d-none "
                  }
                >
                  Lessons
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem
                className={(theme === "/" || theme === "/login" || theme.startsWith('/teacher') || state.user?.role ==='teacher') && " d-none "}
              >
                <NavLink to="/student/schedule">
                  {({ isActive }) => (
                    <MDBNavbarLink href="#">Schedule</MDBNavbarLink>
                  )}
                </NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link to="/login" className={theme === "/login" && "d-none"}>
                  {!state.user?.name && <MDBBtn
                    outline
                    color="success"
                    className="me-2"
                    type="button"
                  >
                    Log In
                  </MDBBtn>}
                  {state.user.name && <MDBBtn
                    outline
                    color="success"
                    className="me-2"
                    type="button"
                  >
                    Log Out
                  </MDBBtn>}
                </Link>
              </MDBNavbarItem>
            </MDBNavbarNav>
          )}
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
