import { Button, Col, Form, Row } from "react-bootstrap";
import React from "react";
import { Card } from "react-bootstrap";
import { useState } from "react";
import { MenuState } from "../../context/MenuContext";
import { useNavigate, useSearchParams } from "react-router-dom";
import { List } from "@chakra-ui/react";

const FormQuestions = () => {
  const { createfeedback, setCreateFeedback } = MenuState();
  const [searchparams] = useSearchParams();
  let feedback_index = searchparams.get("index");
  let A;
  let FormQuestions = createfeedback[feedback_index].formQuestions;

  if (createfeedback[feedback_index].formQuestions.length > 0) {
    A = createfeedback[feedback_index].formQuestions;
    console.log(A, "====A=====");
  } else {
    A = [{ question: "", questionType: "" }];
    console.log(A, "====B=====");
  }
  const [inputList, setInputList] = useState(A);

  const testfunc = (x, y) => {
    if (x > 0) {
      createfeedback[feedback_index].formQuestions = inputList;
      console.log(createfeedback[feedback_index].formQuestions, "update");
      alert("Your Question Updated");
    } else {
      // createfeedback[feedback_index].formQuestions.push(inputList[y]);
      createfeedback[feedback_index].formQuestions = inputList;
      console.log(createfeedback[feedback_index].formQuestions, "create");
      alert("Your Question Has Been Submitted");
    }

    //console.log(createfeedback, "cccc");
  };

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
    createfeedback[feedback_index].formQuestions = list;
    //testfunc(createfeedback[feedback_index].formQuestions.length, index);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { question: "", questionType: "" }]);
  };

  return (
    <div className="container">
      <Card
        style={{ width: "40rem", backgroundColor: "white" }}
        className="ml-auto"
      >
        {inputList?.map((x, i) => {
          return (
            <Card.Body>
              <Row>
                <Col>
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Label>Question {i + 1}</Form.Label>
                      <Form.Control
                        type="text"
                        name="question"
                        placeholder="Add Your Question"
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
              </Row>
              <Row>
                <Col>
                  {inputList.length - 1 === i && (
                    <Button variant="primary" onClick={handleAddClick}>
                      Add
                    </Button>
                  )}
                </Col>
                <Col>
                  {inputList.length !== 1 && (
                    <Button
                      variant="primary"
                      onClick={() => handleRemoveClick(i)}
                    >
                      Remove
                    </Button>
                  )}
                </Col>
              </Row>
            </Card.Body>
          );
        })}
      </Card>

      <Button
        variant="primary"
        onClick={() =>
          testfunc(createfeedback[feedback_index].formQuestions.length)
        }
      >
        SAVE
      </Button>
    </div>
  );
};

export default FormQuestions;
