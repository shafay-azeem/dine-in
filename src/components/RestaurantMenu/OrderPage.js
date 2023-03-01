import { useToast } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Form } from "react-bootstrap";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { API_URL, BASE_URL } from "../../global/Constant";
import apiFunctions from "../../global/GlobalFunction";
import RestaurantHeader from "./RestaurantHeader";
import "../../App.css";
import { MenuState } from "../../context/MenuContext";
import CartModal from "./Modal/CartModal";

const OrderPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const [searchparams] = useSearchParams();
  const [cartItemList, setCartItemList] = useState([]);
  const [changer, setChanger] = useState();
  const [cartTotal, setCartTotal] = useState();
  const [cartId, setCartId] = useState();
  const [instructions, setInstruction] = useState();
  const [customerName, setCustomerName] = useState();

  const { adder, setAdder } = MenuState();

  let userId = searchparams.get("userId");
  let tableNumber = searchparams.get("tableNumber");

  const img = {
    KFCcard: require("../Assets/burger.jpg"),
  };

  useEffect(() => {
    getAllCartByTableNumber();
  }, [changer, adder]);

  async function cartIncrementDecrement(id, y, size) {
    //console.log(id, y);
    try {
      let cartIncrementDecrement = await apiFunctions.GET_REQUEST(
        BASE_URL +
          API_URL.CART_INCREMENT_DECREMENT +
          `${id}?cartId=${cartId}&cartStatus=${y}&itemSize=${size}`
      );
      setChanger(Math.random());
      setAdder(Math.random());
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

  async function getAllCartByTableNumber() {
    try {
      let getCartByTableNumber = await apiFunctions.GET_REQUEST(
        BASE_URL + API_URL.GET_CART_BY_TABLE_NUMBER + tableNumber
      );
      let res = getCartByTableNumber.data.cart;

      setLoading(true);

      setCartItemList(res.cartItems);
      setCartTotal(res.total_Price);
      setCartId(res._id);

      return true;
    } catch (err) {
      console.log("An error occurred while fetching carts", err.message);
    }
  }
  const makeOrder = async (userId, itemDetail) => {
    if (!customerName) {
      toast({
        position: "top",
        title: `Please Enter Your Name`,
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
      return;
    }

    try {
      let orderData = {
        userId: userId,
        customerName: customerName,
        tableNumber: tableNumber,
        orderedItems: itemDetail,
        instructions: instructions,
        subtotal: cartTotal,
        orderStatus: "Order Confirmed",
        paymentStatus: "Pending",
      };
      await apiFunctions
        .POST_REQUEST(BASE_URL + API_URL.CREATE_ORDER + userId, orderData)
        .then((res) => {
          let orderId = res.data.order._id;
          let subTotal = res.data.order.subtotal;

          if (res.status == 201) {
            toast({
              position: "top",
              title: `Order Confirmed SuccessFully`,
              status: "success",
              duration: 9000,
              isClosable: true,
            });

            navigate({
              pathname: "/Payment",
              search: createSearchParams({
                userId,
                orderId,
                subTotal,
                tableNumber,
              }).toString(),
            });
            return true;
          } else {
            alert(`There Some Error`);
            return false;
          }
        });
    } catch (err) {
      console.log(err);
      toast({
        position: "top",
        title: `There Some Error`,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  async function modifierIncrementDecrement(
    cartDocId,
    modifierId,
    status,
    size
  ) {
    try {
      let modifierIncrementDecrement = await apiFunctions.GET_REQUEST(
        BASE_URL +
          API_URL.MODIFIER_INCREMENT_DECREMENT +
          `${cartDocId}?cartId=${cartId}&modifierId=${modifierId}&cartStatus=${status}&itemSize=${size}`
      );
      setChanger(Math.random());
      setAdder(Math.random());
    } catch (err) {
      console.log("An error occurred while fetching carts", err.message);
    }
  }

  const deleteModifierById = async (id, modifierId) => {
    await apiFunctions
      .DELETE_REQUEST(
        BASE_URL +
          API_URL.MODIFIER_DELETE +
          `${id}?cartId=${cartId}&modifierId=${modifierId}`
      )
      .then((res) => {
        if (res.data.success == true) {
          toast({
            position: "top",
            title: `Modifier Deleted SuccessFully`,
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          setChanger(Math.random());
          setAdder(Math.random());
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

  return (
    <div className="container">
      <RestaurantHeader userId={userId} tableNumber={tableNumber} />

      {loading ? (
        <div className="row justify-content-between mt-3">
          <div className="col-md-7" id="MyCart">
            {cartItemList?.map((x, index) => {
              return (
                <div key={index}>
                  <div class="card rounded-3 mb-4">
                    <div class="card-body p-4">
                      <div class="row d-flex justify-content-between align-items-center">
                        <div class="col-md-2">
                          <img
                            src={x.item_Img}
                            style={{ width: "60px", height: "60px" }}
                            alt="img"
                          />
                        </div>
                        <div class="col-md-4">
                          <p class="lead fw-normal mb-2">
                            {x.item_Name} {x.item_Size}
                          </p>
                          <p>Rs {x.item_Price}</p>
                        </div>
                        <div class="col-md-4 d-flex justify-content-end">
                          <button
                            class="btn btn-link px-2"
                            onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                          >
                            {x.item_Qty == 1 ? null : (
                              <i
                                class="fas fa-minus"
                                onClick={() =>
                                  cartIncrementDecrement(
                                    x._id,
                                    "decrement",
                                    x.item_Size
                                  )
                                }
                              ></i>
                            )}
                          </button>

                          <input
                            id="form1"
                            min="0"
                            name="quantity"
                            value={x.item_Qty}
                            disabled={true}
                            type="number"
                            class="form-control form-control-sm"
                          />

                          <button class="btn btn-link px-2">
                            <i
                              class="fas fa-plus"
                              onClick={() =>
                                cartIncrementDecrement(
                                  x._id,
                                  "increment",
                                  x.item_Size
                                )
                              }
                            ></i>
                          </button>
                        </div>
                        <div class="col-md-1 text-end">
                          <a href="#!" class="text-danger">
                            <i
                              class="fas fa-trash fa-lg"
                              onClick={() => handleRemove(x._id)}
                            ></i>
                          </a>
                        </div>
                      </div>

                      {x.Modifier?.length > 0 ? (
                        <p className="modifier-heading">Modifiers</p>
                      ) : null}

                      {/* Modifier */}
                      {x.Modifier?.map((s, index) => {
                        return (
                          <div class="row d-flex justify-content-between align-items-center py-2 px-2 border-bottom">
                            <div class="col-md-4">
                              <p class="lead fw-normal mb-2">
                                {s.Modifier_Name}
                              </p>
                              <p>Rs {s.Modifier_Price}</p>
                            </div>

                            <div class="col-md-4 d-flex justify-content-end">
                              <button
                                class="btn btn-link px-2"
                                onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                              >
                                {s.Modifier_Qty == 1 ? null : (
                                  <i
                                    class="fas fa-minus"
                                    onClick={() =>
                                      modifierIncrementDecrement(
                                        x._id,
                                        s._id,
                                        "decrement",
                                        x.item_Size
                                      )
                                    }
                                  ></i>
                                )}
                              </button>

                              <input
                                id="form1"
                                min="0"
                                name="quantity"
                                value={s.Modifier_Qty}
                                disabled={true}
                                type="number"
                                class="form-control form-control-sm"
                              />

                              <button class="btn btn-link px-2">
                                <i
                                  class="fas fa-plus"
                                  onClick={() =>
                                    modifierIncrementDecrement(
                                      x._id,
                                      s._id,
                                      "increment",
                                      x.item_Size
                                    )
                                  }
                                ></i>
                              </button>
                              {/* <h5 class="mb-0 ms-3">Rs {x.itemPrice_Total}</h5> */}
                            </div>

                            <div class="col-md-4 text-end">
                              <a href="#!" class="text-danger">
                                <i
                                  class="fas fa-trash fa-lg"
                                  onClick={() =>
                                    deleteModifierById(x._id, s._id)
                                  }
                                ></i>
                              </a>
                            </div>
                          </div>
                        );
                      })}

                      {/* Modifier */}
                    </div>
                    <h5 class="pb-2 px-4  text-end text-danger text-xl">
                      Rs {x.itemPrice_Total}
                    </h5>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="col-md-5" id="sideBar">
            <div
              className="inner"
              style={{
                backgroundColor: "#f8f9fa",
                padding: "20px 10px",
                borderRadius: "10px",
                top: "0px",
                alignSelf: "center",
              }}
            >
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Special Instructions (Optional)</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  onChange={(e) => setInstruction(e.target.value)}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Customer Name</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setCustomerName(e.target.value)}
                />
              </Form.Group>
              {/* <div className="form-check d-flex justify-content-between align-items-center">
              <input
                className="form-check-input me-2"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                onChange={(e) => setInstruction(e.target.value)}
              />
              <label className="form-check-label" for="flexCheckDefault">
                Save for future
              </label>
              <span className="text-muted ms-auto">0/200</span>
            </div> */}

              {/* <div className="d-flex py-2 justify-content-center align-items-center">
              <button className="Button"
              >
                Done
              </button>
            </div> */}

              <div className="d-flex py-3 justify-content-center align-items-center">
                <button
                  onClick={() => makeOrder(userId, cartItemList)}
                  // onClick={() => navigate("/Payment")}
                  className="Button"
                >
                  Proceed to Checkout
                </button>
              </div>
              <hr />

              <div className="d-flex justify-content-between ">
                <span
                  style={{
                    fontWeight: "600",
                    fontSize: "20px",

                    textAlign: "end",
                  }}
                  className="text-black"
                >
                  Sub Total
                </span>
                <span
                  style={{
                    fontWeight: "600",
                    fontSize: "20px",
                    textAlign: "end",
                  }}
                >
                  Rs {cartTotal}
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="loading-screen">
          <div className="loading-spinner"></div>
        </div>
      )}

      <CartModal
        className={true ? "display: none" : ""}
        adder={adder}
        tableNumber={tableNumber}
      />
    </div>
  );
};

export default OrderPage;
