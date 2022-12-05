import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./RestaurantMenu.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Accordion } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { MenuState } from "../../context/MenuContext";
import DisplayItemCard from "./RestaurantMenuCards/DisplayItemCard";

const RestaurantMenu = (props) => {
  const { response, setResponse } = MenuState();
  // console.log(props.menuName);
  let menu_index = props.menu_index;
  let section_response = response[props.menu_index].section;

  // console.log(section_response, "section_response");
  // console.log(props.menu_index, "menu_index");
  const [sectionList, setSectionList] = useState(section_response);
  const [count, setCount] = useState();

  let item_response = response[props.menu_index]?.section[count]?.item;

  console.log(item_response, "item_response");

  const navigate = useNavigate();

  const menuDetail = () => {
    console.log("menudetails");
    navigate({
      pathname: "/menudetail",
    });
  };

  const getIndex = (index) => {
    setCount(index);
    // console.log(index, "33");
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

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
        <p className="heading">{props.menuName}</p>
      </div>

      <Slider {...settings} className="slider">
        {sectionList?.map((x, index) => {
          return (
            <div>
              <img src={require("../Assets/burger.jpg")} />
              <p onClick={() => getIndex(index)}>{x.sectionName}</p>
            </div>
          );
        })}
      </Slider>

      <div className="subsection">
        <Accordion>
          <Accordion.Item eventKey="1">
            <Accordion.Header>SubSection Name</Accordion.Header>
            <Accordion.Body>
              <Row>
                <Col lg={4} md={4} sm={6} xs={12}>
                  <Card className="mx-auto mb-1 fooditem">
                    <Card.Body>
                      <Row className="align-items-start">
                        <Col lg={4} className="p-0">
                          <img
                            src={require("../Assets/burger.jpg")}
                            className="image mx-auto d-block w-100"
                          />
                        </Col>
                        <Col lg={8}>
                          <Card.Title className="title">
                            Your Item Name
                          </Card.Title>
                          <Card.Text className="text">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </Card.Text>
                          <Card.Text className="pricetext">$795.00</Card.Text>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>

                <Col lg={4} md={4} sm={6} xs={12}>
                  <Card className="mx-auto mb-1 fooditem">
                    <Card.Body>
                      <Row className="align-items-start">
                        <Col lg={4} className="p-0">
                          <img
                            src={require("../Assets/burger.jpg")}
                            className="image mx-auto d-block w-100"
                          />
                        </Col>
                        <Col lg={8}>
                          <Card.Title className="title">
                            Your Item Name
                          </Card.Title>
                          <Card.Text className="text">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </Card.Text>
                          <Card.Text className="pricetext">$795.00</Card.Text>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>

                <Col lg={4} md={4} sm={6} xs={12}>
                  <Card className="mx-auto mb-1 fooditem">
                    <Card.Body>
                      <Row className="align-items-start">
                        <Col lg={4} className="p-0">
                          <img
                            src={require("../Assets/burger.jpg")}
                            className="image mx-auto d-block w-100"
                          />
                        </Col>
                        <Col lg={8}>
                          <Card.Title className="title">
                            Your Item Name
                          </Card.Title>
                          <Card.Text className="text">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </Card.Text>
                          <Card.Text className="pricetext">$795.00</Card.Text>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

      <div className="mx-auto mt-3">
        <DisplayItemCard item_response={item_response} />
      </div>
    </>
  );
};

export default RestaurantMenu;
