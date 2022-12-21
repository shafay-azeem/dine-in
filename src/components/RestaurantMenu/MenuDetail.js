import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./MenuDetail.css";
import { Badge, Button, Card, ListGroup } from "react-bootstrap";
import { MenuState } from "../../context/MenuContext";
import { useState } from "react";
import { BsArrowLeftShort, BsStopwatch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const MenuDetail = (props) => {
  const { response, setResponse } = MenuState();
  let menu_index = props?.menu_index;
  // console.log(menu_index, "menu_index");
  let menu_index_refSub = props?.menu_index_refSub;
  // console.log(menu_index_refSub, "menu_index_refSub");
  let section_index_refSub = props?.section_index_refSub;
  // console.log(section_index_refSub, "section_index_refSub");
  let section_index = props?.section_index;
  // console.log(section_index, "section_index");
  let item_index = props?.item_index;
  // console.log(item_index, "item_index");
  let subsection_index = props?.subsection_index;
  // console.log(subsection_index, "subsection_index");
  let subsectionitem_index = props?.subsectionitem_index;
  // console.log(subsectionitem_index, "subsectionitem_index");
  const navigate = useNavigate();

  let itemPriceOptionResponse =
    response[menu_index]?.section[section_index]?.item[item_index]
      .itemPriceOption;

  let subItemPriceOptionResponse =
    response[menu_index_refSub]?.section[section_index_refSub]?.subSection[
      subsection_index
    ]?.item[subsectionitem_index].itemPriceOption;

  const priceInitialState =
    typeof subsectionitem_index === "string"
      ? subItemPriceOptionResponse
      : itemPriceOptionResponse;

  const [itemPriceList, setPriceItemList] = useState(priceInitialState);

  let subSecItemDetailResponse =
    response[menu_index_refSub]?.section[section_index_refSub]?.subSection[
      subsection_index
    ]?.item[subsectionitem_index];
  //console.log(subSecItemDetailResponse, "subSecItemDetailResponse");

  let secItemDetailResponse =
    response[menu_index]?.section[section_index]?.item[item_index];
  //console.log(secItemDetailResponse, "secItemDetailResponse");

  const initialState =
    typeof subsectionitem_index === "string"
      ? subSecItemDetailResponse
      : secItemDetailResponse;

  const [itemList, setItemList] = useState(initialState);

  // console.log(props.subsection_index, "subsection_index");
  // console.log(props.subsectionitem_index, "subsectionitem_index");

  // let itemDetailResponse =
  //   response[menu_index]?.section[section_index]?.item[item_index];
  //console.log([itemDetailResponse], "itemDetailResponse");

  return (
    <div style={{ width: "100%", margin: "0 auto" }}>
      <Row>
        <Col lg={4}>
          {[itemList]?.map((x) => {
            return (
              <div className="menuDetail-Card">
                <div className="backarrow">
                  <IconButton
                    aria-label="Search database"
                    icon={<BsArrowLeftShort />}
                    onClick={() => navigate(-1)}
                  />
                </div>

                <div
                  className="item-image"
                  style={{ backgroundImage: `url(${x.image})` }}
                ></div>

                <p className="title text-center">{x.itemName}</p>

                <div className="d-flex justify-content-around mt-2">
                  {x.itemPrice === undefined ? null : (
                    <div className="itemPrice">${x.itemPrice}</div>
                  )}

                  {x.itemCalorie == undefined ? null : (
                    <div className="d-flex align-items-center calorie">
                      {/* <img
                        src={require("../Assets/calories.png")}
                        className="img-calorie"
                      /> */}
                      <p className="itemCalorie">{x.itemCalorie} Calories</p>
                    </div>
                  )}

                  {x.itemPrepTime == undefined ? null : (
                    <div className="d-flex align-items-center">
                      {x.itemPrepTime} Min
                    </div>
                  )}
                </div>

                <p className="text-center"> {x.itemDescription}</p>

                <div className="d-flex justify-content-around mt-2 ">
                  {x.itemLabel?.map((y, index) => {
                    return (
                      <Badge pill bg="primary" key={index}>
                        {y}
                      </Badge>
                    );
                  })}
                </div>

                <div className="d-flex">
                  {x.itemWarning?.map((z, index) => {
                    return (
                      <Badge pill bg="primary" key={index}>
                        {z}
                      </Badge>
                    );
                  })}
                </div>

                {itemPriceList?.map((y) => {
                  return (
                    <div class=" my-4">
                      <Row className="align-items-start">
                        <Col lg={8}>
                          <Card.Text className="d-flex align-items-start justify-content-start">
                            {y.name}
                          </Card.Text>
                        </Col>
                        <Col lg={4}>
                          <p className=" d-flex align-items-end justify-content-end hYqPvw">
                            $ {y.price}
                          </p>
                        </Col>
                      </Row>
                      <hr className="dashed" />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </Col>

        <Col lg={8} className="text-center d-none d-lg-block d-xl-block">
          <p className="restaurant-name">Your Restaurant Name</p>
        </Col>
      </Row>

      {/* <Container className="mt-5">
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            {[itemList]?.map((x) => {
              return (
                <Card className="mx-auto mb-1">
                  <Card.Body>
                    <Row>
                      <Col lg={4} className="p-0 d-flex align-items-center">
                        <img
                          src={x.image}
                          className="image mx-auto d-block w-100 align-items-center "
                        />
                      </Col>
                      <Col lg={8}>
                        <Card.Title className="d-flex align-items-center justify-content-center mt-3">
                          {x.itemName}
                        </Card.Title>

                        <Card.Text className="d-flex align-items-center justify-content-center">
                          {x.itemDescription}
                        </Card.Text>

                        <Card.Text className="pricetext">
                          <div className="d-flex gap-3">
                            {x.itemPrice === undefined ? null : (
                              <div className="d-flex align-items-center">
                                ${x.itemPrice}
                              </div>
                            )}

                            {x.itemPrepTime == undefined ? null : (
                              <div className="d-flex align-items-center">
                                {x.itemPrepTime} Min
                              </div>
                            )}
                            {x.itemCalorie == undefined ? null : (
                              <div className="d-flex align-items-center calorie">
                                <img
                                  src={require("../Assets/calories.png")}
                                  className="img-calorie"
                                />
                                <p>{x.itemCalorie} Calories</p>
                              </div>
                            )}
                          </div>

                          <div className="d-flex gap-3">
                            <div className="d-flex align-items-center gap-1">
                              {x.itemLabel?.map((y, index) => {
                                return (
                                  <Badge pill bg="primary" key={index}>
                                    {y}
                                  </Badge>
                                );
                              })}
                            </div>

                            <div className="d-flex align-items-center gap-1">
                              {x.itemWarning?.map((z, index) => {
                                return (
                                  <Badge pill bg="primary" key={index}>
                                    {z}
                                  </Badge>
                                );
                              })}
                            </div>
                          </div>
                        </Card.Text>

                        {itemPriceList?.map((y) => {
                          return (
                            <div class=" my-4">
                              <Row className="align-items-start">
                                <Col lg={8}>
                                  <Card.Text className="d-flex align-items-start justify-content-start">
                                    {y.name}
                                  </Card.Text>
                                </Col>
                                <Col lg={4}>
                                  <Card.Text className="pricetext d-flex align-items-end justify-content-end">
                                    $ {y.price}
                                  </Card.Text>
                                </Col>
                              </Row>
                              <hr className="dashed" />
                            </div>
                          );
                        })}
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              );
            })}
          </Col>
        </Row>
      </Container> */}
    </div>
  );
};

export default MenuDetail;
