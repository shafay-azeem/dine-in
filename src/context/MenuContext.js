import React, { createContext, useContext, } from "react";
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

      section: [
        {
          sectionId: 101,
          sectionName: "Pasta",
          sectionDescription: "i am section",
          label: ["New", "Signature"],
          active: false,
          subSection: false,
          itemActive: false,
          item: [
            {
              itemId: 201,
              itemName: "Pasta",
              itemDescription: "i am section",
              label: ["New", "Signature"],
              itemPrice: [
                { size: "large", price: 2.0, calories: 356 },
                { size: "medium", price: 4.0, calories: 315 },
                { size: "small", price: 6.0, calories: 215 },
              ],
              calories: 355,
              ingredient: ["milk", "cheese"],
              recommendedItems: ["tomoto", "potato"],
              preparationTime: 20,
            },
          ],
        },
      ],
    },
  ]);

  return <MenuContext.Provider value={{ data: menu }} >{children}</MenuContext.Provider>;
};
export const MenuState = () => {
  return useContext(MenuContext);
};

export default MenuProvider;
