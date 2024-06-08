import React from "react";
import {
  Navbar,
  NavbarBrand,
} from "reactstrap";
import logo from "../../assets/images/logos/logo.png";

export default function AuthHeader() {
  return (
    <Navbar className="bg-light text-dark" dark expand="md">
      <div className="d-flex align-items-center">
        <NavbarBrand href="/" >
          <img src={logo} alt="logo" className="logo" />
        </NavbarBrand>
      </div>
    </Navbar>
  )
}
