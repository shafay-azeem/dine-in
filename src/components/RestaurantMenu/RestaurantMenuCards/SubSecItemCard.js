import React from "react";
import { Badge, Card, Col, Row } from "react-bootstrap";
import { createSearchParams, useNavigate } from "react-router-dom";
import { MenuState } from "../../../context/MenuContext";
import "../RestaurantMenu.css";

const SubSecItemCard = (props) => {
  const navigate = useNavigate();
  const { response, setResponse } = MenuState();

  let subSectionList =
    props?.subSection_response[props?.subSection_index]?.item;

  let menu_index_refSub = props?.menu_index;
  let section_index_refSub = props?.section_index;
  let subsectionIndex = props?.subSection_index;

  const myFunc = (subsecitemindex) => {
    navigate({
      pathname: "/menudetail",
      search: createSearchParams({
        subsecitemindex,
        subsectionIndex,
        menu_index_refSub,
        section_index_refSub,
      }).toString(),
    });
  };

  return (
    <div>
      <Row>
        {subSectionList?.map((x, index) => {
          return (
            <Col lg={4} md={4} sm={6} xs={12}>
              <Card className="mx-auto mb-2 fooditem">
                <Card.Body>
                  <Row className="align-items-start">
                    <Col lg={4} className="imgcol p-0">
                      <div>
                        <img
                          src={x.image}
                          className="image mx-auto d-block w-100"
                        />
                      </div>
                    </Col>
                    <Col lg={8}>
                      <Card.Title
                        className="title"
                        onClick={() => myFunc(index)}
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
                      <div className="d-flex align-items-center mt-2 gap-2">
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

export default SubSecItemCard;
