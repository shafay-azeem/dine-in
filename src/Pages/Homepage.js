import React from "react";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import CurrReportsCard from "../components/CurrReportsCard.js";

const Homepage = () => {
  return (
    <div style={{ width: "100%" }}>
      <SideDrawer />
      <CurrReportsCard />
    </div>
  );
};

export default Homepage;
