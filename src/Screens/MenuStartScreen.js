import React from "react";
import MenuPage from "../components/RestaurantMenu/MenuPage";
import { useSearchParams } from "react-router-dom";

const MenuStartScreen = () => {
  const [searchparams] = useSearchParams();

  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      <MenuPage userId={searchparams.get("USERID")} tableNumber={searchparams.get("tableNumber")} />
    </div>
  );
};

export default MenuStartScreen;
