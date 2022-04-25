import React from "react";
import { Container, Nav, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import MissionsList from "./MissionsList.component";

// Function to load and render Missions component as an Accordion
function MissionsGlobal() {
  return (
    <Container fluid>
      <Navbar sticky="top" className="sticky-nav" bg="light" variant="light">
        <Container className="d-flex flex-wrap">
          <Row>
            <Navbar.Brand>
              <h2>Missions</h2>
            </Navbar.Brand>
          </Row>
          <Row className="">
            <Nav className="d-flex justify-content-around">
              <Nav.Link as={Link} to="">
                New
              </Nav.Link>
              <Nav.Link>select</Nav.Link>
              <Nav.Link>Delete</Nav.Link>
            </Nav>
          </Row>
        </Container>
      </Navbar>
      <Container className="text-center"></Container>
      <MissionsList />
    </Container>
  );
}

export { MissionsGlobal };
