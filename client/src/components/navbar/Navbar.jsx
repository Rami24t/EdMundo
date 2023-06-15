import React, { useState, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import NavbarItemNavLink from "./NavbarItemNavLink";
import { useSWRConfig } from "swr";
import axios from "axios";
import { useLocation } from "react-router-dom";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarLink,
  MDBCollapse,
  MDBIcon,
} from "mdb-react-ui-kit";
import useUser from "../../hooks/useUser";
import { useCookies } from "react-cookie";
import { Context } from "../Context";
import NavbarItemButton from "./NavbarItemButton";
// import { useStoredToken } from "../hooks/useStoredToken";
import "./navbar.css";

export default function Navbar() {
  const { mutate } = useSWRConfig();
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const [cookie, removeCookie] = useCookies(["OnlineSchoolUser"]);

  const { user, removeUser } = useContext(Context);

  let { data } = useUser(user?._id);
  data && (data = data?.data);
  // const userName = data?.user.name || "";
  const dataUserName = data?.user?.name;
  const dataUserRole = data?.user?.role;

  const school =
    data?.school?.name ||
    JSON.parse(sessionStorage.getItem("school"))?.name ||
    "";

  const navigate = useNavigate();

  const [showNav, setShowNav] = useState(false);
  const location = useLocation();
  const theme = location.pathname;

  // const {token, removeToken} = useStoredToken();
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
  const handleLogout = () => {
    setShowNav(!showNav)
      removeUser();
      sessionStorage.removeItem("school");
      sessionStorage.removeItem("scheduleSettings");
      sessionStorage.removeItem("token");
      mutate(`${baseUrl}/api/users/getData`, null, false).then(
        () => {
          axios
            .get(`${baseUrl}/api/users/logout`, {
              withCredentials: true,
            })
            .then((res) => {
              cookie.OnlineSchoolUser &&
                removeCookie("OnlineSchoolUser");
              if (res.data.success) navigate("/");
            })
            .catch((err) => {
              console.log(err);
            });
        }
      );
    };

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
        {(dataUserRole || user?.role) && 
        <MDBNavbarBrand>
          <NavLink to={`${dataUserRole || user?.role}/school`}>
            {({ isActive }) => (
              <MDBNavbarLink className="ms-4 school-logo navbar-title h3">
                {school}
              </MDBNavbarLink>
            )}
          </NavLink>
        </MDBNavbarBrand>}
        {theme !=="/login" && dataUserName &&
        <MDBNavbarToggler
          type="button"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNav(!showNav)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>}
        {/* { dataUserName && */}
        <MDBCollapse navbar show={showNav}>
          {theme !== "/login" && (
            <MDBNavbarNav className={"d-flex justify-content-end gap-4 mt-3 py-2 text-center"}>

              <NavbarItemNavLink
                to="/"
                hidden={
                  theme === "/" && !dataUserName && !user
                }
                children="Home"
              />
              <NavbarItemNavLink
                to={`/${dataUserRole}/school`}
                hidden={
                  (!dataUserName || theme === "/login") &&
                  !user
                }
                children="My School"
              />
              <NavbarItemNavLink
                to={`/${dataUserRole || user?.role}/profile`}
                hidden={
                  (!dataUserName || theme === "/login") &&
                  !user
                }
                children="Profile"
              />
              <NavbarItemNavLink
                to={`/${data?.user?.rolle || user?.role}/lessons`}
                hidden={
                  (!dataUserName || theme === "/login") &&
                  !user
                }
                children={"Lessons"}
              />
              <NavbarItemNavLink
               to={`/${dataUserRole || user?.role}/schedule`}
                hidden={
                  (!dataUserName ||
                    !user ||
                    theme === "/login" ||
                    theme.startsWith("/teacher") ||
                    dataUserRole === "teacher")
                }
                children={"Schedule"}
              />
              {dataUserName && <NavbarItemButton
              loggedIn={sessionStorage.getItem("token")}
              theme={theme}
              handleLogout = {handleLogout}
               />}
            </MDBNavbarNav>
          )}
        </MDBCollapse>
        {!dataUserName && <div className=" position-absolute end-0 me-3 " ><NavbarItemButton
              loggedIn={sessionStorage.getItem("token")}
              theme={theme}
               /></div>}
      </MDBContainer>
    </MDBNavbar>
  );
}
