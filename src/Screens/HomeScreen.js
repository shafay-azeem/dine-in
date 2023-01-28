import { Text } from "@chakra-ui/react";
import React from "react";
import CurrReportsCard from "../components/Home/CurrReportsCard";
import ViewOrdersCard from "../components/Home/ViewOrdersCard";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import MenuImg from "../components/Assets/menu.png";
import FeedBackImg from "../components/Assets/feedback.png";
import QrImg from "../components/Assets/qr-code.png";
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {
  const navigate = useNavigate();

  const menu = () => {
    navigate({
      pathname: "/menu",
    });
  };

  const feedbacks = () => {
    navigate({
      pathname: "/feedbacks",
    });
  };

  const dineinqrmenu = () => {
    navigate({
      pathname: "/dineinqrmenu",
    });
  };
  return (
    <div style={{ width: "100%", marginBottom: "5%" }}>
      <SideDrawer />

      <div className="d-flex text-center justify-content-center vh-100 align-items-center">
        <div className="img">
          <img
            src={MenuImg}
            className="img-fluid d-block mx-auto w-25"
            alt="gggg"
          />
          <h3 className="py-3 heading" onClick={menu}>
            Menu Management
          </h3>
        </div>
        <div className="img">
          <img
            src={FeedBackImg}
            className="img-fluid d-block mx-auto w-25"
            alt="fff"
          />
          <h3 className="py-3 heading" onClick={feedbacks}>
            FeedBack
          </h3>
        </div>
        <div className="img">
          <img
            src={QrImg}
            className="img-fluid d-block mx-auto w-25"
            alt="hh"
          />
          <h3 className="py-3 heading" onClick={dineinqrmenu}>
            Dine In QR Menu
          </h3>
        </div>
      </div>

      {/* <CurrReportsCard />
            <ViewOrdersCard /> */}
    </div>
  );
};
export default HomeScreen;