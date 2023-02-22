import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import Orders from "../components/Orders/Orders";

const OrderScreen = () => {
  const navigate = useNavigate();
  const [searchparams] = useSearchParams();

  return (
    <div style={{ width: "100%", marginBottom: "10%" }}>
      <SideDrawer />
      <Orders paymentStatus={searchparams.get("paymentStatus")} />
    </div>
  );
};

export default OrderScreen;
