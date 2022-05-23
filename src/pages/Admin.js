import React from "react";
import { Container } from "react-bootstrap";
import SidebarAdmin from "./SidebarAdmin";

function Admin() {
  return (
    <>
      <SidebarAdmin />
      <Container fluid className="viewPort-container"></Container>
    </>
  );
}

export default Admin;
