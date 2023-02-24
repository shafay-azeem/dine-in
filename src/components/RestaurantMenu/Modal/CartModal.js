import { MinusIcon } from "@chakra-ui/icons";
import { useToast } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import Offcanvas from "react-bootstrap/Offcanvas";
import { AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";
import { createSearchParams, useNavigate } from "react-router-dom";
import { API_URL, BASE_URL } from "../../../global/Constant";
import apiFunctions from "../../../global/GlobalFunction";
import "../../../App.css";
import { MenuState } from "../../../context/MenuContext";

const CartModal = ({ show, toggleOffcanvas, ...props }) => {
  let userId = props?.userId;
  let tableNumber = props?.tableNumber;
  console.log(tableNumber, "tableNumber CartModal ");
  const toast = useToast();
  const { adder, setAdder } = MenuState();

  console.log(adder, "chnager ");
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);
  const [cartItemList, setCartItemList] = useState([]);
  const [cartTotal, setCartTotal] = useState();
  const [cartId, setCartId] = useState();
  const [changer, setChanger] = useState();
  const [cartDelete, setCartDelete] = useState(false);

  const navigate = useNavigate();
  const img = {
    KFCcard: require("../../Assets/burger.jpg"),
  };

  useEffect(() => {
    getAllCartByTableNumber();
  }, [changer, adder]);

  async function getAllCartByTableNumber() {
    // setLoading(false);
    // setLoading1(false);
    try {
      let getCartByTableNumber = await apiFunctions.GET_REQUEST(
        BASE_URL + API_URL.GET_CART_BY_TABLE_NUMBER + tableNumber
      );
      let res = getCartByTableNumber.data.cart;
      console.log(res.cartItems.length, "res");

      if (res.cartItems?.length > 0) {
        setLoading1(true);
        setLoading(true);
      }

      if (res.cartItems?.length <= 0) {
        setLoading1(false);
        setLoading(false);
      }

      setCartItemList(res.cartItems);
      setCartTotal(res.total_Price);
      setCartId(res._id);

      console.log(cartItemList);
      return true;
    } catch (err) {
      console.log("An error occurred while fetching carts", err.message);
    }
  }

  async function cartIncrementDecrement(id, y, size) {
    console.log(size, y);
    try {
      let cartIncrementDecrement = await apiFunctions.GET_REQUEST(
        BASE_URL +
          API_URL.CART_INCREMENT_DECREMENT +
          `${id}?cartId=${cartId}&cartStatus=${y}&itemSize=${size}`
      );
      setChanger(Math.random());
    } catch (err) {
      console.log("An error occurred while fetching carts", err.message);
    }
  }

  const handleRemove = async (id) => {
    await apiFunctions
      .DELETE_REQUEST(
        BASE_URL +
          API_URL.DELETE_CARTITEM_BY_CART_ITEM_ID +
          `${id}?cartId=${cartId}`
      )
      .then((res) => {
        if (res.data.success == true) {
          toast({
            position: "top",
            title: `Cart Deleted SuccessFully`,
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          setChanger(Math.random());
          return true;
        } else {
          toast({
            position: "top",
            title: `There Some Error`,
            status: "error",
            duration: 9000,
            isClosable: true,
          });
          return false;
        }
      });
  };

  const navigateToOrderPage = () => {
    navigate({
      pathname: "/OrderPage",
      search: createSearchParams({
        userId,
        tableNumber,
      }).toString(),
    });
  };

  return (
    <>
      <div>
        <Offcanvas scroll={true} show={show} placement="end">
          <Offcanvas.Header closeButton onClick={toggleOffcanvas}>
            <Offcanvas.Title>Your Cart</Offcanvas.Title>
            <span
              className="me-2"
              style={{
                marginLeft: "150px",
                fontWeight: "600",
                fontSize: "20px",
              }}
            >
              {cartTotal ? <div>Rs {cartTotal}</div> : null}
              {/* <div>Rs {cartTotal}</div> */}
            </span>
          </Offcanvas.Header>
          {loading ? (
            <Offcanvas.Body>
              {cartItemList?.map((x, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      flexGrow: 0,
                    }}
                  >
                    <div
                      className="row"
                      style={{
                        backgroundColor: "#ffffff",
                        padding: "20px 10px",
                        borderRadius: "10px",
                        margin: "5px",
                        boxShadow:
                          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
                      }}
                    >
                      <div className="col-3">
                        <img
                          src={x.item_Img}
                          style={{ width: "60px", height: "60px" }}
                          alt="img"
                        />
                      </div>

                      <div className="col-6">
                        <span className="me-2">
                          {x.item_Name} {x.item_Size}
                        </span>{" "}
                        <br />
                        <div className="d-flex justify-content-start align-items-center mt-2">
                          <span className="me-2">
                            {x.item_Qty == 1 ? (
                              <AiOutlineDelete
                                size={20}
                                color="#0000FF"
                                onClick={() => handleRemove(x._id)}
                              />
                            ) : (
                              <MinusIcon
                                size={20}
                                color="#0000FF"
                                onClick={() =>
                                  cartIncrementDecrement(
                                    x._id,
                                    "decrement",
                                    x.item_Size
                                  )
                                }
                              />
                            )}
                          </span>
                          <span className="me-2">{x.item_Qty}</span>
                          <span className="me-2">
                            <AiOutlinePlus
                              size={20}
                              color="#0000FF"
                              onClick={() =>
                                cartIncrementDecrement(
                                  x._id,
                                  "increment",
                                  x.item_Size
                                )
                              }
                            />
                          </span>
                        </div>
                      </div>

                      <div className="col-3">
                        <span>Rs {x.itemPrice_Total}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Offcanvas.Body>
          ) : (
            <Offcanvas.Body>
              <p>Cart Is Empty</p>
            </Offcanvas.Body>
          )}

          {loading1 ? (
            <div className="container d-flex justify-content-center align-items-center mt-2 mb-2">
              <button
                className="Button"
                onClick={navigateToOrderPage}
                type="button"
              >
                View Your Cart
              </button>
            </div>
          ) : null}
        </Offcanvas>
      </div>
    </>
  );
};

export default CartModal;
