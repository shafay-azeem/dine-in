import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartModal from "./Modal/CartModal";
import { CgShoppingCart } from 'react-icons/cg';

const RestaurantHeader = (props) => {
  let userId = props?.userId;
  let tableNumber = props?.tableNumber
  const [show, setShow] = useState(false);
  const toggleOffcanvas = () => {
    setShow(!show);
  };

  return (
    // <Navbar bg="light" variant="light">
    //   <Container>
    //     <Navbar.Brand>Navbar</Navbar.Brand>
    //     <Nav className="justify-content-end">
    //       <Nav.Link onClick={toggleOffcanvas} className="text-end">
    //         Cart
    //       </Nav.Link>
    //     </Nav>
    //     <CartModal
    //       show={show}
    //       toggleOffcanvas={toggleOffcanvas}
    //       userId={userId}
    //     />
    //   </Container>
    // </Navbar>


    <Navbar sticky="top" bg="light" variant="light">
      <Container>
        <Navbar.Brand>Navbar</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link onClick={toggleOffcanvas} className="text-end">
            <CgShoppingCart size={20} />
          </Nav.Link>
          <Nav.Link onClick={toggleOffcanvas} className="text-end ms-2">
            Cart
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
      <CartModal
        show={show}
        toggleOffcanvas={toggleOffcanvas}
        userId={userId}
        tableNumber={tableNumber}
      />
    </Navbar>
  );
};

export default RestaurantHeader;