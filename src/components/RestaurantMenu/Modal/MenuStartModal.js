import React from "react";
import "./MenuStartModal.css";
import { ListGroup, Modal } from "react-bootstrap";
import { createSearchParams, useNavigate } from "react-router-dom";
import { MenuState } from "../../../context/MenuContext";

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
