import React from "react";
import MenuPage from "../components/RestaurantMenu/MenuPage";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const MenuStartScreen = () => {
  const [searchparams] = useSearchParams();

  useEffect(() => {
    window.history.pushState(null, null, window.location.href);
    window.onpopstate = function () {
      window.history.go(1);
    };
  }, []);

  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      <MenuPage
        userId={searchparams.get("USERID")}
        tableNumber={searchparams.get("tableNumber")}
        menu={searchparams.get("menu")}
      />
    </div>
  );
};

export default MenuStartScreen;
