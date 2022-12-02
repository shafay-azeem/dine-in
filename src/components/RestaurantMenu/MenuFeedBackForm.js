import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const MenuFeedBackForm = () => {
  return (



    <Container className="my-auto">
      <Row className="d-flex align-items-center" style={{ height: "100vh" }} >
        <Col lg={12} md={12} sm={12} xs={12}>
          <Card className="mx-auto mb-1">
            <Card.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <div className=" text-center" >
                  <Button variant="primary" type="submit" >
                    Submit
                  </Button>
                </div>
              </Form>

            </Card.Body>

          </Card>


        </Col>

      </Row>
    </Container>


  );
}



export default MenuFeedBackForm;
