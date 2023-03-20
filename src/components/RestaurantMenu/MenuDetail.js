import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./MenuDetail.css";

import { useState } from "react";
import { BsArrowLeftShort, BsPlusLg, BsStopwatch, BsXLg } from "react-icons/bs";
import { createSearchParams, useNavigate } from "react-router-dom";
import { IconButton, Tooltip, useDisclosure, useToast } from "@chakra-ui/react";

import apiFunctions from "../../global/GlobalFunction";
import { API_URL, BASE_URL } from "../../global/Constant";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import AddModifierModal from "./Modal/AddModifierModal";

const MenuDetail = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
  const [activeNut, setActiveNut] = useState();

  const [servingSize, setServingSize] = useState();
  const [nutCalories, setNutCalories] = useState();

  const [totalFat, setTotalFat] = useState();
  const [totalFatPercentage, setTotalFatPercentage] = useState();

  const [saturatedFat, setSaturatedFat] = useState();
  const [saturatedFatPercentage, setSaturatedFatPercentage] = useState();

  const [transFat, setTransFat] = useState();
  const [transFatPercentage, setTransFatPercentage] = useState();

  const [cholesterol, setCholesterol] = useState();
  const [cholesterolPercentage, setCholesterolPercentage] = useState();
  const toast = useToast();
  const [sodium, setSodium] = useState();
  const [sodiumPercentage, setSodiumPercentage] = useState();

  const [dietaryFiber, setDietaryFiber] = useState();
  const [dietaryFiberPercentage, setDietaryFiberPercentage] = useState();

  const [sugar, setSugar] = useState();
  const [sugarPercentage, setSugarPercentage] = useState();

  const [protein, setProtein] = useState();
  const [proteinPercentage, setProteinPercentage] = useState();

  const [vitaminA, setVitaminA] = useState();
  const [vitaminC, setVitaminC] = useState();

  const [calcium, setCalcium] = useState();
  const [iron, setIron] = useState();

  const [totalCarbs, setTotalCarbs] = useState();
  const [totalCarbsPercentage, setTotalCarbsPercentage] = useState();

  const [show, setShow] = useState(false);

  const [itemid, setItemId] = useState();

  const [tag, setTag] = useState();

  const handleClick = () => setShow(true);
  const handleClick2 = () => setShow(false);

  let item_index = props?.item_index;

  let subsectionitem_index = props?.subsectionitem_index;

  let tableNumber = props?.tableNumber;

  let TableNumber = props?.TableNumber;

  let resImage = props?.resImage;

  let index = props?.menu_index;

  let userId = props?.userId;

  let resName = props?.resName;

  let resUserName = props?.resUserName;

  let type = props?.type;

  let menu = props?.menu;

  let currency = props?.currency;

  const navigate = useNavigate();

  useEffect(() => {
    getItems();
  }, []);

  const myfun = () => {
    navigate({
      pathname: "/menudisplay",
      search: createSearchParams({
        index,
        tableNumber,
        TableNumber,
        resName,
        resImage,
        userId,
        type,
        menu,
        resUserName,
        currency,
      }).toString(),
    });
  };

  async function getItems() {
    try {
      if (subsectionitem_index) {
        let getSingleItem = await apiFunctions.GET_REQUEST_BY_ID(
          BASE_URL + API_URL.GET_SUB_ITEMS_BY_ITEMID_QR + subsectionitem_index
        );

        let setVar = getSingleItem.data.item;

        setTag(setVar.itemTag);
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
        setActiveNut(setVar.activeNutritionInfo);

        setServingSize(setVar.itemServingSize);
        setNutCalories(setVar.itemNutritionCalories);

        setTotalFat(setVar.itemTotalFat);
        setTotalFatPercentage(setVar.itemTotalFatPercentage);

        setSaturatedFatPercentage(setVar.itemSaturatedFatPercentage);
        setSaturatedFat(setVar.itemSaturatedFat);

        setTransFat(setVar.itemTransFat);
        setTransFatPercentage(setVar.itemTransFatPercentage);

        setCholesterol(setVar.itemCholesterol);
        setCholesterolPercentage(setVar.itemCholesterolPercentage);

        setSodium(setVar.itemSodium);
        setSodiumPercentage(setVar.itemSodiumPercentage);

        setDietaryFiber(setVar.itemDietaryFiber);
        setDietaryFiberPercentage(setVar.itemDietaryFiberPercentage);

        setSugar(setVar.itemSugar);
        setSugarPercentage(setVar.itemSugarPercentage);

        setProtein(setVar.itemProtein);
        setProteinPercentage(setVar.itemProteinPercentage);

        setVitaminA(setVar.itemVitaminA);
        setVitaminC(setVar.itemVitaminC);

        setIron(setVar.itemIron);
        setCalcium(setVar.itemCalcium);

        setTotalCarbs(setVar.itemTotalCarbs);
        setTotalCarbsPercentage(setVar.itemTotalCarbsPercentage);
      } else {
        let getSingleItem = await apiFunctions.GET_REQUEST_BY_ID(
          BASE_URL + API_URL.GET_ITEMS_BY_ITEMID_QR + item_index
        );

        let setVar = getSingleItem.data.item;

        setTag(setVar.itemTag);
        setItemId(setVar._id);

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
        setActiveNut(setVar.activeNutritionInfo);

        setServingSize(setVar.itemServingSize);
        setNutCalories(setVar.itemNutritionCalories);

        setTotalFat(setVar.itemTotalFat);
        setTotalFatPercentage(setVar.itemTotalFatPercentage);

        setSaturatedFatPercentage(setVar.itemSaturatedFatPercentage);
        setSaturatedFat(setVar.itemSaturatedFat);

        setTransFat(setVar.itemTransFat);
        setTransFatPercentage(setVar.itemTransFatPercentage);

        setCholesterol(setVar.itemCholesterol);
        setCholesterolPercentage(setVar.itemCholesterolPercentage);

        setSodium(setVar.itemSodium);
        setSodiumPercentage(setVar.itemSodiumPercentage);

        setDietaryFiber(setVar.itemDietaryFiber);
        setDietaryFiberPercentage(setVar.itemDietaryFiberPercentage);

        setSugar(setVar.itemSugar);
        setSugarPercentage(setVar.itemSugarPercentage);

        setProtein(setVar.itemProtein);
        setProteinPercentage(setVar.itemProteinPercentage);

        setVitaminA(setVar.itemVitaminA);
        setVitaminC(setVar.itemVitaminC);

        setIron(setVar.itemIron);
        setCalcium(setVar.itemCalcium);

        setTotalCarbs(setVar.itemTotalCarbs);
        setTotalCarbsPercentage(setVar.itemTotalCarbsPercentage);
      }
    } catch (error) {
      console.error(error);
    }
  }

  const myFun = async (id, name, price, image, size) => {
    try {
      let cartData = {
        item_Id: id,
        item_Name: name,
        item_Price: price,
        item_Qty: 1,
        item_Img: image,
        item_Size: size.toLowerCase(),
      };
      await apiFunctions
        .POST_REQUEST(BASE_URL + API_URL.ADD_TO_CART + tableNumber, cartData)
        .then((res) => {
          // console.log(res.data);
          if (res.status == 201) {
            toast({
              position: "top",
              title: `Card Added SuccessFully`,
              status: "success",
              duration: 1000,
              isClosable: true,
            });
            // setAdder(Math.random());
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
        duration: 1000,
        isClosable: true,
      });
    }
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          {show ? (
            <div className="col-sm-12 px-4">
              <div className="backarrow">
                <IconButton
                  aria-label="Search database"
                  icon={<BsArrowLeftShort />}
                  colorScheme="white"
                  bg="white"
                  color="black"
                  onClick={handleClick2}
                />
              </div>

              <h3 className="nut-fact text-center mt-3 mb-5">
                Nutrition Facts
              </h3>

              <div className="d-flex justify-content-between p-2">
                <span className="serving">Serving Size</span>
                {servingSize ? (
                  <span className="size">{servingSize}</span>
                ) : (
                  <span className="size">-</span>
                )}
              </div>

              <div className="spacer pt-1 px-2 bg-dark"></div>
              <p className="amount pt-1 px-2 my-2">Amount Per Serving</p>

              <div className="d-flex justify-content-between p-2">
                <span className="serving">Calories</span>
                {nutCalories ? (
                  <span className="size">{nutCalories}</span>
                ) : (
                  <span className="size">-</span>
                )}
              </div>
              <div className="spacer pt-1 px-2 bg-dark"></div>

              <div className="d-flex justify-content-between p-2 my-1">
                <span></span>
                <span className="size">% Daily Value*</span>
              </div>

              <div className="d-flex justify-content-between p-2">
                {totalFat ? (
                  <span className="serving">
                    Total Fat <span className="light ms-2">{totalFat}g</span>
                  </span>
                ) : (
                  <span className="serving">
                    Total Fat <span className="light ms-2">-</span>
                  </span>
                )}

                {totalFatPercentage ? (
                  <span className="size">{totalFatPercentage}%</span>
                ) : (
                  <span className="size">-</span>
                )}
              </div>

              <div className="d-flex justify-content-between px-2">
                {saturatedFat ? (
                  <span className="ms-3">
                    Saturated Fat <span className="ms-2">{saturatedFat}g</span>
                  </span>
                ) : (
                  <span className="ms-3">
                    Saturated Fat <span className="ms-2">-</span>
                  </span>
                )}

                {saturatedFatPercentage ? (
                  <span className="size">{saturatedFatPercentage}%</span>
                ) : (
                  <span className="size">-</span>
                )}
              </div>

              <div className="d-flex justify-content-between px-2 pb-2">
                {transFat ? (
                  <span className="ms-3">
                    Trans Fat <span className="ms-2">{transFat}g</span>
                  </span>
                ) : (
                  <span className="ms-3">
                    Trans Fat <span className="ms-2">-</span>
                  </span>
                )}

                {transFatPercentage ? (
                  <span className="size">{transFatPercentage}%</span>
                ) : (
                  <span className="size">-</span>
                )}
              </div>
              <hr />

              <div className="d-flex justify-content-between p-2">
                {cholesterol ? (
                  <span className="serving">
                    Cholesterol
                    <span className="light ms-2">{cholesterol}mg</span>
                  </span>
                ) : (
                  <span className="serving">
                    Cholesterol
                    <span className="light ms-2">-</span>
                  </span>
                )}

                {cholesterolPercentage ? (
                  <span className="size">{cholesterolPercentage}%</span>
                ) : (
                  <span className="size">-</span>
                )}
              </div>
              <hr />

              <div className="d-flex justify-content-between p-2">
                {sodium ? (
                  <span className="serving">
                    Sodium <span className="light ms-2">{sodium}mg</span>
                  </span>
                ) : (
                  <span className="serving">
                    Sodium <span className="light ms-2">-</span>
                  </span>
                )}

                {sodiumPercentage ? (
                  <span className="size">{sodiumPercentage}%</span>
                ) : (
                  <span className="size">-</span>
                )}
              </div>
              <hr />

              <div className="d-flex justify-content-between p-2">
                {totalCarbs ? (
                  <span className="serving">
                    Total Carbonhydrate
                    <span className="light ms-2">{totalCarbs}g</span>
                  </span>
                ) : (
                  <span className="serving">
                    Total Carbonhydrate
                    <span className="light ms-2">-</span>
                  </span>
                )}

                {totalCarbsPercentage ? (
                  <span className="size">{totalCarbsPercentage}%</span>
                ) : (
                  <span className="size">-</span>
                )}
              </div>

              <div className="d-flex justify-content-between px-2">
                {dietaryFiber ? (
                  <span className="ms-3">
                    Dietary Fiber <span className="ms-2">{dietaryFiber}g</span>
                  </span>
                ) : (
                  <span className="ms-3">
                    Dietary Fiber <span className="ms-2">-</span>
                  </span>
                )}

                {dietaryFiberPercentage ? (
                  <span className="size">{dietaryFiberPercentage}%</span>
                ) : (
                  <span className="size">-</span>
                )}
              </div>

              <div className="d-flex justify-content-between px-2 pb-2">
                {sugar ? (
                  <span className="ms-3">
                    Sugars <span className="ms-2">{sugar}g</span>
                  </span>
                ) : (
                  <span className="ms-3">
                    Sugars <span className="ms-2">-</span>
                  </span>
                )}

                {sugarPercentage ? (
                  <span className="size">{sugarPercentage}%</span>
                ) : (
                  <span className="size">-</span>
                )}
              </div>
              <hr />

              <div className="d-flex justify-content-between p-2">
                {protein ? (
                  <span className="serving">
                    Protien <span className="light ms-2">{protein}g</span>
                  </span>
                ) : (
                  <span className="serving">
                    Protien <span className="light ms-2">-</span>
                  </span>
                )}

                {proteinPercentage ? (
                  <span className="size">{proteinPercentage}%</span>
                ) : (
                  <span className="size">-</span>
                )}
              </div>
              <div className="spacer pt-1 px-2 bg-dark"></div>

              <div className="d-flex justify-content-between p-2">
                <span className="serving">Vitamin A</span>
                {vitaminA ? (
                  <span className="size">{vitaminA}%</span>
                ) : (
                  <span className="size">-</span>
                )}
              </div>

              <div className="d-flex justify-content-between p-2">
                <span className="serving">Vitamin C</span>
                {vitaminC ? (
                  <span className="size">{vitaminC}%</span>
                ) : (
                  <span className="size">-</span>
                )}
              </div>

              <div className="d-flex justify-content-between p-2">
                <span className="serving">Calcium</span>
                {calcium ? (
                  <span className="size">{calcium}%</span>
                ) : (
                  <span className="size">-</span>
                )}
              </div>

              <div className="d-flex justify-content-between p-2">
                <span className="serving">Iron</span>
                {iron ? (
                  <span className="size">{iron}%</span>
                ) : (
                  <span className="size">-</span>
                )}
              </div>
            </div>
          ) : (
            <div className="menuDetail-Card">
              <div className="backarrow">
                <IconButton
                  aria-label="Search database"
                  icon={<BsArrowLeftShort />}
                  onClick={() => myfun()}
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
                        {currency} {priceOption[0]?.price}
                      </div>
                    ) : (
                      <div
                        className="itemPrice"
                        style={{
                          paddingLeft: "5px",
                          paddingRight: "5px",
                        }}
                      >
                        {currency}
                        {priceOption[0].price} ━━━ {currency}
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
                          <Tooltip label="Special Presentation" placement="top">
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

              {activeNut ? (
                <p
                  className="d-flex justify-content-center nutInfo-Txt"
                  onClick={handleClick}
                >
                  <img
                    src={require("../Assets/warn.svg").default}
                    alt="mySvgImage"
                    className="me-2"
                  />
                  Nutrition Info
                </p>
              ) : null}

              {priceOption?.map((y, index) => {
                return (
                  <div
                    className="d-flex justify-content-between mt-2 py-1 px-2 border-bottom mb-3"
                    key={index}
                  >
                    {y.name ? (
                      <div>
                        {y.name} ({y.calories} Calories)
                      </div>
                    ) : null}

                    {y.price ? (
                      <div className="itemPrice">
                        {currency}
                        {y.price}
                      </div>
                    ) : null}

                    {tag ? null : (
                      <Button
                        variant="outline"
                        size="sm"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        onClick={() =>
                          myFun(
                            item_index ? item_index : subsectionitem_index,
                            name,
                            y.price,
                            image,
                            y.name
                          )
                        }
                      >
                        <BsPlusLg style={{ marginRight: "8px" }} />
                        add
                      </Button>
                      // <Button
                      //   variant="primary"
                      //   size="sm"
                      //   onClick={() =>
                      //     myFun(
                      //       item_index ? item_index : subsectionitem_index,
                      //       name,
                      //       y.price,
                      //       image,
                      //       y.name
                      //     )
                      //   }
                      // >
                      //   add
                      // </Button>
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
                              {r.Name === undefined ? null : (
                                <div>{r.Name}</div>
                              )}

                              {r.Price === undefined ? null : (
                                <div className="itemPrice">
                                  {currency}
                                  {r.Price}
                                </div>
                              )}

                              {tag ? null : (
                                <Button
                                  variant="outline"
                                  size="sm"
                                  style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                  onClick={onOpen}
                                >
                                  <BsPlusLg style={{ marginRight: "8px" }} />
                                  add
                                </Button>
                                // <Button
                                //   variant="primary"
                                //   size="sm"
                                //   onClick={onOpen}
                                // >
                                //   add
                                // </Button>
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
          )}
          {isOpen ? (
            <AddModifierModal
              isOpen={isOpen}
              onOpen={onOpen}
              onClose={onClose}
              PriceOption={priceOption}
              Modifiers={demoModifier}
              ItemId={item_index ? item_index : subsectionitem_index}
              tableNumber={tableNumber}
              TableNumber={TableNumber}
            />
          ) : null}
        </div>

        <div className="col-md-8 text-center d-none d-lg-block d-xl-block">
          <div className="d-flex align-items-center justify-content-center w-100 vh-100">
            <img className="preview" src={resImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuDetail;
