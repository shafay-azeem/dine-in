import React from "react";
import { useState } from "react";
import { Button, Col, Row, Stack } from "react-bootstrap";
import "./MenuPage.css";
import MenuStartModal from "./Modal/MenuStartModal";
import { useNavigate } from "react-router-dom";

const MenuPage = () => {
  const navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);

  const menuFeedback = () => {
    navigate({
      pathname: "/menufeedback",
    });
  };

  return (
    <div>
      <Row className="align-items-center" style={{ height: "100vh" }}>
        <Col lg={6} md={12} sm={12} className="d-flex justify-content-center">
          <Stack className="mx-auto text-center" gap={3}>
            <p>Your Restaurant Name</p>
            <Button
              onClick={() => setModalShow(true)}
              className="btn-start mx-auto"
              style={{
                color: "white",
                backgroundColor: "red",
                border: "none",
                borderRadius: "20px",
                width: "10rem",
              }}
            >
              Tap To Start
            </Button>
            <p onClick={menuFeedback}>Give Feedback</p>
          </Stack>
          <MenuStartModal show={modalShow} onHide={() => setModalShow(false)} />
        </Col>
        <Col
          lg={6}
          className="d-flex justify-content-center d-none d-lg-block d-xl-block"
        >
          Your Restaurant Name
        </Col>
      </Row>
    </div>
  );
};

export default MenuPage;
