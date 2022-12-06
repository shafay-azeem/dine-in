import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { MenuState } from "../../../context/MenuContext";
import "../RestaurantMenu.css";

const SubSecItemCard = (props) => {
  const { response, setResponse } = MenuState();

  //console.log(props.subSection_response, "subSection_response");
  //console.log(props.subSection_index, "subSection_index");

  let subSectionList =
    props?.subSection_response[props?.subSection_index]?.item;
  //   console.log(x, "subsection response");

  return (
    <div>
      <Row>
        {subSectionList?.map((x, index) => {
          return (
            <Col lg={4} md={4} sm={6} xs={12}>
              <Card className="mx-auto mb-2 fooditem">
                <Card.Body>
                  <Row className="align-items-start">
                    <Col lg={4} className="p-0">
                      <img
                        // src={require("../Assets/burger.jpg")}
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

export default SubSecItemCard;
