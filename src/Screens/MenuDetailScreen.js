import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import MenuDetail from "../components/RestaurantMenu/MenuDetail";

const MenuDetailScreen = () => {
  const navigate = useNavigate();
  const [searchparams] = useSearchParams();

  //   console.log(searchparams.get("index"), "index");
  //   console.log(searchparams.get("menu_index"), "menu_index");
  //   console.log(searchparams.get("section_index"), "section_index");

  return (
    <div style={{ width: "100%", margin: "0 auto" }}>
      <MenuDetail
        menu_index_refSub={searchparams.get("menu_index_refSub")}
        section_index_refSub={searchparams.get("section_index_refSub")}
        menu_index={searchparams.get("menu_index")}
        section_index={searchparams.get("section_index")}
        item_index={searchparams.get("index")}
        subsectionitem_index={searchparams.get("subsecitemindex")}
        subsection_index={searchparams.get("subsectionIndex")}
      />
    </div>
  );
};

export default MenuDetailScreen;
