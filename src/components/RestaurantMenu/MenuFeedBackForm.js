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
import Spinner from "react-bootstrap/Spinner";

const MenuFeedBackForm = (props) => {
  let userId = props?.userId;
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
    getResults,
    setGetResults,
  } = MenuState();
  const [demo, setDemo] = useState([]);
  const [loading, setLoading] = useState();
  const [question, setQuestion] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [form, setForm] = useState();

  function getTimestampInSeconds() {
    return Math.floor(Date.now() / 1000);
  }
  let A = [];
  let B = [];
  let C = [];
  let D = [];
  let H = [];
  let F = [];

  useEffect(() => {
    getActiveFormQuestions();
  }, []);

  async function getActiveFormQuestions() {
    try {
      setLoading(false);
      let getFormQuestions = await apiFunctions.GET_REQUEST(
        BASE_URL + API_URL.GET_ALL_FORM_QR + userId
      );

      if (getFormQuestions.data.feedbackForm.length == 0) {
        setLoading(true);
      }

      let res = getFormQuestions.data.feedbackForm;
      setDemo(res[0]?.formQuestions[0].Questions);
      setForm(res[0]);
      setLoading(true);
    } catch (error) {
      console.error(error);
    }
  }

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
    // console.log(demo, 'demo')
    let qLength;
    let counter = 0;
    for (qLength = 0; qLength < demo.length; qLength++) {
      // console.log(demo[qLength].question)
      if (demo[qLength].question) {
        counter += 1;
      }
    }
    // }
    // console.log(counter, "length ");
    // console.log(A.length);
    // console.log(qLength + 1, 'qlength')
    // console.log(A.length)
    if (A.length !== counter) {
      return toast({
        position: "top",
        title: `Please Answer All fields`,
        status: "warning",
        duration: 1000,
        isClosable: true,
      });
    }
    let id = form._id;
    let formBody = {
      formName: form.formName,
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
            duration: 1000,
            isClosable: true,
          });
          navigate(-1);
          return true;
        } else {
          toast({
            position: "top",
            title: `There Some Error`,
            status: "error",
            duration: 1000,
            isClosable: true,
          });
          return false;
        }
      });
    setNotification(true);

    // setFeedback([...feedback]);
  };

  return (
    <>
      <Container className="my-auto">
        <Row className="d-flex align-items-center" style={{ height: "100vh" }}>
          <Col lg={12} md={12} sm={12} xs={12}>
            {loading ? (
              <Card className="mx-auto feedbackSubmit-form text-center ">
                <div className="text-left px-3">
                  <IconButton
                    icon={<BsArrowLeftShort />}
                    onClick={() => navigate(-1)}
                    className="d-block"
                    colorScheme="white"
                  />
                  {/* <button>Submitt Now</button> */}
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
                                form.formName
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

                  <div className="Submitt text-center">
                    <button
                      type="submit"
                      size="md"
                      onClick={() => {
                        feedbackSubmit();
                      }}
                    >
                      SUBMIT
                    </button>
                  </div>
                </Card.Body>
              </Card>
            ) : (
              <div className="loading-screen">
                <div className="loading-spinner"> </div>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MenuFeedBackForm;
