import React from "react";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import TranslationCenter from "../components/TranslationCenter/TranslationCenter";

const TranslationCenterScreen = () => {
  return (
    <div style={{ width: "100%", marginBottom: "10%" }}>
      <SideDrawer />
      <TranslationCenter />
    </div>
  );
};

export default TranslationCenterScreen;
