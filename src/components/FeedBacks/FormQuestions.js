import { Col, Form, Row } from "react-bootstrap";
import React from "react";
import { Card } from "react-bootstrap";
import { useState } from "react";
import { MenuState } from "../../context/MenuContext";
import { useSearchParams } from "react-router-dom";
import { BsFillTrashFill } from "react-icons/bs";
import CustomButton from "../../CustomElements/CustomButton";
import { Button } from "@chakra-ui/react";
import apiFunctions from "../../global/GlobalFunction";
import { API_URL, BASE_URL } from "../../global/Constant";
import { useEffect } from "react";
import { useToast } from "@chakra-ui/react";
import Spinner from "react-bootstrap/Spinner";

const FormQuestions = () => {
  const { createfeedback, setCreateFeedback } = MenuState();
  const [searchparams] = useSearchParams();
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  let feedback_index = searchparams.get("id");

  const [sdf, setSdf] = useState();

  function getTimestampInSeconds() {
    return Math.floor(Date.now() / 1000);
  }

  const [inputList, setInputList] = useState([
    { question: "", questionType: "" },
  ]);

  let questionData = {
    Questions: inputList,
  };

  const testfunc = async (id) => {
    if (!sdf) {
      await apiFunctions
        .POST_REQUEST(
          BASE_URL + API_URL.CREATE_FORM_QUESTIONS + id,
          questionData
        )
        .then((res) => {
          if (res.data.success == true) {
            toast({
              position: "top",
              title: `Form Questions Created SuccessFully`,
              status: "success",
              duration: 1000,
              isClosable: true,
            });

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
    } else {
      await apiFunctions
        .PUT_REQUEST(
          BASE_URL + API_URL.UPDATE_QUESTION_BY_FORM_ID + sdf,
          questionData
        )
        .then((res) => {
          if (res.data.success == true) {
            toast({
              position: "top",
              title: `Updated SuccessFully`,
              status: "success",
              duration: 1000,
              isClosable: true,
            });

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
    }
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  const handleRemoveClick = async (index, id) => {
    if (
      toast({
        position: "top",
        title: "Question Has Been Removed Press Save",
        status: "success",
        duration: 1000,
        isClosable: true,
      })
    ) {
      const list = [...inputList];
      list.splice(index, 1);
      setInputList(list);

      // createfeedback[feedback_index].formQuestions = list;
    }
  };

  const handleAddClick = () => {
    setInputList([...inputList, { question: "", questionType: "" }]);
  };

  useEffect(() => {
    getAllQuestionsByFormID();
  }, []);

  async function getAllQuestionsByFormID() {
    let getFormQuestions = await apiFunctions.GET_REQUEST_BY_ID(
      BASE_URL + API_URL.GET_ALL_QUESTIONS_BY_FORMID + feedback_index
    );
    if (getFormQuestions.data.formQuestion.length == 0) {
      setLoading(true);
    }
    let setVar = getFormQuestions.data.formQuestion[0].Questions;

    setSdf(getFormQuestions.data.formQuestion[0]?._id);

    setInputList(setVar);
    setLoading(true);
  }

  return (
    <div className="container">
      {loading ? (
        <div>
          {inputList?.map((x, i) => {
            return (
              <Card
                key={i}
                className="feedBack-Card mx-auto mt-3"
                style={{ width: "50rem" }}
              >
                <Card.Body>
                  <Row>
                    <Col lg={10}>
                      <Form>
                        <Form.Group className="mb-3">
                          <Form.Label>Question {i + 1}</Form.Label>
                          <Form.Control
                            type="text"
                            name="question"
                            placeholder="Add Your Question"
                            size="sm"
                            value={x.question}
                            onChange={(e) => handleInputChange(e, i)}
                          />
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Control
                            type="text"
                            name="questionType"
                            placeholder="Type"
                            value={x.questionType}
                            onChange={(e) => handleInputChange(e, i)}
                          />
                        </Form.Group>
                      </Form>
                    </Col>
                    <Col lg={2} className="d-flex align-items-center">
                      {inputList.length !== 1 && (
                        <BsFillTrashFill
                          onClick={() => handleRemoveClick(i)}
                          style={{ cursor: "pointer" }}
                        />
                      )}
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      {inputList.length - 1 === i && (
                        <CustomButton
                          click={handleAddClick}
                          btnText={"Add Question"}
                          size={"sm"}
                          mb={2}
                        />
                      )}
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            );
          })}

          <div>
            <Button
              colorScheme="teal"
              size="sm"
              onClick={() => testfunc(feedback_index)}
              style={{ marginLeft: "76%", marginTop: "1%", marginBottom: "2%" }}
            >
              Save
            </Button>
          </div>
        </div>
      ) : (
        <div className="loading-screen">
          <div className="loading-spinner"> </div>
        </div>
      )}
    </div>
  );
};

export default FormQuestions;
