import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import RestaurantMenu from "../components/RestaurantMenu/RestaurantMenu.js";

const MenuDisplayScreen = (props) => {
  console.log(props.change, "gg");
  const navigate = useNavigate();
  const [searchparams] = useSearchParams();

  //console.log(searchparams.get("index"), "menu index");

  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      <RestaurantMenu
        menu_index={searchparams.get("index")}
        // menuName={searchparams.get("menuname")}
        // menuDescription={searchparams.get("menuDescription")}
      />
    </div>
  );
};

export default MenuDisplayScreen;
