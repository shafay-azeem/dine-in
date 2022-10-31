import React from "react";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import MenuConfiguration from "../components/MenuConfiguration/MenuConfiguration";

const DineInQRMenuScreen = () => {
  return (
    <div style={{ width: "100%", marginBottom: "10%" }}>
      <SideDrawer />
      <MenuConfiguration />
    </div>
  );
};

export default DineInQRMenuScreen;
