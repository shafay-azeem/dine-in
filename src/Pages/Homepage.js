import React from "react";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import CurrReportsCard from "../components/CurrReportsCard.js";
import ViewOrdersCard from "../components/ViewOrdersCard";
import WelcomeText from "../components/WelcomeText";

const Homepage = () => {
  return (
    <div style={{ width: "100%", marginBottom: "5%" }}>
      <SideDrawer />
      <CurrReportsCard />
      <ViewOrdersCard />
    </div>
  );
};

export default Homepage;
