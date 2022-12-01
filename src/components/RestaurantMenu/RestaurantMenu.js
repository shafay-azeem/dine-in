import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./RestaurantMenu.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const RestaurantMenu = () => {
  var settings = {
    dots: true,
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
      <Slider {...settings}>
        <div>
          <img src={require("../Assets/burger.jpg")} />
        </div>
        <div>
          <img src={require("../Assets/burger.jpg")} />
        </div>
        <div>
          <img src={require("../Assets/burger.jpg")} />
        </div>
        <div>
          <img src={require("../Assets/burger.jpg")} />
        </div>
        <div>
          <img src={require("../Assets/burger.jpg")} />
        </div>
        <div>
          <img src={require("../Assets/burger.jpg")} />
        </div>
      </Slider>

      <div className="mx-auto mt-5">
        <Row>
          <Col lg={4}>
            <Card className="mx-auto mb-3 fooditem">
              <Card.Body>
                <Row className="align-items-start">
                  <Col lg={4} className="p-0">
                    <img src={require("../Assets/burger.jpg")} />
                  </Col>
                  <Col lg={8}>
                    <Card.Title className="title">Your Item Name</Card.Title>
                    <Card.Text className="text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4}>
            <Card className="mx-auto mb-3 fooditem">
              <Card.Body>
                <Row className="align-items-start">
                  <Col lg={4} className="p-0">
                    <img src={require("../Assets/burger.jpg")} />
                  </Col>
                  <Col lg={8}>
                    <Card.Title className="title">Your Item Name</Card.Title>
                    <Card.Text className="text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4}>
            <Card className="mx-auto mb-3 fooditem">
              <Card.Body>
                <Row className="align-items-start">
                  <Col lg={4} className="p-0">
                    <img src={require("../Assets/burger.jpg")} />
                  </Col>
                  <Col lg={8}>
                    <Card.Title className="title">Your Item Name</Card.Title>
                    <Card.Text className="text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default RestaurantMenu;
