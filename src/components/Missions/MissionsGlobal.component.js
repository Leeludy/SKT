import React from "react";
import { Container, Nav, Row } from "react-bootstrap";
import MissionsList from "./MissionsList.component";
import { PlusSquareFill } from "react-bootstrap-icons";
import { Link, NavLink } from "react-router-dom";

// Function to load and render Missions component as an Accordion
function MissionsGlobal() {
  return (
    <Container fluid>
      <Container fluid className="mission-header">
        <h2>Missions</h2>
        <Row className="">
          <Nav className="d-flex justify-content-around">
            <Link to="./new">
              {/* <Nav.Link
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "black",
                }}
              > */}
              <PlusSquareFill color="bg-green" size={30} />
              New
              {/* </Nav.Link> */}
            </Link>
          </Nav>
        </Row>
      </Container>
      <Container fluid className="list-position">
        <MissionsList />
      </Container>
    </Container>
  );
}

export { MissionsGlobal };
