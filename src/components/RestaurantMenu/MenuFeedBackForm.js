import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { MenuState } from "../../context/MenuContext";
import "./RestaurantMenu.css";

const MenuFeedBackForm = () => {
  const { feedback, setFeedback } = MenuState();
  const [question, setQuestion] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  function getTimestampInSeconds() {
    return Math.floor(Date.now() / 1000);
  }

  let feedbackData = {
    id: getTimestampInSeconds(),
    question: question,
    name: name,
    email: email,
  };

  const feedbackSubmit = () => {
    feedback.push(feedbackData);
    alert("feedback Submitted");
    document.getElementById("myForm").reset();
    setFeedback([...feedback]);
    //console.log(feedback, "feedback Submitted");
  };

  return (
    <Container className="my-auto">
      <Row className="d-flex align-items-center" style={{ height: "100vh" }}>
        <Col lg={12} md={12} sm={12} xs={12}>
          <Card className="mx-auto mb-1">
            <Card.Body>
              <Form id="myForm">
                <Form.Group>
                  <Form.Label>
                    Is there anything else you want to tell us?
                  </Form.Label>
                  <Form.Control
                    type="text"
                    onChange={(e) => setQuestion(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
              </Form>
              <div className=" text-center">
                <Button
                  variant="primary"
                  type="submit"
                  onClick={() => {
                    feedbackSubmit();
                  }}
                >
                  Submit
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MenuFeedBackForm;
