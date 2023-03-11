import React from "react";
import { useState } from "react";
import { Button, Col, Row, Stack } from "react-bootstrap";
import "./MenuPage.css";
import MenuStartModal from "./Modal/MenuStartModal";
import { createSearchParams, useNavigate } from "react-router-dom";
import { MenuState } from "../../context/MenuContext";
import { Heading, IconButton } from "@chakra-ui/react";
import { BsArrowLeftShort } from "react-icons/bs";
import apiFunctions from "../../global/GlobalFunction";
import { API_URL, BASE_URL } from "../../global/Constant";
import { useEffect } from "react";

const MenuPage = (props) => {
  const navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);
  const { activeForm } = MenuState();
  const [demo, setDemo] = useState([]);
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resName, setResName] = useState();
  const [resImage, setResImage] = useState();
  const [type, setType] = useState();

  let tableNumber = props?.tableNumber;
  let TableNumber = props?.TableNumber;
  let menu = props?.menu;

  // console.log(menu === "undefined", "menu");
  // console.log(menu)
  useEffect(() => {
    getActiveFormQuestions();
  }, []);

  async function getActiveFormQuestions() {
    try {
      let getFormQuestions = await apiFunctions.GET_REQUEST(
        BASE_URL + API_URL.GET_ALL_FORM_QR
      );
      let res = getFormQuestions.data.feedbackForm;
      setDemo(res[0]?.formQuestions[0].Questions);
    } catch (error) {
      console.error(error);
    }
  }

  let userId = props?.userId;

  const menuFeedback = () => {
    navigate({
      pathname: "/menufeedback",
      search: createSearchParams({
        userId,
      }).toString(),
    });
  };
  useEffect(() => {
    getActiveFormQuestions();
    getAllMenu();
    getRestaurantDetail();
  }, []);

  async function getRestaurantDetail() {
    try {
      setLoading(false);
      let restaurantDetail = await apiFunctions.GET_REQUEST(
        BASE_URL + API_URL.GET_RESTURANT_DETAIL + userId
      );
      let res = restaurantDetail.data.user;

      setResName(res.resName);
      setResImage(res.resImage);
      setLoading(true);
      // setChange(true);
    } catch (err) {
      console.log("An error occurred while fetching menus", err.message);
    }
  }

  async function getActiveFormQuestions() {
    try {
      let getFormQuestions = await apiFunctions.GET_REQUEST(
        BASE_URL + API_URL.GET_ALL_FORM_QR + userId
      );
      let res = getFormQuestions.data.feedbackForm;
      if (!res[0]?.formQuestions[0]?.Questions) {
        return setDemo(null);
      }
      setDemo(res[0]?.formQuestions[0].Questions);
    } catch (error) {
      console.error(error);
    }
  }
  async function getAllMenu() {
    try {
      setLoading(false);
      let getAllMenu = await apiFunctions.GET_REQUEST(
        BASE_URL + API_URL.GET_ALL_MENU_QR + userId
      );
      let res = getAllMenu.data.menu;

      setResponse(res);
      setLoading(true);

      // setChange(true);
    } catch (err) {
      console.log("An error occurred while fetching menus", err.message);
    }
  }

  console.log(menu);

  return (
    <div>
      <Row className="align-items-center" style={{ height: "100vh" }}>
        <Col lg={5} md={12} sm={12} className="d-flex justify-content-center">
          <Stack className="mx-auto text-center" gap={4}>
            {loading ? (
              <Heading size="lg">{resName}</Heading>
            ) : (
              <div className="loading-screen">
                <div className="loading-spinner"> </div>
              </div>
            )}

            {menu === null || menu === "null" ? (
              <Heading size="sm" className="mt-2">
                YOUR TABLE NUMBER : {TableNumber}
              </Heading>
            ) : null}

            {menu === null || menu === "null" ? (
              <Button
                onClick={() => {
                  setModalShow(true);
                  setType("dinein");
                }}
                className="btn-start mx-auto"
                style={{
                  color: "white",
                  backgroundColor: "#009997",
                  border: "none",
                  borderRadius: "20px",
                  width: "10rem",
                }}
              >
                Tap To Start
              </Button>
            ) : (
              <>
                <Button
                  onClick={() => {
                    setModalShow(true);
                    setType("delivery");
                  }}
                  className="btn-start mx-auto"
                  style={{
                    color: "white",
                    backgroundColor: "#009997",
                    border: "none",
                    borderRadius: "20px",
                    width: "10rem",
                  }}
                >
                  Delivery
                </Button>

                <Button
                  onClick={() => {
                    setModalShow(true);
                    setType("pickup");
                  }}
                  className="btn-start mx-auto"
                  style={{
                    color: "white",
                    backgroundColor: "#009997",
                    border: "none",
                    borderRadius: "20px",
                    width: "10rem",
                  }}
                >
                  Pickup
                </Button>
              </>
            )}

            {demo ? (
              <p onClick={menuFeedback} className="feedback-text">
                Give Feedback
              </p>
            ) : null}
          </Stack>
          <MenuStartModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            userId={userId}
            tableNumber={tableNumber}
            TableNumber={TableNumber}
            resName={resName}
            resImage={resImage}
            type={type}
            menu={menu}
          />
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
          <div>
            <img className="preview" src={resImage} alt="" />
          </div>
          {/* <p className="restaurant-name">Your Restaurant Name</p> */}
        </Col>
      </Row>
    </div>
  );
};

export default MenuPage;
