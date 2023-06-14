import React from "react";
import { NavLink } from "react-router-dom";
import { MDBNavbarItem, MDBNavbarLink } from "mdb-react-ui-kit";

export default function NavbarItemNavLink({ to, className, children }) {
    return (
        <MDBNavbarItem>
        <NavLink to={to}>
          {({ isActive }) => (
            <MDBNavbarLink active={isActive} aria-current="page" className={className}>
              {children}
            </MDBNavbarLink>
          )}
        </NavLink>
      </MDBNavbarItem>
    )
}