import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { API_URL, BASE_URL } from "../../global/Constant";
import apiFunctions from "../../global/GlobalFunction";

const OrderReceipt = () => {
  const [searchparams] = useSearchParams();
  const { orderId } = useParams();
  let user_id = localStorage.getItem("user_id");

  const [payment, setPayment] = useState();
  const [orderDetail, setOrderDetail] = useState();

  useEffect(() => {
    paymentDetailByOrderId();
    getSingleOrder();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  async function paymentDetailByOrderId() {
    try {
      let paymentDetailByOrderId = await apiFunctions.GET_REQUEST(
        BASE_URL +
          API_URL.GET_PAYMENT_DETAIL_BY_ORDERID +
          user_id +
          `?orderId=${orderId}`
      );
      let res = paymentDetailByOrderId.data.payment;
      setPayment(res);

      return true;
    } catch (err) {
      console.log("An error occurred while fetching carts", err.message);
    }
  }

  async function getSingleOrder() {
    try {
      let getSingleOrder = await apiFunctions.GET_REQUEST(
        BASE_URL + API_URL.GET_SINGLE_ORDER + user_id + `?orderId=${orderId}`
      );
      let res = getSingleOrder.data.order;
      setOrderDetail(res);

      return true;
    } catch (err) {
      console.log("An error occurred while fetching carts", err.message);
    }
  }

  return (
    <>
      <div className="container mt-5">
        <div className="Box-Styling row p-5">
          <div className="col-md-6 mt-3">
            <h6 className="text-black">Order 3 - {orderDetail?.tableNumber}</h6>
          </div>
          <div className="col-md-1"></div>

          <div className="Button-Styling mt-3 col-md-3 d-flex align-items-center justify-content-around">
            <button type="button" class="btn btn-light">
              Print
            </button>
            {/* <button type="button" class="btn btn-light">
              Change Status
            </button>
            <button type="button" class="btn btn-light">
              Delete
            </button> */}
          </div>
          <div className="col-md-2"></div>

          {/* Orders Details  */}
          <div className="row">
            <div className="col-md-6 mt-3">
              <h6 className="text-black">Order Details</h6>

              <div className="d-flex align-items-start justify-content-between mt-3">
                {/* <small className="global text-black">
                  Sent Time : Mar 7th 2023, 4:14:08 pm
                </small> */}
                <small className="global text-black">
                  Req. Payment Method: {payment?.payment_method}
                </small>
              </div>

              <div className=" d-flex align-items-start justify-content-between mt-3">
                <small className="global text-black">
                  Date : {formatDate(orderDetail?.createdAt.toString())}
                </small>
                {/* <small className="global text-black">Source : Mobile</small> */}
              </div>

              <div className="d-flex align-items-start justify-content-between mt-3">
                <small className="global text-black">
                  Notes: {orderDetail?.instructions}
                </small>
                {/* <small className="global text-black">
                  ETA : Mar 7th 2023, 4:59:03 pm
                </small> */}
              </div>
            </div>

            <div className="col-md-6 mt-3">
              <h6 className="text-black">Payments Details</h6>

              <div className="d-flex align-items-start justify-content-between mt-3">
                <small className="global text-black">
                  Total Amount : {payment?.amount}
                </small>
                {/* <small className="global text-black">Tip : U$$0.00</small> */}
              </div>

              <div className="d-flex align-items-start justify-content-between mt-3">
                {/* <small className="global text-black">Discount : U$$0.00</small> */}
                <small className="global text-black">
                  Transaction Id : {payment?.transaction_id}
                </small>
              </div>

              <div className="d-flex align-items-start justify-content-between mt-3">
                <small className="global text-black">
                  Payment Status : {payment?.payment_status}
                </small>
                {/* <small className="global text-black">Paid : U$$0.00</small> */}
              </div>

              <div className="d-flex align-items-start justify-content-between mt-3">
                {/* <small className="global text-black">Tax : U$$0.00</small> */}
                {/* <small className="global text-black">
                  Payment Method : {payment?.payment_method}
                </small> */}
              </div>
            </div>
          </div>

          {/* Customer Details  */}
          <div className="col-md-6 mt-3">
            <h6 className="text-black">Customer Details</h6>

            <div className="d-flex align-items-start justify-content-between mt-3">
              <small className="global text-black">
                Name : {orderDetail?.customerName}
              </small>

              {orderDetail?.address ? (
                <small className="global text-black">
                  Adress :<p className="Adress">{orderDetail?.address}</p>
                  <p className="Link">See the Location</p>
                </small>
              ) : null}
            </div>

            <div className="d-flex align-items-start justify-content-between mt-3">
              <small className="global text-black">
                Phone : {payment?.phone_Number}
              </small>
              <small className="global text-black">
                Email : {payment?.email}
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderReceipt;
