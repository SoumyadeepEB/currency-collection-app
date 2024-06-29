import React, { useState, useContext } from "react";
import {
  Navbar,
  Collapse,
  Nav,
  NavbarBrand,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  Button,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/logos/smalllogo.svg";
import "./Dashboard.css";
import { toast, ToastContainer } from 'react-toastify';
import { firebaseLogout } from "../../model/firebase";
import { removeLSData } from "../../model/localStorage";
import { AuthContext } from "../../context/AuthProvider";

const DashHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const {authInfo, setAuthInfo} = useContext(AuthContext);
  const navigate = useNavigate();

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const Handletoggle = () => {
    setIsOpen(!isOpen);
  };
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };

  function handleLogout(){
    firebaseLogout().then(() => {
      removeLSData("authInfo");
      setAuthInfo({});
      toast.error("Logged out successfully!");
      navigate("/login");
    }).catch(() => {
      toast.error("Something went wrong");
    });
  }

  return (
    <Navbar className="theme-bg" dark expand="md">
      <ToastContainer />
      <div className="d-flex align-items-center">
        <NavbarBrand href="/" className="d-lg-none">
          <Logo />
        </NavbarBrand>
        <Button
          className="d-lg-none bg-light text-dark"
          onClick={() => showMobilemenu()}
        >
          <i className="bi bi-list"></i>
        </Button>
      </div>
      <div className="hstack gap-2">
        <Button
          size="sm"
          className="d-sm-block d-md-none bg-light text-dark"
          onClick={Handletoggle}
        >
          {isOpen ? (
            <i className="bi bi-x"></i>
          ) : (
            <i className="bi bi-three-dots-vertical"></i>
          )}
        </Button>
      </div>

      <Collapse navbar isOpen={isOpen}>
        <Nav className="me-auto" navbar />
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          Welcome, Soumyadeep
          <DropdownToggle className="bg-transparent border-0 text-dark">
            <i className="bi bi-person-circle fs-5"></i>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={handleLogout}>Logout</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Collapse>
    </Navbar>
  );
};

export default DashHeader;
