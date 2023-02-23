import React from "react";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import PaymentList from "../components/Payment/PaymentList";

const PaymentScreen = () => {
  return (
    <div style={{ width: "100%", marginBottom: "10%" }}>
      <SideDrawer />
      <PaymentList />
    </div>
  );
};

export default PaymentScreen;
