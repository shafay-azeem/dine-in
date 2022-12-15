import React, { createContext, useContext } from "react";
import { useState } from "react";
const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  function getTimestampInSeconds() {
    return Math.floor(Date.now() / 1000);
  }

  const [response, setResponse] = useState([
    {
      id: 1,
      menuName: "demomenu",
      menuDescription: "demodescription",
      menuNote: "demonote",
      menuStatus: false,
      section: [
        {
          sectionId: 1,
          sectionName: "demosection",
          sectionDescription: "sectiondescription",
          sectionNote: "20%",
          active: false,
          sectionStatus: false,
          item: [
            {
              itemId: 1,
              itemName: "demoitem",
              itemDescription: "itemdescription",
              active: false,
            },
          ],
        },
      ],
    },
  ]);

  const [feedback, setFeedback] = useState([]);
  const [createfeedback, setCreateFeedback] = useState([]);
  const [activeForm, setActiveForm] = useState();
  const [notification, setNotification] = useState();


  return (
    <MenuContext.Provider
      value={{
        response,
        setResponse,
        feedback,
        setFeedback,
        createfeedback,
        setCreateFeedback,
        activeForm,
        setActiveForm,
        notification,
        setNotification
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
export const MenuState = () => {
  return useContext(MenuContext);
};

export default MenuProvider;
