import React, { useState, useContext} from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSWRConfig } from "swr";
import axios from "axios";
import { useLocation } from "react-router-dom";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import useUser from "../hooks/useUser";
import "./navbar.css";
import { useCookies } from "react-cookie";
import { Context } from "../components/Context";
import { useStoredToken } from "../hooks/useStoredToken";

export default function Navbar() {
  const { mutate } = useSWRConfig();
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const [cookie, removeCookie] = useCookies(["OnlineSchoolUser"]);

  const { user, removeUser } = useContext(Context);

  let { data } = useUser(user?._id);
  data && (data = data?.data);
  // const userName = data?.user.name || "";
  const school = data?.school?.name || JSON.parse(sessionStorage.getItem("school"))?.name || "";

  const navigate = useNavigate();

  const [showNav, setShowNav] = useState(false);
  const location = useLocation();
  const theme = location.pathname;

  const {token, removeToken} = useStoredToken();

  // const handleLogout = () => {
  //   removeToken();
  //   removeUser();
  //   removeCookie("OnlineSchoolUser");
  //   axios
  //     .post(`${baseUrl}/logout`)
  //     .then(() => {
  //       mutate("user", null, false);
  //       navigate("/login");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <MDBNavbar expand="lg" sticky>
      <MDBContainer fluid className="navbar-container">

       <MDBNavbarBrand>
 <Link to="/">
          <h2 className="navbar-title">
            <span className="navbar-title-span"> Ed</span>Mundo
          </h2>
        </Link>
        </MDBNavbarBrand>
        <MDBNavbarBrand>
        <NavLink to={`${data?.user.role || user?.role}/school`}>
        {({ isActive }) => (
        <MDBNavbarLink 
         className="ms-4 school-logo navbar-title h3">{school}
        </MDBNavbarLink>)}
         </NavLink>
         </MDBNavbarBrand>
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
                        theme === "/" && !data?.user?.name && !user && " d-none "
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
                <NavLink to={`/${data?.user?.role}/school`}>
                  {({ isActive }) => (
                    <MDBNavbarLink
                      className={
                        (!data?.user?.name || theme === "/login") && !user && " d-none "
                      }
                      active={isActive}
                    >
                      My School
                    </MDBNavbarLink>
                  )}
                </NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <NavLink to={`/${data?.user?.role || user?.role}/profile`}>
                  {({ isActive }) => (
                    <MDBNavbarLink
                      className={
                        (!data?.user?.name || theme === "/login") && !user && " d-none "
                      }
                      active={isActive}
                    >
                      Profile
                    </MDBNavbarLink>
                  )}
                </NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <NavLink to={`/${data?.user?.role || user?.role}/lessons`}>
                  {({ isActive }) => (
                    <MDBNavbarLink
                      href="#"
                      className={
                        (!data?.user?.name || theme === "/login") && !user && " d-none "
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
                  !user ||
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
                    <MDBBtn className="navbar-button-login">LOGIN</MDBBtn>
                  )}
                </Link>
                  {(data?.user?.name || token) && (
                    <MDBBtn
                      className="navbar-button-logout"
                      type="button"
                      onClick={() => {
                        // Reset the SWR cache
                        mutate(`${baseUrl}/api/users/getData`, null, false)
                          .then(
                            axios
                              .get(`${baseUrl}/api/users/logout`, { withCredentials: true })
                              .then((res) => {
                                cookie.OnlineSchoolUser && removeCookie("OnlineSchoolUser");
                                if(res.data.success){
                                  console.log(removeToken());
                                  removeToken();
                                  removeUser();
                                  sessionStorage.removeItem("school");
                                  sessionStorage.removeItem("scheduleSettings");
                                  navigate("/");
                                }
                              }),
                          )
                          .catch((err) => {
                            console.log(err);
                          });
                      }}
                    >
                      LOG OUT
                    </MDBBtn>
                  )}
              </MDBNavbarItem>
            </MDBNavbarNav>
          )}
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
