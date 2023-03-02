import { Tooltip, useToast } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Badge, Card, Col, Row } from "react-bootstrap";
import { createSearchParams, useNavigate } from "react-router-dom";
import { MenuState } from "../../../context/MenuContext";
import { API_URL, BASE_URL } from "../../../global/Constant";
import apiFunctions from "../../../global/GlobalFunction";
import CartModal from "../Modal/CartModal";
import "../RestaurantMenu.css";

const SubSecItemCard = (props) => {
  const toast = useToast();
  let tableNumber = props?.tableNumber;
  let resImage = props?.resImage;
  let userId = props?.userId;
  let menu_index = props?.menu_index;
  let resName = props?.resName;

  const navigate = useNavigate();
  const { response, setResponse } = MenuState();
  const [subItemList, setSubItemList] = useState();
  const { adder, setAdder } = MenuState();

  let subsectionIndex = props?.subSection_index;

  const myFunc = (subsecitemindex) => {
    navigate({
      pathname: "/menudetail",
      search: createSearchParams({
        subsecitemindex,
        tableNumber,
        resImage,
        menu_index,
        resName,
        userId,
      }).toString(),
    });
  };

  useEffect(() => {
    getAllSubItemsBySectionId();
  }, [subsectionIndex]);

  async function getAllSubItemsBySectionId() {
    let getSubItems = await apiFunctions.GET_REQUEST(
      BASE_URL + API_URL.GET_ALL_ITEMS_BY_SUB_SECTIONID_QR + subsectionIndex
    );

    let res = getSubItems.data.item;
    setSubItemList(res);
  }

  const addToCart = async (id, itemName, itemPrice, itemImage) => {
    try {
      let cartData = {
        item_Id: id,
        item_Name: itemName,
        item_Price: itemPrice,
        item_Qty: 1,
        item_Img: itemImage,
        item_Size: "small",
      };
      await apiFunctions
        .POST_REQUEST(BASE_URL + API_URL.ADD_TO_CART + tableNumber, cartData)
        .then((res) => {
          if (res.status == 200) {
            toast({
              position: "top",
              title: `Card Added SuccessFully`,
              status: "success",
              duration: 9000,
              isClosable: true,
            });
            setAdder(Math.random());
            return true;
          } else {
            alert(`There Some Error---`);
            return false;
          }
        });
    } catch (err) {
      toast({
        position: "top",
        title: `There Some Error`,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <div>
      <Row>
        {subItemList?.map((x, index) => {
          return (
            <Col lg={4} md={4} sm={6} xs={12} key={index}>
              <Card className="mx-auto mb-2 fooditem">
                <div className="Soldout-Badge">
                  {x.itemTag ? (
                    <Badge pill bg="danger">
                      Sold Out
                    </Badge>
                  ) : null}
                </div>

                <Card.Body style={{ opacity: x.itemTag ? "0.5" : "none" }}>
                  <Row className="align-items-start">
                    <Col lg={4} className="imgcol p-0">
                      <div>
                        <img
                          src={x.itemImage}
                          className="image mx-auto d-block w-100"
                        />
                      </div>
                    </Col>
                    <Col lg={8}>
                      <Card.Title
                        className="title"
                        onClick={() => myFunc(x._id)}
                        style={{
                          cursor: "pointer",
                        }}
                      >
                        {x.itemName}
                      </Card.Title>
                      <Card.Text className="text">
                        {x.itemDescription}
                      </Card.Text>
                      <Card.Text className="pricetext">
                        {x.itemPriceOption[0].price ==
                        x.itemPriceOption[x.itemPriceOption.length - 1]
                          .price ? (
                          <div
                            className="itemPrice"
                            style={{
                              paddingLeft: "5px",
                              paddingRight: "5px",
                            }}
                          >
                            ${x.itemPriceOption[0].price}
                          </div>
                        ) : (
                          <div
                            className="itemPrice"
                            style={{
                              paddingLeft: "5px",
                              paddingRight: "5px",
                            }}
                          >
                            ${x.itemPriceOption[0].price} ━━━ $
                            {
                              x.itemPriceOption[x.itemPriceOption.length - 1]
                                .price
                            }
                          </div>
                        )}
                      </Card.Text>

                      <div className="d-flex align-items-center">
                        {x.itemLabel?.map((y, index) => {
                          return (
                            <div className="d-flex my-1" key={index}>
                              {y.New === "New" ? (
                                <div className="me-2">
                                  <Tooltip label={y.New} placement="top">
                                    <img
                                      src={
                                        require("../../Assets/new.svg").default
                                      }
                                      alt="mySvgImage"
                                    />
                                  </Tooltip>
                                </div>
                              ) : null}

                              {y.Signature === "Signature" ? (
                                <div className="me-2">
                                  <Tooltip label={y.Signature} placement="top">
                                    <img
                                      src={
                                        require("../../Assets/signature.svg")
                                          .default
                                      }
                                      alt="mySvgImage"
                                    />
                                  </Tooltip>
                                </div>
                              ) : null}

                              {y.Special_Presentation ===
                              "Special_Presentation" ? (
                                <div className="me-2">
                                  <Tooltip
                                    label="Special Presentation"
                                    placement="top"
                                  >
                                    <img
                                      src={
                                        require("../../Assets/special.svg")
                                          .default
                                      }
                                      alt="mySvgImage"
                                    />
                                  </Tooltip>
                                </div>
                              ) : null}
                            </div>
                          );
                        })}
                      </div>
                      <div className="d-flex align-items-center mt-2 gap-2">
                        {x.itemWarning?.map((z, index) => {
                          return (
                            <div className="d-flex" key={index}>
                              {z.Alcohol === "Alcohol" ? (
                                <div className="me-2">
                                  <Tooltip label={z.Alcohol} placement="top">
                                    <img
                                      src={
                                        require("../../Assets/Alcohol.svg")
                                          .default
                                      }
                                      alt="mySvgImage"
                                    />
                                  </Tooltip>
                                </div>
                              ) : null}

                              {z.AlcoholFree === "AlcoholFree" ? (
                                <div>
                                  <Tooltip
                                    label={z.AlcoholFree}
                                    placement="top"
                                  >
                                    <img
                                      src={
                                        require("../../Assets/AlcoholFree.svg")
                                          .default
                                      }
                                      alt="mySvgImage"
                                    />
                                  </Tooltip>
                                </div>
                              ) : null}
                            </div>
                          );
                        })}
                      </div>
                    </Col>

                    {x.itemTag ? null : (
                      <div className="container d-flex justify-content-center align-items-center mt-2">
                        <button
                          className="Button"
                          onClick={() =>
                            addToCart(
                              x._id,
                              x.itemName,
                              x.itemPrice,
                              x.itemImage
                            )
                          }
                        >
                          Add to Cart (Small)
                        </button>
                      </div>
                    )}

                    <CartModal
                      className={true ? "display: none" : ""}
                      adder={adder}
                      tableNumber={tableNumber}
                    />
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default SubSecItemCard;
