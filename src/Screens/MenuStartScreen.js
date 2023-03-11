import React, { useState } from "react";
import MenuPage from "../components/RestaurantMenu/MenuPage";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const MenuStartScreen = () => {
  const [searchparams] = useSearchParams();

  const [tableNumber, setTableNumber] = useState();

  useEffect(() => {
    window.history.pushState(null, null, window.location.href);
    window.onpopstate = function () {
      window.history.go(1);
    };
  }, []);

  useEffect(() => {
    if (!searchparams.get("tableNumber")) {
      console.log("if run ");
      setTableNumber(generateRandomNumber());
    } else {
      console.log("else run ");
      setTableNumber(searchparams.get("tableNumber"));
    }
  }, []);

  function generateRandomNumber() {
    let randomNumber = "";
    const characters = "123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < 5; i++) {
      randomNumber += characters.charAt(
        Math.floor(Math.random() * charactersLength)
      );
    }

    return randomNumber;
  }

  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      <MenuPage
        userId={searchparams.get("USERID")}
        tableNumber={tableNumber}
        TableNumber={searchparams.get("TableNumber")}
        menu={searchparams.get("menu")}
      />
    </div>
  );
};

export default MenuStartScreen;
