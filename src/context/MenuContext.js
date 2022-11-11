import React, { createContext, useContext } from "react";
import { useState } from "react";
const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState([
    {
      id: 0,
      menuId: "01",
      menuName: "menu one",
      menuDescription: "i am menu",
      discountNote: "10%",
      createdDate: "10/11/2022",
      createdTime: "12:00",
      endDate: "11/11/2022",
      endTime: "12:00",
      sectionActive: false,
    },
  ]);

  const [section, setSection] = useState([
    {
      sectionId: 101,
      sectionName: "Pasta",
      sectionDescription:
        "Pasta is a type of food made from a mixture of flour, eggs, and water that is formed into different shapes and then boiled",
      label: ["New", "Signature"],
      active: false,
      subSection: false,
      itemActive: false,
    },
  ]);

  const [item, setItem] = useState([
    {
      itemId: 201,
      itemName: "Fettuccine Alfredo",
      itemDescription:
        "Italian pasta dish of fresh fettuccine tossed with butter and Parmesan cheese",
      label: ["New", "Signature"],
      itemPrice: [{ size: "large", price: 2.0, calories: 356 }],
      calories: 355,
      ingredient: ["milk", "cheese"],
      recommendedItems: ["tomoto", "potato"],
      preparationTime: 20,
    },
  ]);
  return (
    <MenuContext.Provider
      value={{ menu, setMenu, section, setSection, item, setItem }}
    >
      {children}
    </MenuContext.Provider>
  );
};
export const MenuState = () => {
  return useContext(MenuContext);
};

export default MenuProvider;
