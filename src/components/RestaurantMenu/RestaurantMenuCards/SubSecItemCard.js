import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Badge, Card, Col, Row } from "react-bootstrap";
import { createSearchParams, useNavigate } from "react-router-dom";
import { MenuState } from "../../../context/MenuContext";
import { API_URL, BASE_URL } from "../../../global/Constant";
import apiFunctions from "../../../global/GlobalFunction";
import "../RestaurantMenu.css";

const SubSecItemCard = (props) => {
  const navigate = useNavigate();
  const { response, setResponse } = MenuState();
  const [subItemList, setSubItemList] = useState();

  let subsectionIndex = props?.subSection_index;

  const myFunc = (subsecitemindex) => {
    console.log(subsecitemindex);
    navigate({
      pathname: "/menudetail",
      search: createSearchParams({
        subsecitemindex,
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

  return (
    <div>
      <Row>
        {subItemList?.map((x, index) => {
          return (
            <Col lg={4} md={4} sm={6} xs={12} key={index}>
              <Card className="mx-auto mb-2 fooditem">
                <Card.Body>
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
                      <div className="d-flex align-items-center mt-2 gap-2">
                        {x.itemWarning?.map((z, index) => {
                          return (
                            <div className="d-flex" key={index}>
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

export default SubSecItemCard;
