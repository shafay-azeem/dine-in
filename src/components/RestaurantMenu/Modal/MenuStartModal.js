import React from "react";
import "./MenuStartModal.css";
import { ListGroup, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MenuStartModal = (props) => {
  const navigate = useNavigate();
  const reports = () => {
    navigate({
      pathname: "/menudisplay",
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
          <ListGroup className="text-center">
            <ListGroup.Item onClick={reports} className="item">
              Menu One
            </ListGroup.Item>
            <ListGroup.Item>Menu Two</ListGroup.Item>
            <ListGroup.Item>Sample Menu</ListGroup.Item>
          </ListGroup>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MenuStartModal;
