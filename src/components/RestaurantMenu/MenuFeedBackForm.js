import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./RestaurantMenu.css";

const MenuFeedBackForm = () => {
  return (
    <Container className="my-auto">
      <Row className="d-flex align-items-center" style={{ height: "100vh" }}>
        <Col lg={12} md={12} sm={12} xs={12}>
          <Card className="mx-auto mb-1">
            <Card.Body>
              <Form>
                <Form.Group>
                  <Form.Label>
                    Is there anything else you want to tell us?
                  </Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" />
                </Form.Group>

                <div className=" text-center">
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MenuFeedBackForm;
