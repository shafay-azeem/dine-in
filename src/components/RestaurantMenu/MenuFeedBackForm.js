import { IconButton } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { BsArrowLeftShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { MenuState } from "../../context/MenuContext";
import { API_URL, BASE_URL } from "../../global/Constant";
import apiFunctions from "../../global/GlobalFunction";
import "./RestaurantMenu.css";
import { useToast } from "@chakra-ui/react";
const MenuFeedBackForm = () => {
  const navigate = useNavigate();

  const toast = useToast();
  const ref = useRef(null);
  const {
    feedback,
    setFeedback,
    activeForm,
    createfeedback,
    setCreateFeedback,
    setNotification,
    notification,
    feedbackFormList,
  } = MenuState();
  const [demo, setDemo] = useState(
    feedbackFormList[activeForm]?.formQuestions[0].Questions
  );
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
    let id = feedbackFormList[activeForm]._id;
    let formBody = {
      formName: feedbackFormList[activeForm].formName,
      response: [],
    };

    for (var i = 0; i < A.length; i++) {
      var jsonObj = {};
      let count = 0;
      jsonObj["question"] = B[i];
      jsonObj["answer"] = A[i];
      formBody.response.push(jsonObj);
    }
    // feedback.push(formBody);

    // console.log(formBody)

    apiFunctions
      .POST_REQUEST(BASE_URL + API_URL.CREATE_RESULT_BY_FORM_ID + id, formBody)
      .then((res) => {
        if (res.data.success == true) {
          // console.log(res.data.formResponse);
          toast({
            position: "top",
            title: `feedback Submitted`,
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          // setFeedback(res.data.formResponse)
          return true;
        } else {
          toast({
            position: "top",
            title: `There Some Error`,
            status: "error",
            duration: 9000,
            isClosable: true,
          });
          return false;
        }
      });
    setNotification(true);

    // setFeedback([...feedback]);
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
                            feedbackFormList[activeForm].formName
                            // createfeedback[activeForm].createdDate,
                            // createfeedback[activeForm].id,
                            // createfeedback[activeForm].createdTime
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
