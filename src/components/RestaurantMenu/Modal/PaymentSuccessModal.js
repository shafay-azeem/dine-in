import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router";
import { createSearchParams } from "react-router-dom";

const PaymentSuccessModal = (props) => {
  const navigate = useNavigate();
  let USERID = props?.userId;
  let tableNumber = props?.tableNumber;
  let type = props?.type;
  let uniqueOrderId = props?.uniqueOrderId;

  let menu = type != "dinein" ? true : null;

  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Payment Details</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Email : {props.email}</p>
          <br />
          <br />
          <p>Phone Number : {props.phoneNumber}</p>
          <br />
          <br />
          <p>Payment Method : {props.paymentMethod}</p>
          <br />
          <br />
          <p>Transaction ID : {props.transactionId}</p>
          <br />
          <br />
          <p>Amount : {props.amount}</p>
          <br />
          <br />
          <p>Unique Order Id : {uniqueOrderId}</p>
          <br />
          <br />

          {type != "dinein" ? (
            <p>Type : {type}</p>
          ) : (
            <p>Table Number : {props.tableNumber}</p>
          )}
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() =>
              navigate({
                pathname: "/menustart",
                search: createSearchParams({
                  USERID,
                  tableNumber,
                  type,
                  menu,
                }).toString(),
              })
            }
          >
            Okay
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default PaymentSuccessModal;
