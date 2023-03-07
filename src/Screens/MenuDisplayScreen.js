import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import RestaurantMenu from "../components/RestaurantMenu/RestaurantMenu.js";

const MenuDisplayScreen = (props) => {
  const navigate = useNavigate();
  const [searchparams] = useSearchParams();

  console.log(searchparams.get("resName"), searchparams.get("resImage"));

  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      <RestaurantMenu
        menu_index={searchparams.get("index")}
        userId={searchparams.get("userId")}
        tableNumber={searchparams.get("tableNumber")}
        resName={searchparams.get("resName")}
        resImage={searchparams.get("resImage")}
        type={searchparams.get("type")}
      />
    </div>
  );
};

export default MenuDisplayScreen;
