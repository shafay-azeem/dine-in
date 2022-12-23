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
import mySvg from "../Assets/new.svg";

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

  console.log(itemList, "itemlist");

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
                  style={{
                    backgroundImage: `url(${x.image})`,
                    backgroundPosition: "center",
                  }}
                ></div>

                <p className="title text-center">{x.itemName}</p>

                <div className="d-flex justify-content-around mt-2">
                  {x.itemPriceOption[0].price ==
                  x.itemPriceOption[x.itemPriceOption.length - 1].price ? (
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
                      {x.itemPriceOption[x.itemPriceOption.length - 1].price}
                    </div>
                  )}
                  {/* {x.itemPrice === undefined ? null : (
                    <div className="itemPrice">${x.itemPrice}</div>
                  )} */}

                  {x.itemCalorie == undefined ? null : (
                    <div className="d-flex align-items-center calorie">
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

                <div className="d-flex justify-content-center gap-2 mt-2">
                  {x.itemLabel?.map((y, index) => {
                    return (
                      <div>
                        {y === "New" ? (
                          <div>
                            <img
                              src={require("../Assets/new.svg").default}
                              alt="mySvgImage"
                            />
                          </div>
                        ) : null}

                        {y === "Signature" ? (
                          <div>
                            <img
                              src={require("../Assets/signature.svg").default}
                              alt="mySvgImage"
                            />
                          </div>
                        ) : null}

                        {y === "Special Presentation" ? (
                          <div>
                            <img
                              src={require("../Assets/special.svg").default}
                              alt="mySvgImage"
                            />
                          </div>
                        ) : null}
                      </div>
                    );
                  })}
                </div>

                <div className="d-flex justify-content-center gap-2 mt-2">
                  {x.itemWarning?.map((z, index) => {
                    return (
                      <div>
                        {z === "Alcohol" ? (
                          <div>
                            <img
                              src={require("../Assets/Alcohol.svg").default}
                              alt="mySvgImage"
                            />
                          </div>
                        ) : null}

                        {z === "AlcoholFree" ? (
                          <div>
                            <img
                              src={require("../Assets/AlcoholFree.svg").default}
                              alt="mySvgImage"
                            />
                          </div>
                        ) : null}
                      </div>
                    );
                  })}
                </div>

                {itemPriceList?.map((y) => {
                  return (
                    <div className="d-flex justify-content-between mt-2 py-1 px-2 border-bottom mb-3">
                      {y.name === undefined ? null : <div>{y.name}</div>}

                      {y.price === undefined ? null : (
                        <div className="itemPrice">${y.price}</div>
                      )}
                    </div>
                  );
                })}

                <div>
                  {x.itemModifier?.map((s, index) => {
                    return (
                      <div>
                        <p className="title text-center">{s.groupname}</p>
                        <p className="sub-title text-center">
                          Min {s.min} - Max {s.max}
                        </p>
                        <div>
                          {s.reference?.map((r, index) => {
                            return (
                              <div className="d-flex justify-content-between mt-2 py-1 px-2 border-bottom mb-3">
                                {r.Name === undefined ? null : (
                                  <div>{r.Name}</div>
                                )}

                                {r.Price === undefined ? null : (
                                  <div className="itemPrice">${r.Price}</div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </Col>

        <Col lg={8} className="text-center d-none d-lg-block d-xl-block">
          <p className="restaurant-name">Your Restaurant Name</p>
        </Col>
      </Row>
    </div>
  );
};

export default MenuDetail;
