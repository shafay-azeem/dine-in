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

const CartModal = ({ show, toggleOffcanvas, ...props }) => {
  let userId = props?.userId;
  const toast = useToast();
  let Adder = props?.adder;

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
  }, [changer]);

  async function getAllCartByTableNumber() {
    try {
      let getCartByTableNumber = await apiFunctions.GET_REQUEST(
        BASE_URL + API_URL.GET_CART_BY_TABLE_NUMBER + 1
      );
      let res = getCartByTableNumber.data.cart;
      console.log(res, "res");

      setCartItemList(res.cartItems);
      setCartTotal(res.total_Price);
      setCartId(res._id);
      //console.log(res._id);
      console.log(cartItemList);
      return true;
    } catch (err) {
      console.log("An error occurred while fetching carts", err.message);
    }
  }

  async function cartIncrementDecrement(id, y) {
    console.log(id, y);
    try {
      let cartIncrementDecrement = await apiFunctions.GET_REQUEST(
        BASE_URL +
        API_URL.CART_INCREMENT_DECREMENT +
        `${id}?cartId=${cartId}&cartStatus=${y}`
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
              Rs {cartTotal}
            </span>
          </Offcanvas.Header>
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
                      <span className="me-2">{x.item_Name}</span> <br />
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
                                cartIncrementDecrement(x._id, "decrement")
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
                              cartIncrementDecrement(x._id, "increment")
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
          <button
            onClick={navigateToOrderPage}
            style={{
              backgroundColor: "#0000FF",
              color: "white",
              borderRadius: "10px",
              borderColor: "#FE0000",
              height: "40px",
              marginBottom: "15px",
              width: "90%",
              alignSelf: "center",
            }}
            type="button"
          >
            View Your Cart
          </button>
        </Offcanvas>
      </div>
    </>
  );
};

export default CartModal;