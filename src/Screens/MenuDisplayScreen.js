import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import RestaurantMenu from "../components/RestaurantMenu/RestaurantMenu.js";

const MenuDisplayScreen = (props) => {
  const navigate = useNavigate();
  const [searchparams] = useSearchParams();

  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      <RestaurantMenu
        menu_index={searchparams.get("index")}
        userId={searchparams.get("userId")}
        tableNumber={searchparams.get("tableNumber")}
      />
    </div>
  );
};

export default MenuDisplayScreen;
