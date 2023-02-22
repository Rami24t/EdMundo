import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
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

export default function Navbar({ theme }) {
  const [showNav, setShowNav] = useState(false);

  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand href="#">Navbar</MDBNavbarBrand>
        <MDBNavbarToggler
          type="button"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNav(!showNav)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNav}>
          <MDBNavbarNav className="d-flex justify-content-end gap-4 ">
            <MDBNavbarItem>
              <NavLink to="/">
                {({ isActive }) => (
                  <MDBNavbarLink active={isActive} aria-current="page">
                    Home
                  </MDBNavbarLink>
                )}
              </NavLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <NavLink to="/teacher/profile">
                {({ isActive }) => (
                  <MDBNavbarLink
                    active={isActive}
                    className={theme === "home" && " d-none "}
                  >
                    Profile
                  </MDBNavbarLink>
                )}
              </NavLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink
                href="#"
                className={theme === "home" && " d-none "}
              >
                Lessons
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className={theme === "home" && " d-none "}>
              <MDBNavbarLink href="#">Schedule</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link to="/login">
                <MDBBtn outline color="success" className="me-2" type="button">
                  Log In/Out
                </MDBBtn>
              </Link>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
