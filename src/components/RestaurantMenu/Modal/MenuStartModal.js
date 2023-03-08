import React from "react";
import "./MenuStartModal.css";
import { ListGroup, Modal } from "react-bootstrap";
import { createSearchParams, useNavigate } from "react-router-dom";
import { MenuState } from "../../../context/MenuContext";
import { useEffect } from "react";
import apiFunctions from "../../../global/GlobalFunction";
import { BASE_URL, API_URL } from "../../../global/Constant";
import { useState } from "react";

const MenuStartModal = (props) => {
  const [response, setResponse] = useState([]);
  const [change, setChange] = useState(false);

  let userId = props?.userId;
  let tableNumber = props?.tableNumber;
  let resName = props?.resName;
  let resImage = props?.resImage;
  let type = props?.type;
  let menu = props?.menu;

  const navigate = useNavigate();
  const myfun = (index, menuname, menuDescription) => {
    navigate({
      pathname: "/menudisplay",
      search: createSearchParams({
        index,
        tableNumber,
        resName,
        resImage,
        // menuname,
        // menuDescription,
        userId,
        type,
        menu,
      }).toString(),
    });
  };

  useEffect(() => {
    getAllMenu();
  }, []);

  async function getAllMenu() {
    try {
      let getAllMenu = await apiFunctions.GET_REQUEST(
        BASE_URL + API_URL.GET_ALL_MENU_QR + userId
      );
      let res = getAllMenu.data.menu;

      setResponse(res);
    } catch (err) {
      console.log("An error occurred while fetching menus", err.message);
    }
  }

  return (
    <>
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          {response.map((x, index) => {
            return (
              <ListGroup className="text-center list-group-flush" key={index}>
                <ListGroup.Item
                  onClick={() => myfun(x._id, x.menuName, x.menuDescription)}
                  className="item"
                >
                  {x.menuName}
                </ListGroup.Item>
              </ListGroup>
            );
          })}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MenuStartModal;
