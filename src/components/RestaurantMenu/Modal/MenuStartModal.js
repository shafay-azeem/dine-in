import React from "react";
import "./MenuStartModal.css";
import { Button, ListGroup, Modal } from "react-bootstrap";

const MenuStartModal = (props) => {
  return (
    <>
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <ListGroup>
          <ListGroup.Item>Menu One</ListGroup.Item>
          <ListGroup.Item>Menu Two</ListGroup.Item>
          <ListGroup.Item>Sample Menu</ListGroup.Item>
        </ListGroup>
      </Modal>
    </>
  );
};

export default MenuStartModal;
