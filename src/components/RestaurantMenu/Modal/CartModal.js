import React from "react";

import Offcanvas from "react-bootstrap/Offcanvas";
import { AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const CartModal = ({ show, toggleOffcanvas }) => {
  const navigate = useNavigate();
  const img = {
    KFCcard: require("../../Assets/burger.jpg"),
  };
  return (
    <div>
      <Offcanvas show={show} placement="end">
        <Offcanvas.Header closeButton onClick={toggleOffcanvas}>
          <Offcanvas.Title>Your Cart</Offcanvas.Title>
          <span
            className="me-2"
            style={{ marginLeft: "150px", fontWeight: "600", fontSize: "20px" }}
          >
            Rs 400
          </span>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div
            className="row"
            style={{
              backgroundColor: "#ffffff",
              padding: "20px 10px",
              borderRadius: "10px",
              margin: "5px",
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
            }}
          >
            <div className="col-3">
              <img
                src={img.KFCcard}
                style={{ width: "60px", height: "60px" }}
                alt="img"
              />
            </div>

            <div className="col-6">
              <span className="me-2">Krunch Burger</span> <br />
              <div className="d-flex justify-content-start align-items-center mt-2">
                <span className="me-2">
                  <AiOutlineDelete size={20} color="#0000FF" />
                </span>
                <span className="me-2">2</span>
                <span className="me-2">
                  <AiOutlinePlus size={20} color="#0000FF" />
                </span>
              </div>
            </div>

            <div className="col-3">
              <span>Rs 260</span>
            </div>
          </div>
        </Offcanvas.Body>

        <button
          onClick={() => navigate("/OrderPage")}
          style={{
            backgroundColor: "#0000FF",
            color: "white",
            borderRadius: "10px",
            borderColor: "#FE0000",
            height: "35px",
            marginBottom: "15px",
            width: "95%",
            alignSelf: "center",
          }}
          type="button"
        >
          View Your Cart
        </button>
      </Offcanvas>
    </div>
  );
};

export default CartModal;
