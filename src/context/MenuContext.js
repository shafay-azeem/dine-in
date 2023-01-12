import React, { createContext, useContext } from "react";
import { useState } from "react";
const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  function getTimestampInSeconds() {
    return Math.floor(Date.now() / 1000);
  }

  const [response, setResponse] = useState([]);
  const [responseSignleMenu, setResponseSignleMenu] = useState();

  const [feedback, setFeedback] = useState([]);
  const [createfeedback, setCreateFeedback] = useState([]);
  const [activeForm, setActiveForm] = useState();
  const [notification, setNotification] = useState();

  const [modifier, setModifier] = useState([]);

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
        setNotification,
        modifier,
        setModifier,
        responseSignleMenu,
        setResponseSignleMenu
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
