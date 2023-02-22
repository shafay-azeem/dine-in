export const BASE_URL = "http://localhost:3000/api/";

export const API_URL = {
  GET_ALL_MENU: "menu/V1/getAllMenu/",

  CREATE_MENU: "menu/V1/createMenu/",

  DELETE_MENU_BY_ID: "menu/V1/deleteMenu/",

  UPDATE_MENU_BY_ID: "menu/V1/updateMenu/",

  GET_MENU_BY_ID: "menu/V1/getSingleMenu/",

  GET_ALL_SECTION_BY_MENU_ID: "menu/V1/getAllSectionByMenuId/",

  CREATE_SECTION: "menu/V1/createSection/",

  GET_SINGLE_SECTION_BY_ID: "menu/V1/getSingleSection/",

  UPDATE_SECTION_BY_ID: "menu/V1/updateSection/",

  DELETE_SECTION_BY_ID: "menu/V1/deleteSection/",

  //Sub Section

  CREATE_SUBSECTION: "menu/V1/createSubSection/",

  Get_All_SUBSECTION_BY_SECTIONID: "menu/V1/getAllSubSectionBySectionId/",

  Get_SUBSECTION_BY_ID: "menu/V1/getSingleSubSection/",

  DELETE_SUBSECTION_BY_ID: "menu/V1/deleteSubSection/",

  UPDATE_SUBSECTION_BY_ID: "menu/V1/updateSubSection/",

  Get_All_Item_By_SUBSECTIONID: "menu/V1/getAllItemBySubSectionId/",

  //Item
  Get_All_Item_By_SectionId: "menu/V1/getAllItemBySectionId/",

  CREATE_ITEM: "menu/V1/createItem/",

  UPDATE_ITEM_BY_ID: "menu/V1/updateItem/",

  DELETE_ITEM_BY_ID: "menu/V1/deleteItem/",

  GET_ITEM_BY_ID: "menu/V1/getSingleItem/",

  //User

  CREATE_USER: "user/V1/createUser",

  LOGIN: "user/V1/login/",

  UPDATE_PROFILE: "user/V1/updateProfile",

  //Modifier
  CREATE_MODIFIER: "modifier/V1/createModifier",

  GET_ALL_MODIFIER: "modifier/V1/getAllModifier",

  GET_MODIFIER_BY_ID: "modifier/V1/getSingleModifer/",

  DELETE_MODIFIER_BY_ID: "modifier/V1/deleteModifierById/",

  UPDATE_MODIFIER: "modifier/V1/updateModifier/",

  //FeedBack
  CREATE_FEEDBACK_FORM: "feedback/V1/createfeedback",

  GET_ALL_FEEDBACK_FORM: "feedback/V1/getallform",

  DELETE_FEEDBACK_FORM_BY_ID: "feedback/V1/deleteform/",

  UPDATE_FORM_BY_ID: "feedback/V1/updateform/",

  UPDTAE_FORM_STATUS: "feedback/V1/updateStatus/",

  //Questions
  CREATE_FORM_QUESTIONS: "feedback/V1/createfeedbackquestion/",

  GET_ALL_QUESTIONS_BY_FORMID: "feedback/V1/getallquestion/",

  UPDATE_QUESTION_BY_FORM_ID: "feedback/V1/updateFormQuestion/",

  //SUB-ITEM

  CREATE_SUB_ITEM: "menu/V1/createSubSectionItem/",

  GET_ALL_SUB_ITEM_BY_SUBSECTION_ID: "menu/V1/getAllItemBySubSectionId/",

  GET_SINGLE_SUB_ITEM_BY_ID: "menu/V1/getSingleSubItem/",

  UPDATE_SUB_ITEM_BY_ID: "menu/V1/updateSubItem/",

  DELETE_SUB_ITEM_BY_ID: "menu/V1/deleteSubItemById/",

  //RESULTS

  CREATE_RESULT_BY_FORM_ID: "feedback/V1/createquestions/",

  GET_ALL_RESULTS: "feedback/V1/getAllResults",

  //QR
  GET_ALL_MENU_QR: "qr/V1/getAllMenuQr/",

  GET_ALL_SECTION_BY_MENUID_QR: "qr/V1/getAllSectionByMenuIdQr/",

  GET_ALL_ITEMS_BY_SECTIONID_QR: "qr/V1/getAllItemBySectionIdQr/",

  GET_ITEMS_BY_ITEMID_QR: "qr/V1/getSingleItemQr/",

  GET_ALL_SUBSECTION_BY_SECTIONID_QR: "qr/V1/getAllSubSectionBySectionIdQr/",

  GET_ALL_ITEMS_BY_SUB_SECTIONID_QR: "qr/V1/getAllItemBySubSectionIdQr/",

  GET_SUB_ITEMS_BY_ITEMID_QR: "qr/V1/getSingleSubItemQr/",

  GET_ALL_FORM_QR: "qr/V1/getAllFormQr/",

  //Order
  ADD_TO_CART: "cart/V1/addToCart/",

  GET_CART_BY_TABLE_NUMBER: "cart/V1/getCartByTableNumber/",

  CART_INCREMENT_DECREMENT: "cart/V1/cartIncrementDecrement/",

  DELETE_CARTITEM_BY_CART_ITEM_ID: "cart/V1/deleteCartItem/",

  CREATE_ORDER: "order/V1/createOrder/",

  MAKE_PAYMENT: "payment/V1/makePayment/",
};
