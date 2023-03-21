import React, { useState, useContext } from "react";
import { Context } from "./Context";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSWRConfig } from "swr";
import axios from "axios";
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
import useUser from "../hooks/useUser";
import "./navbar.css";

export default function Navbar() {
  const { mutate } = useSWRConfig();
  const baseUrl = process.env.REACT_APP_BASE_URL;

  let { data } = useUser();
  data && (data = data?.data);
  const userName = data?.user.name || "";
  const school = data?.school.name || "";

  const navigate = useNavigate();

  const [showNav, setShowNav] = useState(false);
  const location = useLocation();
  const theme = location.pathname;

  return (
    <MDBNavbar expand="lg" sticky>
      <MDBContainer fluid className="navbar-container">
        <NavLink to="/">
          <h2 className="navbar-title">
            <span className="navbar-title-span"> Ed</span>Mundo
          </h2>
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
                      className={
                        theme === "/" && !data?.user?.name && " d-none "
                      }
                      active={isActive}
                      aria-current="page"
                    >
                      Home
                    </MDBNavbarLink>
                  )}
                </NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <NavLink to={`/${data?.user?.role}/profile`}>
                  {({ isActive }) => (
                    <MDBNavbarLink
                      className={
                        (!data?.user?.name || theme === "/login") && " d-none "
                      }
                      active={isActive}
                    >
                      Profile
                    </MDBNavbarLink>
                  )}
                </NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <NavLink to={`/${data?.user?.role}/lessons`}>
                  {({ isActive }) => (
                    <MDBNavbarLink
                      href="#"
                      className={
                        (!data?.user?.name || theme === "/login") && " d-none "
                      }
                      active={isActive}
                    >
                      Lessons
                    </MDBNavbarLink>
                  )}
                </NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem
                className={
                  (!data?.user?.name ||
                    theme === "/login" ||
                    theme.startsWith("/teacher") ||
                    data?.user?.role === "teacher") &&
                  " d-none "
                }
              >
                <NavLink to="/student/schedule">
                  {({ isActive }) => (
                    <MDBNavbarLink href="#">Schedule</MDBNavbarLink>
                  )}
                </NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link to="/login" className={theme === "/login" && "d-none"}>
                  {!data?.user?.name && (
                    <MDBBtn
                      outline
                      color="success"
                      className="me-2"
                      type="button"
                    >
                      Log In
                    </MDBBtn>
                  )}
                  {data?.user?.name && (
                    <MDBBtn
                      outline
                      color="success"
                      className="me-2"
                      type="button"
                      onClick={() => {
                        // Delete the authentication cookie
                        document.cookie =
                          "OnlineSchoolUser=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                        // Reset the SWR cache
                        mutate(`${baseUrl}/api/users/getData`, null, false)
                          .then(
                            axios
                              .get(`${baseUrl}/api/users/logout`)
                              .then((res) => {
                                // dispatch({ type: "LOGOUT" });
                                // dispatch({ type: "CLEAR" });
                              })
                          )
                          .catch((err) => {
                            console.log(err);
                          });
                        navigate("/login");
                      }}
                    >
                      Log Out
                    </MDBBtn>
                  )}
                </Link>
              </MDBNavbarItem>
            </MDBNavbarNav>
          )}
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
