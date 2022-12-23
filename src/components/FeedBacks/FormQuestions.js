import { Col, Form, Row } from "react-bootstrap";
import React from "react";
import { Card } from "react-bootstrap";
import { useState } from "react";
import { MenuState } from "../../context/MenuContext";
import { useSearchParams } from "react-router-dom";
import { BsFillTrashFill } from "react-icons/bs";
import CustomButton from "../../CustomElements/CustomButton";
import { Button } from "@chakra-ui/react";

const FormQuestions = () => {
  const { createfeedback, setCreateFeedback } = MenuState();
  const [searchparams] = useSearchParams();
  let feedback_index = searchparams.get("index");
  let A;
  let FormQuestions = createfeedback[feedback_index].formQuestions;
  function getTimestampInSeconds() {
    return Math.floor(Date.now() / 1000);
  }
  if (createfeedback[feedback_index].formQuestions.length > 0) {
    A = createfeedback[feedback_index].formQuestions;
  } else {
    A = [
      { question: "", questionType: "", questionId: getTimestampInSeconds() },
    ];
  }
  const [inputList, setInputList] = useState(A);

  const testfunc = (x, y) => {
    if (x > 0) {
      createfeedback[feedback_index].formQuestions = inputList;
      console.log(createfeedback[feedback_index].formQuestions, "update");
      alert("Your Question Updated");
      console.log('Your Question Updated"');
    } else {
      createfeedback[feedback_index].formQuestions = inputList;
      console.log(createfeedback[feedback_index].formQuestions, "create");
      alert("Your Question Has Been Submitted");
    }
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
    console.log(list, "list");
  };

  const handleRemoveClick = (index) => {
    if (window.confirm("Do You Want To Remove This Question?")) {
      const list = [...inputList];
      list.splice(index, 1);
      setInputList(list);
      createfeedback[feedback_index].formQuestions = list;
    }
  };

  const handleAddClick = () => {
    setInputList([
      ...inputList,
      { question: "", questionType: "", questionId: getTimestampInSeconds() },
    ]);
  };

  return (
    <div className="container">
      {inputList?.map((x, i) => {
        return (
          <Card
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

                    {/* <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    name="questionType"
                    placeholder="Type"
                    value={x.questionType}
                    onChange={(e) => handleInputChange(e, i)}
                  />
                </Form.Group> */}
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
          onClick={() =>
            testfunc(createfeedback[feedback_index].formQuestions.length)
          }
          style={{ marginLeft: "76%", marginTop: "1%", marginBottom: "2%" }}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default FormQuestions;
