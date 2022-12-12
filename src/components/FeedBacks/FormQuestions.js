import { Button, Col, Form, Row } from "react-bootstrap";
import React from "react";
import { Card } from "react-bootstrap";
import { useState } from "react";
import { MenuState } from "../../context/MenuContext";

const FormQuestions = () => {
  const [inputList, setInputList] = useState([{ question: "", questionType: "" }]);
  const { editFeedback, setEditFeedback } = MenuState(inputList);


  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...editFeedback];
    list[index][name] = value;
    // setInputList(list);
    setEditFeedback(list)
    console.log(editFeedback, "editfeedback")
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...editFeedback];
    list.splice(index, 1);
    // setInputList(list);
    setEditFeedback(list)
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setEditFeedback([...editFeedback, { question: "", questionType: "" }]);
  };

  return (
    <div className="container">
      <Card
        style={{ width: "40rem", backgroundColor: "white" }}
        className="ml-auto"
      >
        {editFeedback?.map((x, i) => {
          return (
            <Card.Body>
              <Row>
                <Col>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
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
                    {/* <Form.Group className="mb-3">
                      <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group> */}
                  </Form>
                </Col>
              </Row>
              <Row>
                <Col>
                  {editFeedback.length - 1 === i && (
                    <Button variant="primary" onClick={handleAddClick}>
                      Add
                    </Button>
                  )}
                </Col>
                <Col>
                  {editFeedback.length !== 1 && (
                    <Button
                      variant="primary"
                      onClick={() => handleRemoveClick(i)}
                    >
                      Remove
                    </Button>
                  )}
                </Col>
              </Row>
              <div style={{ marginTop: 20 }}>{JSON.stringify(editFeedback)}</div>
            </Card.Body>

          );
        })}
      </Card>
    </div>
  );
};

export default FormQuestions;
