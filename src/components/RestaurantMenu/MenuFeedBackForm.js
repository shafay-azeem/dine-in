import { IconButton } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { BsArrowLeftShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { MenuState } from "../../context/MenuContext";
import "./RestaurantMenu.css";

const MenuFeedBackForm = () => {
  const navigate = useNavigate();

  const ref = useRef(null);
  const {
    feedback,
    setFeedback,
    activeForm,
    createfeedback,
    setCreateFeedback,
    setNotification,
    notification,
  } = MenuState();
  const [demo, setDemo] = useState(createfeedback[activeForm]?.formQuestions);
  const [question, setQuestion] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  function getTimestampInSeconds() {
    return Math.floor(Date.now() / 1000);
  }
  let A = [];
  let B = [];
  let C = [];
  let D = [];
  let H = [];
  let F = [];

  const handleInputChange = (e, index, c, d, h, f, g) => {
    const { value } = e.target;

    A[index] = value;
    B[index] = c;
    C[index] = d;
    D[index] = h;
    H[index] = f;
    F[index] = g;
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
      responses: [],
    };

    for (var i = 0; i < A.length; i++) {
      var jsonObj = {};
      let count = 0;
      jsonObj["q" + (count + 1)] = A[i];
      jsonObj["q" + (count + 2)] = B[i];
      formBody.responses.push(jsonObj);
    }
    feedback.push(formBody);
    setNotification(true);
    alert("feedback Submitted");

    setFeedback([...feedback]);
  };

  return (
    <Container className="my-auto">
      <Row className="d-flex align-items-center" style={{ height: "100vh" }}>
        <Col lg={12} md={12} sm={12} xs={12}>
          <Card className="mx-auto feedbackSubmit-form text-center ">
            <div className="text-left px-3">
              <IconButton
                icon={<BsArrowLeftShort />}
                onClick={() => navigate(-1)}
                className="d-block"
              />
            </div>
            <Card.Body className="p-5">
              {demo?.map((x, index) => {
                return (
                  <Form id="myForm" key={index}>
                    <Form.Group>
                      <p>{x.question}</p>

                      <Form.Control
                        ref={ref}
                        id={index}
                        type="text"
                        onChange={(e) =>
                          handleInputChange(
                            e,
                            index,
                            x.question,
                            createfeedback[activeForm].formName,
                            createfeedback[activeForm].createdDate,
                            createfeedback[activeForm].id,
                            createfeedback[activeForm].createdTime
                          )
                        }
                      />
                    </Form.Group>
                  </Form>
                );
              })}

              <div className=" text-center">
                <Button
                  type="submit"
                  size="md"
                  onClick={() => {
                    feedbackSubmit();
                  }}
                >
                  SUBMIT
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
