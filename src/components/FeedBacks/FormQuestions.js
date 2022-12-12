import { Button, Col, Form, Row } from "react-bootstrap";
import React from "react";
import { Card } from "react-bootstrap";
import { useState } from "react";

const FormQuestions = () => {
  const [inputList, setInputList] = useState([{ firstName: "", lastName: "" }]);

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
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { firstName: "", lastName: "" }]);
  };

  return (
    <div className="container">
      <Card
        style={{ width: "40rem", backgroundColor: "white" }}
        className="ml-auto"
      >
        {inputList.map((x, i) => {
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
                        value={x.firstName}
                        onChange={(e) => handleInputChange(e, i)}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        name="lastName"
                        placeholder="Type"
                        value={x.lastName}
                        onChange={(e) => handleInputChange(e, i)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Check type="checkbox" label="Check me out" />
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
              <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>
            </Card.Body>
          );
        })}
      </Card>
    </div>
    //   <div className="App">
    //     {inputList.map((x, i) => {
    //       return (
    //         <div className="box">
    //           <input
    //             name="firstName"
    //             placeholder="Enter First Name"
    //             value={x.firstName}
    //             onChange={e => handleInputChange(e, i)}
    //           />
    //           <input
    //             className="ml10"
    //             name="lastName"
    //             placeholder="Enter Last Name"
    //             value={x.lastName}
    //             onChange={e => handleInputChange(e, i)}
    //           />
    //           <div className="btn-box">
    //             {inputList.length !== 1 && <button
    //               className="mr10"
    //               onClick={() => handleRemoveClick(i)}>Remove</button>}
    //             {inputList.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
    //           </div>
    //         </div>
    //       );
    //     })}
    //     <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>
    //   </div>
    // );
  );
};

export default FormQuestions;
