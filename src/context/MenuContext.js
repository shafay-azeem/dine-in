import React, { createContext, useContext } from "react";
import { useState } from "react";
const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  function getTimestampInSeconds() {
    return Math.floor(Date.now() / 1000);
  }

  //ORIGNAL HOOKS
  const [response, setResponse] = useState([]);
  const [responseSignleMenu, setResponseSignleMenu] = useState();
  const [sectionList, setSectionList] = useState([]);
  //----------------------------------------------
  const [feedback, setFeedback] = useState([]);
  const [createfeedback, setCreateFeedback] = useState([]);
  const [activeForm, setActiveForm] = useState();
  const [notification, setNotification] = useState();

  const [modifier, setModifier] = useState([]);
  const [subSectionList, setSubSectionList] = useState([]);

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
        setResponseSignleMenu,
        sectionList,
        setSectionList,
        subSectionList,
        setSubSectionList,
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
