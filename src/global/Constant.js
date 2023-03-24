export const BASE_URL = "http://localhost:5000/api/";
//export const BASE_URL = "https://lifoapp.co.uk/api/";

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

  CREATE_LABEL: "modifier/V1/createLabel",

  GET_LABEL: "modifier/V1/getLabels",

  DELETE_LABEL_BY_LABELID: "modifier/V1/deleteLabel/",

  UPDATE_LABEL: "modifier/V1/updateLabel/",

  GET_SINGLE_LABEL: "modifier/V1/getSingleLabel/",

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

  GET_SINGLE_ORDER: "order/V1/getSingleOrder/",

  MAKE_PAYMENT: "payment/V1/makePayment/",

  GET_PAID_UNPAID_ORDERS: "order/V1/getPaidUnpaidOrders/",

  FILTER_ORDER_BY_DATE: "order/V1/filterOrder/",

  GET_ORDER_BY_RANGE: "order/V1/rangeOrder/",

  GET_ALL_PAYMENT_BY_USERID: "payment/V1/getAllPayment/",

  GET_SINGLE_DATE_PAYMENT: "payment/V1/getSingleDatePayment/",

  GET_MULTI__DATE_PAYMENT: "payment/V1/getMultiDatePayment/",

  TOTAL_REVENUE: "payment/V1/totalRevenue/",

  REVENUE_RANGE: "payment/V1/revenueRange/",

  GET_REVENUE_ON_DAILY_BASIS_PAYMENT: "payment/V1/getRevenueOnDailyBasis/",

  PENDING_AMOUNT_ALL: "order/V1/pendingAmount/",

  CHANGE_STATUS: "order/V1/updateStatusOfOrder/",

  //Modifier
  ADD_MODIFIER_ITEM: "cart/V1/addModifiertoCartItem/",

  MODIFIER_INCREMENT_DECREMENT: "cart/V1/modifierIncrementDecrement/",

  MODIFIER_DELETE: "cart/V1/deleteModifierById/",

  // GET USER
  GET_RESTURANT_DETAIL: "user/V1/getuserDetailById/",

  GET_CART_LENGTH: "cart/V1/getCartLength/",

  GET_RESTURANT_DETAIL_BY_RESTAURANT_NAME:
    "user/V1/getuserDetailByresUserName/",

  //Payment
  GET_PAYMENT_DETAIL_BY_ORDERID: "payment/V1/paymentDetailByOrderId/",

  //Table
  CREATE_TABLES: "table/V1/createTables",

  GET_TABLES_BY_USERID: "table/V1/getTablebyUserId",

  GET_TABLE_COUNT_BY_USERID: "table/V1/getTableCountbyUserId",

  DELETE_TABLE_BY_TABLE_ID: "table/V1/deleteTableDeleteByTableId/",
};
