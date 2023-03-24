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
import DisplayItemCard from "./RestaurantMenuCards/DisplayItemCard";
import { MenuState } from "../../context/MenuContext";

const RestaurantHeader = (props) => {
  let userId = props?.userId;
  let tableNumber = props?.tableNumber;
  let TableNumber = props?.TableNumber;
  let resName = props?.resName;
  let resImage = props?.resImage;
  let menu_index = props?.menu_index;
  let type = props?.type;
  let menu = props?.menu;
  let resUserName = props?.resUserName;
  let currency = props?.currency;

  const [show, setShow] = useState(false);
  const [dataFromChild, setDataFromChild] = useState("");

  const [cartCount, setCartCount] = useState();

  const { adder, setAdder } = MenuState();

  const toggleOffcanvas = () => {
    setShow(!show);
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     getCartLength();
  //   }, 2000);
  //   return () => clearInterval(interval);
  // }, []);

  useEffect(() => {
    getCartLength();
  }, [adder]);

  async function getCartLength() {
    try {
      let getCartLength = await apiFunctions.GET_REQUEST(
        BASE_URL + API_URL.GET_CART_LENGTH + tableNumber
      );
      let res = getCartLength.data.cartLength;
      console.log(res, "cartLength");
      setCartCount(res);
      // setState(true);
      return true;
    } catch (err) {
      console.log("An error occurred while fetching sections", err.message);
    }
  }

  return (
    <>
      <Navbar className="navbar" sticky="top">
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
              <div className="d-flex justify-content-around align-items-center">
                <CgShoppingCart size={20} color="white" />
                <span className="ms-2 text-white">
                  ({cartCount ? cartCount : 0})
                </span>
              </div>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

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
        resUserName={resUserName}
        currency={currency}
      />
    </>
  );
};

export default RestaurantHeader;
