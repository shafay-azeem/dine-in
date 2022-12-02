import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./MenuDetail.css";
import { Button, Card } from "react-bootstrap";

const MenuDetail = () => {
  return <div>
    <Container className="mt-5">
      <Row >

        <Col lg={12} md={12} sm={12} xs={12}>
          <Card className="mx-auto mb-1">
            <Card.Body>
              <Row >
                <Col lg={4} className="p-0 d-flex align-items-center ">
                  <img
                    src={require("../Assets/burger.jpg")}
                    className="image mx-auto d-block w-100 align-items-center "
                  />
                </Col>
                <Col lg={8}>
                  <Card.Title className="d-flex align-items-center justify-content-center mt-3" >

                    Your Item Name
                  </Card.Title>
                  <Card.Text className="d-flex align-items-center justify-content-center" >
                    Some quick example text to build on the card title
                    and make up the bulk of the card's content.
                  </Card.Text>
                  <Card.Text className="pricetext">$795.00</Card.Text>
                  <div class=" my-4" >
                    <Row className="align-items-start">
                      <Col lg={8} >
                        <Card.Text className="d-flex align-items-start justify-content-start" >
                          Start aligned text on all viewport sizes
                        </Card.Text>

                      </Col>
                      <Col lg={4}>
                        <Card.Text className="pricetext d-flex align-items-end justify-content-end">$795.00</Card.Text>
                      </Col>
                    </Row>
                    <hr className="dashed" />
                  </div>

                  <div class=" my-4" >
                    <Row className="align-items-start">
                      <Col lg={8} >
                        <Card.Text className="d-flex align-items-start justify-content-start" >
                          Start aligned text on all viewport sizes
                        </Card.Text>

                      </Col>
                      <Col lg={4}>
                        <Card.Text className="pricetext d-flex align-items-end justify-content-end">$795.00</Card.Text>
                      </Col>
                    </Row>
                    <hr className="dashed" />
                  </div>
                  <div class=" my-4" >
                    <Row className="align-items-start">
                      <Col lg={8} >
                        <Card.Text className="d-flex align-items-start justify-content-start" >
                          Start aligned text on all viewport sizes
                        </Card.Text>

                      </Col>
                      <Col lg={4}>
                        <Card.Text className="pricetext d-flex align-items-end justify-content-end">$795.00</Card.Text>
                      </Col>
                    </Row>
                    <hr className="dashed" />
                  </div>
                </Col>

              </Row>
            </Card.Body>
          </Card>
        </Col>

      </Row >
    </Container >

  </div >;
};

export default MenuDetail;
