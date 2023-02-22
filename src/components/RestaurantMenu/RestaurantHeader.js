import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartModal from "./Modal/CartModal";

const RestaurantHeader = () => {
  const [show, setShow] = useState(false);
  const toggleOffcanvas = () => {
    setShow(!show);
  };

  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand>Navbar</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link onClick={toggleOffcanvas} className="text-end">
            Cart
          </Nav.Link>
        </Nav>
        <CartModal show={show} toggleOffcanvas={toggleOffcanvas} />
      </Container>
    </Navbar>
  );
};

export default RestaurantHeader;
