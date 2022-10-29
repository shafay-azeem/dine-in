import React from "react";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import VenueSettings from "../components/VenueSettings/VenueSettings";

const VenueSettingsScreen = () => {
  return (
    <div style={{ width: "100%", marginBottom: "10%" }}>
      <SideDrawer />
      <VenueSettings />
    </div>
  );
};

export default VenueSettingsScreen;
