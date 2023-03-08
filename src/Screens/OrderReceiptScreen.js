import React from "react";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import OrderReceipt from "../components/Orders/OrderReceipt";

const OrderReceiptScreen = () => {
  return (
    <div style={{ width: "100%", marginBottom: "10%" }}>
      <SideDrawer />
      <OrderReceipt />
    </div>
  );
};

export default OrderReceiptScreen;
