import { Button, Col, Form, Row } from "react-bootstrap";
import React from "react";
import { Card } from "react-bootstrap";

const FormQuestions = () => {
  return (
    <div className="container">
      <Card
        style={{ width: "40rem", backgroundColor: "white" }}
        className="ml-auto"
      >
        <Card.Body>
          <Row>
            <Col>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Question 1</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
              </Form>
            </Col>
          </Row>

          <Row>
            <Col>
              <Button variant="primary">Add</Button>
            </Col>
            <Col>
              <Button variant="primary">Save</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FormQuestions;
