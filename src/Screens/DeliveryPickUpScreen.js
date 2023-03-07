import React from "react";
import MenuConfigurationCopy from "../components/Delivery/PickUp/MenuConfigurationCopy";
import SideDrawer from "../components/miscellaneous/SideDrawer";

const DeliveryPickUpScreen = () => {
  return (
    <div style={{ width: "100%", marginBottom: "10%" }}>
      <SideDrawer />
      <MenuConfigurationCopy />
    </div>
  );
};

export default DeliveryPickUpScreen;
