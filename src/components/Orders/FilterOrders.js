import React from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import SideDrawer from "../miscellaneous/SideDrawer";
import PaidImg from "../Assets/paid.png";
import UnPaidImg from "../Assets/paper-money.png";
import AllOrdersImg from "../Assets/order-delivery.png";

const FilterOrders = () => {
  const navigate = useNavigate();

  const navigateToOrder = (paymentStatus) => {
    navigate({
      pathname: "/order",
      search: createSearchParams({
        paymentStatus,
      }).toString(),
    });
  };

  return (
    <div style={{ width: "100%", marginBottom: "5%" }}>
      <SideDrawer />

      <div className="d-flex text-center justify-content-center vh-100 align-items-center">
        <div className="img">
          <img
            src={PaidImg}
            className="img-fluid d-block mx-auto w-25"
            alt="gggg"
          />
          <h3
            className="py-3 heading"
            onClick={() => navigateToOrder("Payment Paid")}
          >
            Paid
          </h3>
        </div>
        <div className="img">
          <img
            src={UnPaidImg}
            className="img-fluid d-block mx-auto w-25"
            alt="fff"
          />
          <h3
            className="py-3 heading"
            onClick={() => navigateToOrder("Pending")}
          >
            Unpaid
          </h3>
        </div>
        <div className="img">
          <img
            src={AllOrdersImg}
            className="img-fluid d-block mx-auto w-25"
            alt="hh"
          />
          <h3 className="py-3 heading" onClick={() => navigateToOrder("All")}>
            All Orders
          </h3>
        </div>
      </div>

      {/* <CurrReportsCard />
          <ViewOrdersCard /> */}
    </div>
  );
};

export default FilterOrders;
