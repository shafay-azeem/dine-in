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
import { Badge } from "react-bootstrap";

const RestaurantHeader = (props) => {
  let userId = props?.userId;
  let tableNumber = props?.tableNumber;
  let TableNumber = props?.TableNumber;
  let resName = props?.resName;
  let resImage = props?.resImage;
  let menu_index = props?.menu_index;
  let type = props?.type;
  let menu = props?.menu;

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
  //     let res = getCartLength.data.cartLength;
  //     // console.log(res, "cartLength");
  //     setCartCount(res);
  //     // setState(true);
  //     return true;
  //   } catch (err) {
  //     console.log("An error occurred while fetching sections", err.message);
  //   }
  // }

  return (
    <>
      <Navbar className="navbar">
        <Container>
          <Navbar.Brand
            style={{ color: "white", fontWeight: 600, fontSize: "20px" }}
          >
            {resName}
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="mx-auto">
            {type != "dinein" ? (
              <Navbar.Text
                className="text-center"
                style={{ color: "white", fontWeight: 400, fontSize: "18px" }}
              >
                Type : {type}
              </Navbar.Text>
            ) : (
              <Navbar.Text
                className="text-center"
                style={{ color: "white", fontWeight: 400, fontSize: "18px" }}
              >
                Table # : {TableNumber}
              </Navbar.Text>
            )}
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text
              onClick={toggleOffcanvas}
              style={{ cursor: "pointer" }}
            >
              {/* <CgShoppingCart size={20} style={{ color: "white" }} /> (
              {cartCount}) */}
              {/* <Badge pill bg="primary">
                {cartCount}
              </Badge> */}
              <CgShoppingCart size={20} color="white" />
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <Navbar sticky="top" bg="light" variant="light" className="px-2">
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
      </Navbar> */}
      <CartModal
        show={show}
        toggleOffcanvas={toggleOffcanvas}
        userId={userId}
        tableNumber={tableNumber}
        TableNumber={TableNumber}
        resName={resName}
        menu_index={menu_index}
        resImage={resImage}
        type={type}
        menu={menu}
      />
    </>
  );
};

export default RestaurantHeader;
