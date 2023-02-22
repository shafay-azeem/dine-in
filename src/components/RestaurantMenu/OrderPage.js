import React from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import RestaurantHeader from "./RestaurantHeader";
const OrderPage = () => {
  const navigate = useNavigate();
  const img = {
    KFCcard: require("../Assets/burger.jpg"),
  };
  return (
    <div className="container">
      <RestaurantHeader />
      <div className="row justify-content-between mt-3">
        <div className="col-lg-7">
          <div class="card rounded-3 mb-4">
            <div class="card-body p-4">
              <div class="row d-flex justify-content-between align-items-center">
                <div class="col-md-2 col-lg-2 col-xl-2">
                  <img
                    src={img.KFCcard}
                    style={{ width: "60px", height: "60px" }}
                    alt="img"
                  />
                </div>
                <div class="col-md-4 col-lg-4 col-xl-4">
                  <p class="lead fw-normal mb-2">Basic T-shirt</p>
                  <p>$499.0</p>
                </div>
                <div class="col-md-4 col-lg-4 col-xl-4 d-flex justify-content-end">
                  <button
                    class="btn btn-link px-2"
                    onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                  >
                    <i class="fas fa-minus"></i>
                  </button>

                  <input
                    id="form1"
                    min="0"
                    name="quantity"
                    value="2"
                    type="number"
                    class="form-control form-control-sm"
                  />

                  <button class="btn btn-link px-2">
                    <i class="fas fa-plus"></i>
                  </button>
                  <h5 class="mb-0 ms-3">$998.00</h5>
                </div>
                <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                  <a href="#!" class="text-danger">
                    <i class="fas fa-trash fa-lg"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-5">
          <div
            className="inner"
            style={{
              backgroundColor: "#f8f9fa",
              padding: "20px 10px",
              borderRadius: "10px",
            }}
          >
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Special Instructions (Optional)</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <div className="form-check d-flex justify-content-between align-items-center">
              <input
                className="form-check-input me-2"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Save for future
              </label>
              <span className="text-muted ms-auto">0/200</span>
            </div>
            <button
              style={{
                backgroundColor: "#1d1816",
                borderColor: "white",
                borderRadius: "10px",
                width: "100%",
                height: "50px",
                marginTop: "40px",
                color: "white",
              }}
            >
              Done
            </button>

            <button
              onClick={() => navigate("/Payment")}
              style={{
                width: "100%",
                height: "50px",
                marginTop: "10px",
                color: "white",
                backgroundColor: "#fe0000",
                borderStyle: "none",
                borderRadius: "10px",
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
