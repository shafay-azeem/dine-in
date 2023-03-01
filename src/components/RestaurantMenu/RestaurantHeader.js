import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartModal from "./Modal/CartModal";
import { CgShoppingCart } from "react-icons/cg";
import apiFunctions from "../../global/GlobalFunction";
import { API_URL, BASE_URL } from "../../global/Constant";
import { useEffect } from "react";

const RestaurantHeader = (props) => {
  let userId = props?.userId;
  let tableNumber = props?.tableNumber;
  let resName = props?.resName;

  const [show, setShow] = useState(false);

  const [cartCount, setCartCount] = useState();

  const toggleOffcanvas = () => {
    setShow(!show);
  };

  // useEffect(() => {
  //   getCartLength();
  // }, [props?.changer]);

  // async function getCartLength() {
  //   try {
  //     let getCartLength = await apiFunctions.GET_REQUEST(
  //       BASE_URL + API_URL.GET_CART_LENGTH + tableNumber
  //     );
  //     let res = getCartLength.data;
  //     console.log(res, "jj");
  //     // setCartCount(res);
  //     // setState(true);
  //     return true;
  //   } catch (err) {
  //     console.log("An error occurred while fetching sections", err.message);
  //   }
  // }

  return (
    <Navbar sticky="top" bg="light" variant="light" className="px-2">
      <Navbar.Brand>
        Table Number : {tableNumber} {resName}
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav.Link onClick={toggleOffcanvas} className="text-end">
          <CgShoppingCart size={20} />
        </Nav.Link>

        <Nav.Link onClick={toggleOffcanvas} className="text-end ms-2">
          Cart
        </Nav.Link>
      </Navbar.Collapse>

      <CartModal
        show={show}
        toggleOffcanvas={toggleOffcanvas}
        userId={userId}
        tableNumber={tableNumber}
        resName={resName}
      />
    </Navbar>
  );
};

export default RestaurantHeader;
