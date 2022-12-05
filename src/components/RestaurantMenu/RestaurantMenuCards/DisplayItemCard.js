import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import "../RestaurantMenu.css";

const DisplayItemCard = (props) => {
  console.log(props.item_response, "props.item_response");

  return (
    <div className="mx-auto mt-3">
      <Row>
        {props.item_response?.map((x, index) => {
          return (
            <Col lg={4} md={4} sm={6} xs={12}>
              <Card className="mx-auto mb-1 fooditem">
                <Card.Body>
                  <Row>
                    <Col lg={4} className="p-0">
                      <img
                        // src={require(".../Assets/burger.jpg")}
                        className="image mx-auto d-block w-100"
                      />
                    </Col>
                    <Col lg={8}>
                      <Card.Title className="title">{x.itemName}</Card.Title>
                      <Card.Text className="text">
                        {x.itemDescription}
                      </Card.Text>
                      <Card.Text className="pricetext">
                        ${x.itemPrice}
                      </Card.Text>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default DisplayItemCard;
