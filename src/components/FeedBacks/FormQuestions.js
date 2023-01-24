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

const FormQuestions = () => {
  const { createfeedback, setCreateFeedback } = MenuState();
  const [searchparams] = useSearchParams();
  const toast = useToast();

  let feedback_index = searchparams.get("id");
  console.log(feedback_index, "feedback_index");
  const [sdf, setSdf] = useState();

  // let A;
  // let FormQuestions = createfeedback[feedback_index].formQuestions;
  function getTimestampInSeconds() {
    return Math.floor(Date.now() / 1000);
  }

  // if (createfeedback[feedback_index].formQuestions.length > 0) {
  //   A = createfeedback[feedback_index].formQuestions;
  // } else {
  //   A = [
  //     { question: "", questionType: "", questionId: getTimestampInSeconds() },
  //   ];
  // }
  // const [inputList, setInputList] = useState(A);
  const [inputList, setInputList] = useState([
    { question: "", questionType: "" },
  ]);

  let questionData = {
    Questions: inputList,
  };

  const testfunc = async (id) => {
    console.log(id);
    console.log(sdf, "sdf");
    if (!sdf) {
      await apiFunctions
        .POST_REQUEST(
          BASE_URL + API_URL.CREATE_FORM_QUESTIONS + id,
          questionData
        )
        .then((res) => {
          if (res.data.success == true) {
            console.log(res);
            //alert(`${res.data.message}`);
            toast({
              position: "top",
              title: `${res.data.message}`,
              status: "success",
              duration: 9000,
              isClosable: true,
            });

            return true;
          } else {
            //alert(`There Some Error`);
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
    } else {
      await apiFunctions
        .PUT_REQUEST(
          BASE_URL + API_URL.UPDATE_QUESTION_BY_FORM_ID + sdf,
          questionData
        )
        .then((res) => {
          if (res.data.success == true) {
            alert(`${res.data.message}`);
            toast({
              position: "top",
              title: `${res.data.message}`,
              status: "success",
              duration: 9000,
              isClosable: true,
            });

            return true;
          } else {
            alert(`There Some Error`);
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
    }
    // if (x > 0) {
    //   createfeedback[feedback_index].formQuestions = inputList;
    //   alert("Your Question Updated");
    // } else {
    //   createfeedback[feedback_index].formQuestions = inputList;
    //   alert("Your Question Has Been Submitted");
    // }
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  const handleRemoveClick = async (index, id) => {
    if (window.confirm("Do You Want To Remove This Question?")) {
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
    console.log("jshshhsh");
    let getFormQuestions = await apiFunctions.GET_REQUEST_BY_ID(
      BASE_URL + API_URL.GET_ALL_QUESTIONS_BY_FORMID + feedback_index
    );

    let setVar = getFormQuestions.data.formQuestion[0].Questions;
    // let id = getFormQuestions.data.formQuestion[0]._id;
    setSdf(getFormQuestions.data.formQuestion[0]?._id);
    // console.log(getFormQuestions.data., "ioioio");
    console.log(setVar);
    setInputList(setVar);

    // console.log(setVar.menuStatus, "setVar.menuStatus");
    // console.log(active, "menuStatus");
    // console.log(name, "bdnme");
  }

  return (
    <div className="container">
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
  );
};

export default FormQuestions;
