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
import useUser from "../hooks/useUser";
import "./navbar.css";
import { useCookies } from "react-cookie";
import { Context } from "../components/Context";
import NavbarItemButton from "./NavbarItemButton";
// import { useStoredToken } from "../hooks/useStoredToken";

export default function Navbar() {
  const { mutate } = useSWRConfig();
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const [cookie, removeCookie] = useCookies(["OnlineSchoolUser"]);

  const { user, removeUser } = useContext(Context);

  let { data } = useUser(user?._id);
  data && (data = data?.data);
  // const userName = data?.user.name || "";
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
        <MDBNavbarBrand>
          <NavLink to={`${data?.user.role || user?.role}/school`}>
            {({ isActive }) => (
              <MDBNavbarLink className="ms-4 school-logo navbar-title h3">
                {school}
              </MDBNavbarLink>
            )}
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
            <MDBNavbarNav className={"d-flex justify-content-end gap-4 mt-3 py-2 text-center"}>
              <NavbarItemNavLink
                to="/"
                className={
                  theme === "/" && !data?.user?.name && !user && " d-none "
                }
                children="Home"
              />
              <NavbarItemNavLink
                to={`/${data?.user?.role}/school`}
                className={
                  (!data?.user?.name || theme === "/login") &&
                  !user &&
                  " d-none "
                }
                children="My School"
              />
              <NavbarItemNavLink
                to={`/${data?.user?.role || user?.role}/profile`}
                className={
                  (!data?.user?.name || theme === "/login") &&
                  !user &&
                  " d-none "
                }
                children="Profile"
              />
              <NavbarItemNavLink
                to={`/${data?.user?.rolle || user?.role}/lessons`}
                className={
                  (!data?.user?.name || theme === "/login") &&
                  !user &&
                  " d-none "
                }
                children={"Lessons"}
              />
              <NavbarItemNavLink
               to={`/${data?.user?.role || user?.role}/schedule`}
                className={
                  (!data?.user?.name ||
                    !user ||
                    theme === "/login" ||
                    theme.startsWith("/teacher") ||
                    data?.user?.role === "teacher") &&
                  " d-none "
                }
                children={"Schedule"}
              />
              <NavbarItemButton
              loggedIn={data?.user?.name || sessionStorage.getItem("token")}
              theme={theme}
              handleLogout = {handleLogout}
               />
            </MDBNavbarNav>
          )}
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
