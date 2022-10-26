import React from "react";
import Feedbacks from "../components/FeedBacks/Feedbacks";
import SideDrawer from "../components/miscellaneous/SideDrawer";

const FeedBacksScreen = () => {
  return (
    <div style={{ width: "100%", marginBottom: "10%" }}>
      <SideDrawer />
      <Feedbacks />
    </div>
  );
};

export default FeedBacksScreen;
