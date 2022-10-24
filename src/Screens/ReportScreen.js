import React from "react";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import Reports from "../components/Reports/Reports";

const ReportScreen = () => {
  return (
    <div style={{ width: "100%", marginBottom: "5%" }}>
      <SideDrawer />
      <Reports />
    </div>
  );
};

export default ReportScreen;
