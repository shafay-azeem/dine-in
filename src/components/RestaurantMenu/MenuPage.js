import React from "react";
import { useState } from "react";
import { Button, Col, Row, Stack } from "react-bootstrap";
import "./MenuPage.css";
import MenuStartModal from "./Modal/MenuStartModal";
import { useNavigate } from "react-router-dom";
import { MenuState } from "../../context/MenuContext";

const MenuPage = () => {
  const navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);
  const { activeForm } = MenuState();

  const menuFeedback = () => {
    navigate({
      pathname: "/menufeedback",
    });
  };

  return (
    <div>
      <Row className="align-items-center" style={{ height: "100vh" }}>
        <Col lg={5} md={12} sm={12} className="d-flex justify-content-center">
          <Stack className="mx-auto text-center" gap={4}>
            <p className="restaurant-name">Your Restaurant Name</p>
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
            {Number.isInteger(activeForm) ? (
              <p onClick={menuFeedback} className="feedback-text">
                Give Feedback
              </p>
            ) : null}
          </Stack>
          <MenuStartModal show={modalShow} onHide={() => setModalShow(false)} />
        </Col>
        <Col
          lg={2}
          className="d-none d-lg-block d-xl-block d-flex justify-content-center"
        >
          <div
            className="d-flex justify-content-center"
            style={{ height: "100vh" }}
          >
            <div className="vr"></div>
          </div>
        </Col>
        <Col lg={5} className="text-center d-none d-lg-block d-xl-block">
          <p className="restaurant-name">Your Restaurant Name</p>
        </Col>
      </Row>
    </div>
  );
};

export default MenuPage;
