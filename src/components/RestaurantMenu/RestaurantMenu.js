import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./RestaurantMenu.css";
import { Accordion } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { MenuState } from "../../context/MenuContext";
import DisplayItemCard from "./RestaurantMenuCards/DisplayItemCard";
import SubSecItemCard from "./RestaurantMenuCards/SubSecItemCard";
import { BsArrowLeftShort } from "react-icons/bs";
import { IconButton } from "@chakra-ui/react";

const RestaurantMenu = (props) => {
  const navigate = useNavigate();
  const { response, setResponse } = MenuState();
  // console.log(props.menuName);
  let menu_index = props.menu_index;
  let section_response = response[props.menu_index].section;

  // console.log(section_response, "section_response");
  // console.log(props.menu_index, "menu_index");
  const [sectionList, setSectionList] = useState(section_response);
  const [count, setCount] = useState();

  let item_response = response[props.menu_index]?.section[count]?.item;

  let subSection_response =
    response[props.menu_index]?.section[count]?.subSection;

  //console.log(item_response, "item_response");

  const getIndex = (index) => {
    setCount(index);
    // console.log(index, "33");
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

  return (
    <>
      <div className="menu">
        <div class="d-flex justify-content-start">
          <div className="backarrow">
            <IconButton
              aria-label="Search database"
              icon={<BsArrowLeftShort />}
              onClick={() => navigate(-1)}
            />
          </div>
          {/* <BsArrowLeftShort
            onClick={() => navigate(-1)}
            style={{ cursor: "pointer" }}
          /> */}
        </div>

        <p className="heading">{props.menuName}</p>
        <p className="description">{props.menuDescription}</p>
      </div>

      <Slider {...settings} className="slider">
        {sectionList?.map((x, index) => {
          return (
            <div onClick={() => getIndex(index)}>
              <img
                src={x.image}
                style={{ cursor: "pointer", width: "250px", height: "150px" }}
              />
              <p>{x.sectionName}</p>
            </div>
          );
        })}
      </Slider>

      <div className="subsection">
        {subSection_response?.map((x, index) => {
          return (
            <Accordion className="mb-2 accordion">
              <Accordion.Item eventKey="1">
                <Accordion.Header>{x.sectionName}</Accordion.Header>
                <Accordion.Body>
                  <div className="text-center">
                    <p>{x.sectionDescription}</p>
                  </div>
                  <SubSecItemCard
                    menu_index={menu_index}
                    section_index={count}
                    subSection_response={subSection_response}
                    subSection_index={index}
                  />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          );
        })}
      </div>

      <div className="mx-auto mt-3 mb-3">
        <DisplayItemCard
          item_response={item_response}
          menu_index={menu_index}
          section_index={count}
        />
      </div>
    </>
  );
};

export default RestaurantMenu;
