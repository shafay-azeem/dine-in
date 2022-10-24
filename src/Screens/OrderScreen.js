import React from "react";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import Orders from "../components/Orders/Orders";

const OrderScreen = () => {
  return (
    <div style={{ width: "100%", marginBottom: "10%" }}>
      <SideDrawer />
      <Orders />
    </div>
  );
};

export default OrderScreen;
