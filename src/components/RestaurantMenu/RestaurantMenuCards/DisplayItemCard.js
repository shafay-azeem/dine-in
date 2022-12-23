import React, { useState } from "react";
import { Badge, Card, Col, Row } from "react-bootstrap";
import { createSearchParams, useNavigate } from "react-router-dom";
import "../RestaurantMenu.css";

const DisplayItemCard = (props) => {
  let menu_index = props.menu_index;
  let section_index = props.section_index;
  const navigate = useNavigate();

  const menuDetail = (index) => {
    navigate({
      pathname: "/menudetail",
      search: createSearchParams({
        index,
        menu_index,
        section_index,
      }).toString(),
    });
  };

  // console.log(props.item_response, "props.item_response");

  return (
    <div className="mx-auto mt-3">
      <Row>
        {props.item_response?.map((x, index) => {
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
                        src={x.image}
                        className="image mx-auto d-block w-100"
                      />
                    </Col>
                    <Col lg={8}>
                      <Card.Title
                        className="title"
                        onClick={() => menuDetail(index)}
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

                      <div className="d-flex align-items-center mt-2">
                        {x.itemLabel?.map((y, index) => {
                          return (
                            <div>
                              {y === "New" ? (
                                <div>
                                  <img
                                    src={
                                      require("../../Assets/new.svg").default
                                    }
                                    alt="mySvgImage"
                                  />
                                </div>
                              ) : null}

                              {y === "Signature" ? (
                                <div>
                                  <img
                                    src={
                                      require("../../Assets/signature.svg")
                                        .default
                                    }
                                    alt="mySvgImage"
                                  />
                                </div>
                              ) : null}

                              {y === "Special Presentation" ? (
                                <div>
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
                            <div>
                              {z === "Alcohol" ? (
                                <div>
                                  <img
                                    src={
                                      require("../../Assets/Alcohol.svg")
                                        .default
                                    }
                                    alt="mySvgImage"
                                  />
                                </div>
                              ) : null}

                              {z === "AlcoholFree" ? (
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
