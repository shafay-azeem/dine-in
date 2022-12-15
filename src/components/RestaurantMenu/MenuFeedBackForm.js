import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { MenuState } from "../../context/MenuContext";
import "./RestaurantMenu.css";

const MenuFeedBackForm = () => {
  const { feedback, setFeedback, activeForm, createfeedback, setCreateFeedback, setNotification, notification } =
    MenuState();
  const [demo, setDemo] = useState(createfeedback[activeForm]?.formQuestions);
  const [question, setQuestion] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  console.log(activeForm, "------")

  function getTimestampInSeconds() {
    return Math.floor(Date.now() / 1000);
  }
  let A = []
  const handleInputChange = (e, index) => {
    const { value } = e.target;
    console.log(value, "vvvvv")
    A[index] = value;
    console.log(A, "===A=====")
  };

  let feedbackData = {
    id: getTimestampInSeconds(),
    question: question,
    name: name,
    email: email,
  };

  const feedbackSubmit = () => {
    var jsonObj = {};
    for (var i = 0; i < A.length; i++) {
      jsonObj["position" + (i + 1)] = A[i];
    }
    feedback.push(jsonObj);
    setNotification(true)
    alert("feedback Submitted");
    document.getElementById("myForm").reset();
    setFeedback([...feedback]);
    console.log(feedback, "feedback Submitted");
  };

  return (
    <Container className="my-auto">
      <Row className="d-flex align-items-center" style={{ height: "100vh" }}>
        <Col lg={12} md={12} sm={12} xs={12}>
          <Card className="mx-auto mb-1">
            <Card.Body>
              {demo?.map((x, index) => {

                return (
                  <Form id="myForm" key={index}>
                    <Form.Group>
                      <Form.Label>{x.question}</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={e => handleInputChange(e, index)}
                      />
                    </Form.Group>
                  </Form>

                )
              })}

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
