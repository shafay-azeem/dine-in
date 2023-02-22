import { Tooltip, useFormControlStyles, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { Badge, Button, Card, Col, Row } from "react-bootstrap";
import { createSearchParams, useNavigate } from "react-router-dom";
import { API_URL, BASE_URL } from "../../../global/Constant";
import apiFunctions from "../../../global/GlobalFunction";
import CartModal from "../Modal/CartModal";
import "../RestaurantMenu.css";

const DisplayItemCard = (props) => {
  const toast = useToast();
  //let menu_index = props.menu_index;
  // console.log(menu_index);
  let section_index = props?.section_index;
  //console.log(section_index, "secid");
  // console.log(section_index, "section_index");
  const [itemList, setItemList] = useState();
  const [state, setstate] = useState(false);
  const [adder, setAdder] = useState();

  const navigate = useNavigate();

  const menuDetail = (index, section) => {
    navigate({
      pathname: "/menudetail",
      search: createSearchParams({
        index,
        // menu_index,
        // section_index,
      }).toString(),
    });
  };

  useEffect(() => {
    if (section_index) {
      getAllItemsBySectionId();
    }
  }, [section_index]);

  async function getAllItemsBySectionId(id, itemName) {
    let getItems = await apiFunctions.GET_REQUEST(
      BASE_URL + API_URL.GET_ALL_ITEMS_BY_SECTIONID_QR + section_index
    );

    let res = getItems.data.item;
    setItemList(res);

    return;
  }

  const addToCart = async (id, itemName, itemPrice, itemImage) => {
    try {
      let cartData = {
        item_Id: id,
        item_Name: itemName,
        item_Price: itemPrice,
        item_Qty: 1,
        item_Img: itemImage,
      };
      await apiFunctions
        .POST_REQUEST(BASE_URL + API_URL.ADD_TO_CART + 1, cartData)
        .then((res) => {
          console.log(res.data);
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

  return (
    <div className="mx-auto mt-3">
      <Row>
        {itemList?.map((x, index) => {
          return (
            <Col lg={4} md={4} sm={6} xs={12} key={index}>
              <Card
                className="mx-auto mb-1 fooditem"
                style={{
                  cursor: "pointer",
                }}
              >
                <div className="Soldout-Badge">
                  {x.itemTag ? (
                    <Badge pill bg="danger">
                      Sold Out
                    </Badge>
                  ) : null}
                </div>

                <Card.Body style={{ opacity: x.itemTag ? "0.5" : "none" }}>
                  <Row>
                    <Col lg={4} className="imgcol p-0">
                      <img
                        src={x.itemImage}
                        className="image mx-auto d-block w-100"
                      />
                    </Col>
                    <Col lg={8}>
                      <Card.Title
                        className="title"
                        onClick={() => menuDetail(x._id)}
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
                                    label={"Special Presentation"}
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
                      <div className="d-flex align-items-center mt-2">
                        {x.itemWarning?.map((z, index) => {
                          return (
                            <div className="d-flex my-1" key={index}>
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

                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() =>
                        addToCart(x._id, x.itemName, x.itemPrice, x.itemImage)
                      }
                    >
                      Add To Cart
                    </Button>

                    <CartModal
                      className={true ? "display: none" : ""}
                      adder={adder}
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

export default DisplayItemCard;
