import React, { useEffect, useRef, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { MenuState } from "../../context/MenuContext";
import "./RestaurantMenu.css";

const MenuFeedBackForm = () => {
  const ref = useRef(null);
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
  let B = []
  let C = []
  let D = []
  let H = []
  let F = []


  const handleInputChange = (e, index, c, d, h, f, g) => {

    const { value } = e.target

    A[index] = value;
    B[index] = c;
    C[index] = d
    D[index] = h;
    H[index] = f;
    F[index] = g



    // var C = {};
    // let count = 0
    // for (var i = 0; i < A.length; i++) {
    //   C["answer" + (count + 1)] = A[i];
    //   C["questionId" + (count + 2)] = B[i];
    //   count = count + 2
    // }
    // console.log([C], "===C+++====")

  };

  let feedbackData = {
    id: getTimestampInSeconds(),
    question: question,
    name: name,
    email: email,
  };

  const feedbackSubmit = () => {
    let formBody = {
      formId: getTimestampInSeconds(),
      formName: createfeedback[activeForm].formName,
      createdDate: new Date().toLocaleDateString(),
      createdTime: new Date().toTimeString().slice(0, 8),
      responses: []
    }

    for (var i = 0; i < A.length; i++) {
      var jsonObj = {};
      let count = 0
      jsonObj["q" + (count + 1)] = A[i];
      jsonObj["q" + (count + 2)] = B[i];
      formBody.responses.push(jsonObj);
    }
    feedback.push(formBody);
    setNotification(true)
    alert("feedback Submitted");
    document.getElementById("myForm").reset();
    setFeedback([...feedback]);
    console.log(demo, "demo")
    console.log(createfeedback, "createfeedback")
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
                        ref={ref}
                        id={index}
                        type="text"
                        onChange={e => handleInputChange(
                          e,
                          index,
                          x.question,
                          createfeedback[activeForm].formName,
                          createfeedback[activeForm].createdDate,
                          createfeedback[activeForm].id,
                          createfeedback[activeForm].createdTime)}
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
