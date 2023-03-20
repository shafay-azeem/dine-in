import React, { useState } from "react";
import MenuPage from "../components/RestaurantMenu/MenuPage";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import apiFunctions from "../global/GlobalFunction";
import { API_URL, BASE_URL } from "../global/Constant";

const MenuStartScreen = () => {
  const [searchparams] = useSearchParams();
  let resUserName = searchparams.get("resUserName");

  const [loading, setLoading] = useState();
  const [tableNumber, setTableNumber] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    window.history.pushState(null, null, window.location.href);
    window.onpopstate = function () {
      window.history.go(1);
    };
  }, []);

  useEffect(() => {
    getRestaurantDetail();
    if (!searchparams.get("tableNumber")) {
      console.log("if run ");
      setTableNumber(generateRandomNumber());
    } else {
      console.log("else run ");
      setTableNumber(searchparams.get("tableNumber"));
    }
  }, []);

  async function getRestaurantDetail() {
    try {
      setLoading(true);
      let restaurantDetail = await apiFunctions.GET_REQUEST(
        BASE_URL + API_URL.GET_RESTURANT_DETAIL_BY_RESTAURANT_NAME + resUserName
      );
      let res = restaurantDetail.data.user;
      setUser(res._id);
      setLoading(false);
    } catch (err) {
      console.log("An error occurred while fetching menus", err.message);
    }
  }

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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      <MenuPage
        userId={user}
        tableNumber={tableNumber}
        TableNumber={searchparams.get("TableNumber")}
        menu={searchparams.get("menu")}
        resUserName={resUserName}
      />
    </div>
  );
};

export default MenuStartScreen;
