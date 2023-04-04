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

  const [feedbackFormList, setFeedbackFormList] = useState([]);
  const [modifier, setModifier] = useState([]);
  const [createForm, setCreateForm] = useState(false);
  const [getResults, setGetResults] = useState(false);
  const [CreateMenu, setCreateMenu] = useState(false);
  const [updateMenu, setUpdateMenu] = useState(false);
  const [UpdatedSection, setUpdatedSection] = useState(false);
  const [sectionCreated, setSectionCreated] = useState(false);

  const [updatedSubSection, setUpdatedSubSection] = useState(false);
  const [createSubSection, setCreateSubSection] = useState(false);

  const [itemUpdater, setItemUpdater] = useState(false);
  const [subSectionList, setSubSectionList] = useState([]);

  const [changer, setChanger] = useState();

  const [orders, setOrders] = useState([]);

  const [statusUpdate, setStatusUpdate] = useState();

  const [adder, setAdder] = useState();

  //const [tableChanger, setTableChanger] = useState();

  const [modifierChanger, setModifierChanger] = useState();

  const [labelChanger, setLabelChanger] = useState();

  const [tableChanger, setTableChanger] = useState();
  const [options1, setOptions1] = useState([]);

  const [subChanger, setSubChanger] = useState();

  const [newChanger, setNewChanger] = useState();

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
        feedbackFormList,
        setFeedbackFormList,
        setCreateForm,
        createForm,
        getResults,
        setGetResults,
        setCreateMenu,
        CreateMenu,

        updateMenu,
        setUpdateMenu,

        UpdatedSection,
        setUpdatedSection,

        sectionCreated,
        setSectionCreated,

        setUpdatedSubSection,
        updatedSubSection,

        setCreateSubSection,
        createSubSection,

        setItemUpdater,
        itemUpdater,

        setChanger,
        changer,

        setOrders,
        orders,

        adder,
        setAdder,
        statusUpdate,
        setStatusUpdate,

        modifierChanger,
        setModifierChanger,
        labelChanger,
        setLabelChanger,
        options1,
        setOptions1,
        tableChanger,
        setTableChanger,

        subChanger,
        setSubChanger,

        newChanger,
        setNewChanger,
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
