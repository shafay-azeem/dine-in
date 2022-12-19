import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./MenuDetail.css";
import { Badge, Button, Card } from "react-bootstrap";
import { MenuState } from "../../context/MenuContext";
import { useState } from "react";
import { BsStopwatch } from "react-icons/bs";

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
    <div>
      <Container className="mt-5">
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
                          {x.itemPrice == "" ? null : (
                            <div className="d-flex align-items-center">
                              ${x.itemPrice}
                            </div>
                          )}

                          {x.itemPrepTime == "" ? null : (
                            <div className="d-flex align-items-center">
                              {x.itemPrepTime} Min
                            </div>
                          )}
                          {x.itemCalorie == "" ? null : (
                            <div className="d-flex align-items-center">
                              {x.itemCalorie} Calories
                            </div>
                          )}
                          <div className="d-flex align-items-center">
                            {x.itemLabel?.map((y, index) => {
                              return (
                                <Badge pill bg="primary" key={index}>
                                  {y}
                                </Badge>
                              );
                            })}
                          </div>
                          <div className="d-flex align-items-center">
                            {x.itemWarning?.map((z, index) => {
                              return (
                                <Badge pill bg="primary" key={index}>
                                  {z}
                                </Badge>
                              );
                            })}
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
      </Container>
    </div>
  );
};

export default MenuDetail;
