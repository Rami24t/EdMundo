import React from "react";
import { MDBNavbarItem, MDBBtn } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function NavbarItemButton({ loggedIn, theme, handleLogout }) {

    return (
        <MDBNavbarItem>
        {!loggedIn && theme !== "/login" ? (
          <Link to="/login">
            <MDBBtn className="navbar-button-login">LOGIN</MDBBtn>
          </Link>
        ) : (
          loggedIn &&
          <MDBBtn
            className="navbar-button-logout"
            type="button"
            onClick={handleLogout}
          >
            LOG OUT
          </MDBBtn>
        )}
      </MDBNavbarItem>
    );
}