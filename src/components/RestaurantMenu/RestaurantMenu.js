import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./RestaurantMenu.css";
import { Accordion } from "react-bootstrap";
import { createSearchParams, useNavigate } from "react-router-dom";
import { MenuState } from "../../context/MenuContext";
import DisplayItemCard from "./RestaurantMenuCards/DisplayItemCard";
import SubSecItemCard from "./RestaurantMenuCards/SubSecItemCard";
import { BsArrowLeftShort } from "react-icons/bs";
import { IconButton } from "@chakra-ui/react";
import apiFunctions from "../../global/GlobalFunction";
import { API_URL, BASE_URL } from "../../global/Constant";
import { useEffect } from "react";
import RestaurantHeader from "./RestaurantHeader";

const RestaurantMenu = (props) => {
  const navigate = useNavigate();
  const { response, setResponse } = MenuState();
  let menu_index = props?.menu_index;
  let userId = props?.userId;
  let USERID = props?.userId;
  let type = props?.type;

  let tableNumber = props?.tableNumber;
  let resName = props?.resName;
  let resImage = props?.resImage;
  let menu = props?.menu;

  const [sectionList, setSectionList] = useState();
  const [subSectionList, setSubSectionList] = useState();
  const [count, setCount] = useState();
  const [state, setState] = useState(false);
  const [state2, setState2] = useState(false);
  const [inputType, setInputType] = useState(false);

  const getIndex = (index) => {
    setCount(index);
    // setCount2(index);
    // console.log(index);
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: sectionList?.length > 3 ? 4 : sectionList?.length,
    slidesToScroll: 1,
    rtl: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    getAllSectionByMenuId();

    if (count) {
      getAllSubSectionBySectionId();
      // setCount("");
    }

    // setState(false);
  }, [count]);

  async function getAllSectionByMenuId() {
    try {
      let getSection = await apiFunctions.GET_REQUEST(
        BASE_URL + API_URL.GET_ALL_SECTION_BY_MENUID_QR + menu_index
      );
      let res = getSection.data.section;
      setSectionList(res);
      // setState(true);
      return true;
    } catch (err) {
      console.log("An error occurred while fetching sections", err.message);
    }
  }

  async function getAllSubSectionBySectionId() {
    try {
      let getSubSection = await apiFunctions.GET_REQUEST(
        BASE_URL + API_URL.GET_ALL_SUBSECTION_BY_SECTIONID_QR + count
      );
      let res = getSubSection.data.subSection;
      setSubSectionList(res);
      return true;
    } catch (err) {
      console.log("An error occurred while fetching sub sections", err.message);
    }
  }

  const naviagteToMenuStart = () => {
    navigate({
      pathname: "/menustart",
      search: createSearchParams({
        USERID,
        tableNumber,
        menu,
      }).toString(),
    });
  };

  return (
    <>
      <RestaurantHeader
        userId={userId}
        tableNumber={tableNumber}
        resName={resName}
        changer={Math.random()}
        menu_index={menu_index}
        resImage={resImage}
        type={type}
        menu={menu}
      />
      <div className="menu">
        <div className="d-flex justify-content-start">
          <div className="backarrow">
            <IconButton
              aria-label="Search database"
              icon={<BsArrowLeftShort />}
              colorScheme="white"
              bg="white"
              color="black"
              onClick={naviagteToMenuStart}
            />
          </div>
          {/* <div className="backarrow">
            <IconButton
              aria-label="Search database"
              icon={<BsArrowLeftShort />}
              onClick={naviagteToMenuStart}
            />
          </div> */}
          {/* <BsArrowLeftShort
            onClick={() => navigate(-1)}
            style={{ cursor: "pointer" }}
          /> */}
        </div>

        {/* <p className="heading">{props.menuName}</p>
        <p className="description">{props.menuDescription}</p> */}
      </div>

      <Slider {...settings} className="slider">
        {sectionList?.map((x, index) => {
          return (
            <div onClick={() => getIndex(x._id)} key={index}>
              <img
                src={x.sectionImage}
                className="mx-auto"
                style={{ cursor: "pointer", width: "250px", height: "150px" }}
              />
              <p>{x.sectionName}</p>
            </div>
          );
        })}
      </Slider>

      <div className="subsection">
        {subSectionList?.map((x, index) => {
          return (
            <Accordion className="mb-2 accordion" key={index}>
              <Accordion.Item eventKey="1">
                <Accordion.Header>{x.sectionName}</Accordion.Header>
                <Accordion.Body>
                  <div className="text-center">
                    <p>{x.sectionDescription}</p>
                  </div>
                  <SubSecItemCard
                    subSection_index={x._id}
                    tableNumber={tableNumber}
                    resImage={resImage}
                    menu_index={menu_index}
                    resName={resName}
                    userId={userId}
                    type={type}
                    menu={menu}
                  />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          );
        })}
      </div>

      <div className="mx-auto mt-3 mb-3">
        <DisplayItemCard
          section_index={count}
          tableNumber={tableNumber}
          resImage={resImage}
          menu_index={menu_index}
          resName={resName}
          userId={userId}
          type={type}
          menu={menu}
        />
      </div>
    </>
  );
};

export default RestaurantMenu;
