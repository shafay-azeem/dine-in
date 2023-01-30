import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./MenuDetail.css";

import { useState } from "react";
import { BsArrowLeftShort, BsStopwatch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { IconButton, Tooltip } from "@chakra-ui/react";

import apiFunctions from "../../global/GlobalFunction";
import { API_URL, BASE_URL } from "../../global/Constant";
import { useEffect } from "react";
import { MdSafetyDivider } from "react-icons/md";

const MenuDetail = (props) => {
  const [name, setName] = useState();
  const [image, setImage] = useState();
  const [video, setVideo] = useState();
  const [description, setDescription] = useState();
  const [calorie, setCalorie] = useState();
  const [time, setTime] = useState();
  const [select, setSelect] = useState();
  const [warningState, setWarningState] = useState();
  const [demoModifier, setDemoModifier] = useState();
  const [priceOption, setPriceOption] = useState();

  let item_index = props?.item_index;

  let subsectionitem_index = props?.subsectionitem_index;

  const navigate = useNavigate();

  useEffect(() => {
    getItems();
  }, []);

  async function getItems() {
    try {
      if (subsectionitem_index) {
        let getSingleItem = await apiFunctions.GET_REQUEST_BY_ID(
          BASE_URL + API_URL.GET_SUB_ITEMS_BY_ITEMID_QR + subsectionitem_index
        );

        let setVar = getSingleItem.data.item;
        console.log(setVar, "item detail");

        setName(setVar.itemName);
        setImage(setVar.itemImage);
        setVideo(setVar.video);
        setDescription(setVar.itemDescription);
        setCalorie(setVar.itemCalorie);
        setTime(setVar.itemPrepTime);
        setSelect(setVar.itemLabel);
        setWarningState(setVar.itemWarning);
        setDemoModifier(setVar.itemModifier);
        setPriceOption(setVar.itemPriceOption);
      } else {
        let getSingleItem = await apiFunctions.GET_REQUEST_BY_ID(
          BASE_URL + API_URL.GET_ITEMS_BY_ITEMID_QR + item_index
        );

        let setVar = getSingleItem.data.item;
        console.log(setVar);
        setName(setVar.itemName);
        setImage(setVar.itemImage);
        setVideo(setVar.video);
        setDescription(setVar.itemDescription);
        setCalorie(setVar.itemCalorie);
        setTime(setVar.itemPrepTime);
        setSelect(setVar.itemLabel);
        setWarningState(setVar.itemWarning);
        setDemoModifier(setVar.itemModifier);
        setPriceOption(setVar.itemPriceOption);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div style={{ width: "100%", margin: "0 auto" }}>
      <Row>
        <Col lg={4}>
          <div className="menuDetail-Card">
            <div className="backarrow">
              <IconButton
                aria-label="Search database"
                icon={<BsArrowLeftShort />}
                onClick={() => navigate(-1)}
              />
            </div>

            {video ? (
              <div>
                <video width="100%" height="240" controls autoPlay>
                  <source src={video} type="video/mp4"></source>
                </video>
              </div>
            ) : (
              <div
                className="item-image"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundPosition: "center",
                }}
              ></div>
            )}

            <p className="title text-center">{name}</p>

            <div className="d-flex justify-content-around mt-2">
              {priceOption ? (
                <div>
                  {priceOption[0].price ==
                    priceOption[priceOption.length - 1]?.price ? (
                    <div
                      className="itemPrice"
                      style={{
                        paddingLeft: "5px",
                        paddingRight: "5px",
                      }}
                    >
                      ${priceOption[0]?.price}
                    </div>
                  ) : (
                    <div
                      className="itemPrice"
                      style={{
                        paddingLeft: "5px",
                        paddingRight: "5px",
                      }}
                    >
                      ${priceOption[0].price} ━━━ $
                      {priceOption[priceOption.length - 1].price}
                    </div>
                  )}
                </div>
              ) : null}

              {calorie == undefined ? null : (
                <div className="d-flex align-items-center calorie">
                  <p className="itemCalorie">{calorie} Calories</p>
                </div>
              )}

              {time == undefined ? null : (
                <div className="d-flex align-items-center">{time} Min</div>
              )}
            </div>

            <p className="text-center"> {description}</p>

            <div className="d-flex justify-content-center gap-2 mt-2">
              {select?.map((y, index) => {
                return (
                  <div className="d-flex" key={index}>
                    {y.New === "New" ? (
                      <div className="me-2">
                        <Tooltip label={y.New} placement="top">
                          <img
                            src={require("../Assets/new.svg").default}
                            alt="mySvgImage"
                          />
                        </Tooltip>
                      </div>
                    ) : null}

                    {y.Signature === "Signature" ? (
                      <div className="me-2">
                        <Tooltip label={y.Signature} placement="top">
                          <img
                            src={require("../Assets/signature.svg").default}
                            alt="mySvgImage"
                          />
                        </Tooltip>
                      </div>
                    ) : null}

                    {y.Special_Presentation === "Special_Presentation" ? (
                      <div className="me-2">
                        <Tooltip label={y.Special_Presentation} placement="top">
                          <img
                            src={require("../Assets/special.svg").default}
                            alt="mySvgImage"
                          />
                        </Tooltip>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>

            <div className="d-flex justify-content-center gap-2 mt-2">
              {warningState?.map((z, index) => {
                return (
                  <div className="d-flex my-1" key={index}>
                    {z.Alcohol === "Alcohol" ? (
                      <div className="me-2">
                        <Tooltip label={z.Alcohol} placement="top">
                          <img
                            src={require("../Assets/Alcohol.svg").default}
                            alt="mySvgImage"
                          />
                        </Tooltip>
                      </div>
                    ) : null}

                    {z.AlcoholFree === "AlcoholFree" ? (
                      <div>
                        <Tooltip label={z.AlcoholFree} placement="top">
                          <img
                            src={require("../Assets/AlcoholFree.svg").default}
                            alt="mySvgImage"
                          />
                        </Tooltip>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>

            {priceOption?.map((y) => {
              return (
                <div className="d-flex justify-content-between mt-2 py-1 px-2 border-bottom mb-3">
                  {y.name === undefined ? null : (
                    <div>
                      {y.name} ({y.calories} Calories)
                    </div>
                  )}

                  {y.price === undefined ? null : (
                    <div className="itemPrice">${y.price}</div>
                  )}
                </div>
              );
            })}

            <div>
              {demoModifier?.map((s, index) => {
                return (
                  <div key={index}>
                    <p className="title text-center">{s.groupname}</p>
                    <p className="sub-title text-center">
                      Min {s.min} - Max {s.max}
                    </p>
                    <div>
                      {s.reference?.map((r, index) => {
                        return (
                          <div
                            className="d-flex justify-content-between mt-2 py-1 px-2 border-bottom mb-3"
                            key={index}
                          >
                            {r.Name === undefined ? null : <div>{r.Name}</div>}

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
        </Col>

        <Col lg={8} className=" text-center d-none d-lg-block d-xl-block">
          <div className="d-flex align-items-center justify-content-center w-100 vh-100">
            <p className="restaurant-name">Your Restaurant Name</p>
          </div>
        </Col>
      </Row>

      {/* <Row>
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
                    backgroundImage: `url(${x.itemImage})`,
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
                      <div className="d-flex">
                        {y.New === "New" ? (
                          <div className="me-2">
                            <img
                              src={require("../Assets/new.svg").default}
                              alt="mySvgImage"
                            />
                          </div>
                        ) : null}

                        {y.Signature === "Signature" ? (
                          <div className="me-2">
                            <img
                              src={require("../Assets/signature.svg").default}
                              alt="mySvgImage"
                            />
                          </div>
                        ) : null}

                        {y.Special_Presentation === "Special Presentation" ? (
                          <div className="me-2">
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
                      <div className="d-flex my-1">
                        {z.Alcohol === "Alcohol" ? (
                          <div className="me-2">
                            <img
                              src={require("../Assets/Alcohol.svg").default}
                              alt="mySvgImage"
                            />
                          </div>
                        ) : null}

                        {z.AlcoholFree === "AlcoholFree" ? (
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
      </Row> */}
    </div>
  );
};

export default MenuDetail;
