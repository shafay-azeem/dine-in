import { useFormControlStyles } from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { Badge, Card, Col, Row } from "react-bootstrap";
import { createSearchParams, useNavigate } from "react-router-dom";
import { API_URL, BASE_URL } from "../../../global/Constant";
import apiFunctions from "../../../global/GlobalFunction";
import "../RestaurantMenu.css";

const DisplayItemCard = (props) => {
  //let menu_index = props.menu_index;
  // console.log(menu_index);
  let section_index = props?.section_index;
  //console.log(section_index, "secid");
  // console.log(section_index, "section_index");
  const [itemList, setItemList] = useState();
  const [state, setstate] = useState(false);

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
    // if (section_index) {
    getAllItemsBySectionId();
    // }
  }, [section_index]);

  async function getAllItemsBySectionId() {
    let getItems = await apiFunctions.GET_REQUEST(
      BASE_URL + API_URL.GET_ALL_ITEMS_BY_SECTIONID_QR + section_index
    );

    let res = getItems.data.item;
    setItemList(res);

    return;
  }

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
                            <div className="d-flex my-1">
                              {y.New === "New" ? (
                                <div className="me-2">
                                  <img
                                    src={
                                      require("../../Assets/new.svg").default
                                    }
                                    alt="mySvgImage"
                                  />
                                </div>
                              ) : null}

                              {y.Signature === "Signature" ? (
                                <div className="me-2">
                                  <img
                                    src={
                                      require("../../Assets/signature.svg")
                                        .default
                                    }
                                    alt="mySvgImage"
                                  />
                                </div>
                              ) : null}

                              {y.Special_Presentation ===
                              "Special Presentation" ? (
                                <div className="me-2">
                                  <img
                                    src={
                                      require("../../Assets/special.svg")
                                        .default
                                    }
                                    alt="mySvgImage"
                                  />
                                </div>
                              ) : null}
                            </div>
                          );
                        })}
                      </div>
                      <div className="d-flex align-items-center mt-2">
                        {x.itemWarning?.map((z, index) => {
                          return (
                            <div className="d-flex my-1">
                              {z.Alcohol === "Alcohol" ? (
                                <div className="me-2">
                                  <img
                                    src={
                                      require("../../Assets/Alcohol.svg")
                                        .default
                                    }
                                    alt="mySvgImage"
                                  />
                                </div>
                              ) : null}

                              {z.AlcoholFree === "AlcoholFree" ? (
                                <div>
                                  <img
                                    src={
                                      require("../../Assets/AlcoholFree.svg")
                                        .default
                                    }
                                    alt="mySvgImage"
                                  />
                                </div>
                              ) : null}
                            </div>
                          );
                        })}
                      </div>
                    </Col>
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
