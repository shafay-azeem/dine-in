import React from "react";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import CreateMenu from "../components/MenuManagement/CreateMenu";

const CreateMenuScreen = () => {
  return (
    <div style={{ width: "100%", marginBottom: "10%" }}>
      <SideDrawer />
      <CreateMenu />
    </div>
  );
};

export default CreateMenuScreen;
