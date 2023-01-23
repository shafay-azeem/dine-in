import React from "react";
import "./MenuStartModal.css";
import { ListGroup, Modal } from "react-bootstrap";
import { createSearchParams, useNavigate } from "react-router-dom";
import { MenuState } from "../../../context/MenuContext";
import { useEffect } from "react";
import apiFunctions from "../../../global/GlobalFunction";
import { BASE_URL, API_URL } from "../../../global/Constant";

const MenuStartModal = (props) => {
  const { response, setResponse } = MenuState();

  const navigate = useNavigate();
  const myfun = (index, menuname, menuDescription) => {
    navigate({
      pathname: "/menudisplay",
      search: createSearchParams({
        index,
        menuname,
        menuDescription,
      }).toString(),
    });
  };

  useEffect(() => {
    getAllMenu();
  }, [response]);

  async function getAllMenu() {
    let getAllMenu = await apiFunctions.GET_REQUEST(
      BASE_URL + API_URL.GET_ALL_MENU
    );
    let res = getAllMenu.data.menu;
    // console.log(res)
    setResponse(res);
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
              <ListGroup className="text-center list-group-flush">
                <ListGroup.Item
                  onClick={() => myfun(index, x.menuName, x.menuDescription)}
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
