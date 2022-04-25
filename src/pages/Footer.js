import React from "react";
import { Navbar } from "react-bootstrap";

function Footer() {
  return (
    <Navbar
      className="navbar bg-dkGray pr-4"
      fixed="bottom"
      variant="dark"
      style={{ display: "flex", flexDirection: "row", justifyContent: "right" }}
    >
      <span>SKT Aeroshutter © Copyright 2022</span>
    </Navbar>
  );
}

export default Footer;
