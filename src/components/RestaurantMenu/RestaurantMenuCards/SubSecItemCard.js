import React from "react";
import { Badge, Card, Col, Row } from "react-bootstrap";
import { createSearchParams, useNavigate } from "react-router-dom";
import { MenuState } from "../../../context/MenuContext";
import "../RestaurantMenu.css";

const SubSecItemCard = (props) => {
  const navigate = useNavigate();
  const { response, setResponse } = MenuState();

  //console.log(props.subSection_response, "subSection_response");
  //console.log(props.subSection_index, "subSection_index");

  let subSectionList =
    props?.subSection_response[props?.subSection_index]?.item;
  // console.log(subSectionList, "subsection list response");

  let menu_index_refSub = props?.menu_index;
  let section_index_refSub = props?.section_index;
  let subsectionIndex = props?.subSection_index;

  // console.log(menu_index_refSub, section_index_refSub, subsectionIndex , 'subsection');
  // console.log(menu_index_refSub, section_index_refSub, subsectionIndex , 'subsection');

  const myFunc = (subsecitemindex) => {
    navigate({
      pathname: "/menudetail",
      search: createSearchParams({
        subsecitemindex,
        subsectionIndex,
        menu_index_refSub,
        section_index_refSub,
      }).toString(),
    });
  };

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
                        src={x.image}
                        className="image mx-auto d-block w-100"
                      />
                    </Col>
                    <Col lg={8}>
                      <Card.Title
                        className="title"
                        onClick={() => myFunc(index)}
                      >
                        {x.itemName}
                      </Card.Title>
                      <Card.Text className="text">
                        {x.itemDescription}
                      </Card.Text>
                      <Card.Text className="pricetext">
                        ${x.itemPrice}
                      </Card.Text>

                      <div className="d-flex align-items-center">
                        {x.itemLabel?.map((y, index) => {
                          return (
                            <Badge pill bg="primary" key={index}>
                              {y}
                            </Badge>
                          );
                        })}
                      </div>
                      <div className="d-flex align-items-center">
                        {x.itemWarning?.map((z, index) => {
                          return (
                            <Badge pill bg="primary" key={index}>
                              {z}
                            </Badge>
                          );
                        })}
                      </div>
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
