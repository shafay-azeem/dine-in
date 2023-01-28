import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import MenuFeedBackForm from "../components/RestaurantMenu/MenuFeedBackForm";

const MenuFeedbackScreen = () => {
  const navigate = useNavigate();
  const [searchparams] = useSearchParams()

  return (
    <div className="w-sm-50  mx-auto">
      <MenuFeedBackForm userId={searchparams.get("userId")} />
    </div>
  );
};

export default MenuFeedbackScreen;
