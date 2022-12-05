import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { MenuState } from "../../../context/MenuContext";
import "../RestaurantMenu.css";

const SubSecItemCard = () => {
  const { response, setResponse } = MenuState();

  //console.log(props.index, "sub sec item index");

  return (
    <div>
      <Row>
        <Col lg={4} md={4} sm={6} xs={12}>
          <Card className="mx-auto mb-1 fooditem">
            <Card.Body>
              <Row className="align-items-start">
                <Col lg={4} className="p-0">
                  <img
                    // src={require("../Assets/burger.jpg")}
                    className="image mx-auto d-block w-100"
                  />
                </Col>
                <Col lg={8}>
                  <Card.Title className="title">Your Item Name</Card.Title>
                  <Card.Text className="text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Text className="pricetext">$795.00</Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default SubSecItemCard;
