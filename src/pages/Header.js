import React from "react";
import { Nav, Navbar, Container, NavDropdown, Dropdown } from "react-bootstrap";
import "../index.css";
import logo from "../assets/logo.png";
import { PersonCircle, BoxArrowRight } from "react-bootstrap-icons";

function Header() {
  const UserName = "LastName";
  const UserFirstName = "FirstName";
  const UserRole = "Role";

  return (
    <Navbar sticky="top" className="gradient-custom" variant="dark">
      <Container fluid>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Brand href="./Dashboard">
          <img
            alt="Logo SKT"
            src={logo}
            width="300"
            height="67"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Nav>
          <Nav.Link
            //href="./user/{id}"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <PersonCircle color="bg-dkGray" size={30} />
          </Nav.Link>

          <NavDropdown
            align="end"
            id="dropdown-menu-align-end"
            style={{ color: "darkgray" }}
          >
            <NavDropdown.Item>
              <span className="text-uppercase">{UserRole}</span>
            </NavDropdown.Item>
            <Dropdown.Divider />
            <NavDropdown.Item>
              <span className="fw-bold">{UserName}</span>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <span className="fw-bold">{UserFirstName}</span>
            </NavDropdown.Item>
            <Dropdown.Divider />
            <NavDropdown.Item>
              <Nav.Link eventKey={2} href="./logout">
                <BoxArrowRight color="bg-dkGray" size={30} />{" "}
                <span color="bg-dkGray">Logout</span>
              </Nav.Link>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
