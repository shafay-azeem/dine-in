import React from "react";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import TableCreation from "../components/TableManagement/TableCreation";

const TableManagementScreen = () => {
  return (
    <div style={{ width: "100%", marginBottom: "10%" }}>
      <SideDrawer />
      <TableCreation />
    </div>
  );
};

export default TableManagementScreen;
