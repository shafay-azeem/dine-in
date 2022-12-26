import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  FormControl,
  FormLabel,
  Textarea,
  Switch,
  Checkbox,
  Select,
  HStack,
  InputGroup,
  InputLeftAddon,
  Grid,
  GridItem,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  SimpleGrid,
  Text,
  Box,
  InputLeftElement,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Center,
  useDisclosure,
} from "@chakra-ui/react";
import { faXRay } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { BsFillTrashFill, BsPlusLg } from "react-icons/bs";
import { MenuState } from "../../context/MenuContext";
import CustomButton from "../../CustomElements/CustomButton";
import Multiselect from "multiselect-react-dropdown";
import { SwitchComponent } from "@syncfusion/ej2-react-buttons";
import { AddIcon, CloseIcon } from "@chakra-ui/icons";

const ItemDrawer = (props) => {
  // console.log(props.menu_index, "menu----------");
  // console.log(props?.section_index, "section---------");
  // console.log(props?.item_index, "item----------");
  // console.log(props?.ItemInMenu, "------------itemInMenu---------");

  const {
    isOpen: ModalOpen,
    onOpen: ModalOnOpen,
    onClose: ModalOnClose,
  } = useDisclosure();
  const { response, setResponse, modifier, setModifier } = MenuState();
  let subSectionArr =
    response[props.menu_index].section[props?.section_index]?.subSection[
      props?.subsection_index
    ]?.item[props?.item_index];

  let sectionArr =
    response[props.menu_index].section[props?.section_index]?.item[
    props?.item_index
    ];

  const itemCondtionState = Number.isInteger(props?.subsection_index)
    ? subSectionArr?.itemName
    : sectionArr?.itemName;
  const initialState = props.subsection_push ? "" : itemCondtionState;

  const itemCondtionState5 = Number.isInteger(props?.subsection_index)
    ? subSectionArr?.itemPrice
    : sectionArr?.itemPrice;
  const initialState5 = props.subsection_push ? "" : itemCondtionState5;
  const [itemprice, setItemPrice] = useState(initialState5);

  const itemCondtionState4 = Number.isInteger(props?.subsection_index)
    ? subSectionArr?.itemCalorie
    : sectionArr?.itemCalorie;
  const initialState4 = props.subsection_push ? "" : itemCondtionState4;
  const [calorie, setCalorie] = useState(initialState4);

  const XX = Number.isInteger(props?.subsection_index)
    ? subSectionArr?.itemPriceOption
    : sectionArr?.itemPriceOption;

  let A;

  if (typeof XX === "undefined") {
    if (itemprice != null || calorie != null) {
      A = [{ name: "", price: itemprice, calories: calorie }];
    } else {
      console.log("iff else");
      A = [{ name: "", price: "", calories: "" }];
    }
  } else {
    A = XX;
  }
  console.log(typeof A[0].price, "A+++++");
  // console.log(typeof (itemprice), "itemprice type")

  const [inputList, setInputList] = useState(A);

  // useEffect(() => {
  //   setInputList(A);
  // }, [A]);

  console.log(inputList, "inputList+++++");
  // const yy = Number.isInteger(props?.subsection_index)
  //   ? subSectionArr?.itemModifierOptions
  //   : sectionArr?.itemModifierOptions;

  // let B;
  // if (typeof yy === "undefined") {
  //   B = [{ min: "", max: "" }];
  // } else {
  //   B = yy;
  // }
  // const [demoModifier, setDemoModifier] = useState(B);

  const [price, setPrice] = useState([]);
  const [rrr, setRrr] = useState([]);

  const [video, setVideo] = useState();
  let itemModifier = [];

  const [name, setName] = useState(initialState);

  const itemCondtionState2 = Number.isInteger(props?.subsection_index)
    ? subSectionArr?.itemDescription
    : sectionArr?.itemDescription;
  const initialState2 = props.subsection_push ? "" : itemCondtionState2;

  const [description, setDescription] = useState(initialState2);

  const itemCondtionState7 = Number.isInteger(props?.subsection_index)
    ? subSectionArr?.itemLabel
    : sectionArr?.itemLabel;
  const initialState7 = props.subsection_push ? "" : itemCondtionState7;
  const [select, setSelect] = useState(initialState7);

  const [recommendedItem, setRecommendedItem] = useState();
  const [priceConcat, setPriceConcat] = useState();
  const [caloriesConcat, setCaloriesConcat] = useState();
  const [size, setSize] = useState();
  const [push, setPush] = useState(false);
  const [food, setFood] = useState([
    "New",
    "Signature",
    "Special Presentation",
  ]);

  const [warning, setWarning] = useState(["Alcohol", "AlcoholFree"]);

  const itemCondtionState3 = Number.isInteger(props?.subsection_index)
    ? subSectionArr?.itemPrepTime
    : sectionArr?.itemPrepTime;
  const initialState3 = props.subsection_push ? "" : itemCondtionState3;
  const [time, setTime] = useState(initialState3);

  const itemCondtionState6 = Number.isInteger(props?.subsection_index)
    ? subSectionArr?.itemWarning
    : sectionArr?.itemWarning;
  const initialState6 = props.subsection_push ? "" : itemCondtionState6;
  console.log(initialState6, "initialState6");
  const [warningState, setWarningState] = useState(initialState6);

  const itemCondtionState8 = Number.isInteger(props?.subsection_index)
    ? subSectionArr?.itemServingSize
    : sectionArr?.itemServingSize;
  const initialState8 = props.subsection_push ? "" : itemCondtionState8;
  const [servingsize, setServingSize] = useState(initialState8);

  const itemCondtionState9 = Number.isInteger(props?.subsection_index)
    ? subSectionArr?.itemNutritionCalories
    : sectionArr?.itemNutritionCalories;
  const initialState9 = props.subsection_push ? "" : itemCondtionState9;
  const [nutcalories, setNutCalories] = useState(initialState9);

  const itemCondtionState10 = Number.isInteger(props?.subsection_index)
    ? subSectionArr?.itemCaloriesFat
    : sectionArr?.itemCaloriesFat;
  const initialState10 = props.subsection_push ? "" : itemCondtionState10;
  const [caloriesfat, setCaloriesFat] = useState(initialState10);

  const itemCondtionState11 = Number.isInteger(props?.subsection_index)
    ? subSectionArr?.itemTotalFat
    : sectionArr?.itemTotalFat;
  const initialState11 = props.subsection_push ? "" : itemCondtionState11;
  const [totalfat, setTotalFat] = useState(initialState11);

  const itemCondtionState12 = Number.isInteger(props?.subsection_index)
    ? subSectionArr?.itemTotalFatPercentage
    : sectionArr?.itemTotalFatPercentage;
  const initialState12 = props.subsection_push ? "" : itemCondtionState12;
  const [totalfatpercentage, setTotalFatPercentage] = useState(initialState12);

  const itemCondtionState13 = Number.isInteger(props?.subsection_index)
    ? subSectionArr?.itemSaturatedFat
    : sectionArr?.itemSaturatedFat;
  const initialState13 = props.subsection_push ? "" : itemCondtionState13;
  const [saturatedFat, setSaturatedFat] = useState(initialState13);

  const itemCondtionState14 = Number.isInteger(props?.subsection_index)
    ? subSectionArr?.itemSaturatedFatPercentage
    : sectionArr?.itemSaturatedFatPercentage;
  const initialState14 = props.subsection_push ? "" : itemCondtionState14;
  const [saturatedfatpercentage, setSaturatedFatPercentage] =
    useState(initialState14);

  const itemCondtionState15 = Number.isInteger(props?.subsection_index)
    ? subSectionArr?.itemTransFat
    : sectionArr?.itemTransFat;
  const initialState15 = props.subsection_push ? "" : itemCondtionState15;
  const [transfat, setTransFat] = useState(initialState15);

  const itemCondtionState16 = Number.isInteger(props?.subsection_index)
    ? subSectionArr?.itemTransFatPercentage
    : sectionArr?.itemTransFatPercentage;
  const initialState16 = props.subsection_push ? "" : itemCondtionState16;
  const [transfatpercentage, setTransFatPercentage] = useState(initialState16);

  const itemCondtionState17 = Number.isInteger(props?.subsection_index)
    ? subSectionArr?.itemCholesterol
    : sectionArr?.itemCholesterol;
  const initialState17 = props.subsection_push ? "" : itemCondtionState17;
  const [cholesterol, setCholesterol] = useState(initialState17);

  const itemCondtionState18 = Number.isInteger(props?.subsection_index)
    ? subSectionArr?.itemCholesterolPercentage
    : sectionArr?.itemCholesterolPercentage;
  const initialState18 = props.subsection_push ? "" : itemCondtionState18;
  const [cholesterolpercentage, setCholesterolPercentage] =
    useState(initialState18);

  const itemCondtionState19 = Number.isInteger(props?.subsection_index)
    ? subSectionArr?.itemSodiumPercentage
    : sectionArr?.itemSodiumPercentage;
  const initialState19 = props.subsection_push ? "" : itemCondtionState19;
  const [sodiumPercentage, setSodiumPercentage] = useState(initialState19);

  const itemCondtionState20 = Number.isInteger(props?.subsection_index)
    ? subSectionArr?.itemSodium
    : sectionArr?.itemSodium;
  const initialState20 = props.subsection_push ? "" : itemCondtionState20;
  const [sodium, setSodium] = useState(initialState20);

  const itemCondtionState21 = Number.isInteger(props?.subsection_index)
    ? subSectionArr?.itemTotalCarbs
    : sectionArr?.itemTotalCarbs;
  const initialState21 = props.subsection_push ? "" : itemCondtionState21;
  const [totalCarbs, setTotalCarbs] = useState(initialState21);

  const itemCondtionState22 = Number.isInteger(props?.subsection_index)
    ? subSectionArr?.itemTotalCarbsPercentage
    : sectionArr?.itemTotalCarbsPercentage;
  const initialState22 = props.subsection_push ? "" : itemCondtionState22;
  const [totalCarbsPercentage, setTotalCarbsPercentage] =
    useState(initialState22);

  const itemCondtionState23 = Number.isInteger(props?.subsection_index)
    ? subSectionArr?.itemDietaryFiber
    : sectionArr?.itemDietaryFiber;
  const initialState23 = props.subsection_push ? "" : itemCondtionState23;
  const [dietaryFiber, setDietaryFiber] = useState(initialState23);

  const itemCondtionState24 = Number.isInteger(props?.subsection_index)
    ? subSectionArr?.itemDietaryFiberPercentage
    : sectionArr?.itemDietaryFiberPercentage;
  const initialState24 = props.subsection_push ? "" : itemCondtionState24;
  const [dietaryFiberPercentage, setDietaryFiberPercentage] =
    useState(initialState24);

  const itemCondtionState25 = Number.isInteger(props?.subsection_index)
    ? subSectionArr?.itemSugar
    : sectionArr?.itemSugar;
  const initialState25 = props.subsection_push ? "" : itemCondtionState25;
  const [sugar, setSugar] = useState(initialState25);

  const itemCondtionState26 = Number.isInteger(props?.subsection_index)
    ? subSectionArr?.itemSugarPercentage
    : sectionArr?.itemSugarPercentage;
  const initialState26 = props.subsection_push ? "" : itemCondtionState26;
  const [sugarPercentage, setSugarPercentage] = useState(initialState26);

  const itemCondtionState27 = Number.isInteger(props?.subsection_index)
    ? subSectionArr?.itemProtein
    : sectionArr?.itemProtein;
  const initialState27 = props.subsection_push ? "" : itemCondtionState27;
  const [protein, setProtein] = useState(initialState27);

  const itemCondtionState28 = Number.isInteger(props?.subsection_index)
    ? subSectionArr?.itemProteinPercentage
    : sectionArr?.itemProteinPercentage;
  const initialState28 = props.subsection_push ? "" : itemCondtionState28;
  const [proteinPercentage, setProteinPercentage] = useState(initialState28);

  const itemCondtionState29 = Number.isInteger(props?.subsection_index)
    ? subSectionArr?.itemVitaminA
    : sectionArr?.itemVitaminA;
  const initialState29 = props.subsection_push ? "" : itemCondtionState29;
  const [vitaminA, setVitaminA] = useState(initialState29);

  const itemCondtionState30 = Number.isInteger(props?.subsection_index)
    ? subSectionArr?.itemVitaminC
    : sectionArr?.itemVitaminC;
  const initialState30 = props.subsection_push ? "" : itemCondtionState30;
  const [vitaminC, setVitaminC] = useState(initialState30);

  const itemCondtionState31 = Number.isInteger(props?.subsection_index)
    ? subSectionArr?.itemCalcium
    : sectionArr?.itemCalcium;
  const initialState31 = props.subsection_push ? "" : itemCondtionState31;
  const [calcium, setCalcium] = useState(initialState31);

  const itemCondtionState32 = Number.isInteger(props?.subsection_index)
    ? subSectionArr?.itemIron
    : sectionArr?.itemIron;
  const initialState32 = props.subsection_push ? "" : itemCondtionState32;
  const [iron, setIron] = useState(initialState32);

  const itemCondtionState33 = Number.isInteger(props?.subsection_index)
    ? subSectionArr?.image
    : sectionArr?.image;
  const initialState33 = props.subsection_push ? "" : itemCondtionState33;

  const [image, setImage] = useState(initialState33);

  const conditonMade = Number.isInteger(props?.subsection_index)
    ? "subSection"
    : "section";

  let TOGGLE;
  if (conditonMade == "subSection") {
    if (typeof subSectionArr?.active === "undefined") {
      TOGGLE = false;
    } else if (subSectionArr?.active === false) {
      TOGGLE = false;
    } else {
      TOGGLE = true;
    }
  } else {
    if (typeof sectionArr?.active === "undefined") {
      TOGGLE = false;
    } else if (sectionArr?.active === false) {
      TOGGLE = false;
    } else {
      TOGGLE = true;
    }
  }

  const [checked, setChecked] = useState(TOGGLE);

  let soldTag;
  if (conditonMade == "subSection") {
    if (typeof subSectionArr?.itemTag === "undefined") {
      soldTag = false;
    } else if (subSectionArr?.itemTag === false) {
      soldTag = false;
    } else {
      soldTag = true;
    }
  } else {
    if (typeof sectionArr?.itemTag === "undefined") {
      soldTag = false;
    } else if (sectionArr?.itemTag === false) {
      soldTag = false;
    } else {
      soldTag = true;
    }
  }

  const modifierUpdate = Number.isInteger(props?.subsection_index)
    ? subSectionArr?.itemModifier
    : sectionArr?.itemModifier;

  let modifierOption;
  if (typeof modifierUpdate === "undefined") {
    modifierOption = [{ min: "", max: "" }];
  } else {
    modifierOption = modifierUpdate;
  }

  const [sold, setSold] = useState(soldTag);

  const [state, setState] = useState(modifierOption);
  const [demoModifier, setDemoModifier] = useState(modifierOption);

  const ModifierOptions = (e, index) => {
    const { name, value } = e.target;
    const x = [...demoModifier];
    x[index][name] = value;

    setDemoModifier(x);
    for (let y = 0; y < modifier.length; y++) {
      for (let i = 0; i < demoModifier.length; i++) {
        if (modifier[y].Groupname == demoModifier[i].groupname) {
          let Arr = [];
          for (let z = 0; z < modifier[y].modifiers.length; z++) {
            let jsonObj = {};

            jsonObj["Name"] = modifier[y].modifiers[z].Name;
            jsonObj["Price"] = modifier[y].modifiers[z].Price;
            jsonObj["Calorie"] = modifier[y].modifiers[z].Calorie;
            Arr.push(jsonObj);
          }
          let responseBody = {
            groupname: demoModifier[i].groupname,
            min: demoModifier[i].min,
            max: demoModifier[i].max,
            reference: Arr,
          };

          itemModifier.push(responseBody);
          setState(itemModifier);
        }
      }
    }
  };

  function getTimestampInSeconds() {
    return Math.floor(Date.now() / 1000);
  }
  let itemData = {
    itemId: getTimestampInSeconds(),
    itemName: name,
    itemDescription: description,
    active: checked,
    image: image,
    itemCalorie: calorie,
    itemTag: sold,
    itemLabel: select,
    itemWarning: warningState,
    itemPrepTime: time,
    itemPrice: itemprice,
    itemCalories: nutcalories,
    itemPriceOption: inputList,
    itemSaturatedFatPercentage: saturatedfatpercentage,
    itemTransFat: transfat,
    itemTransFatPercentage: transfatpercentage,
    itemCholesterol: cholesterol,
    itemCholesterolPercentage: cholesterolpercentage,
    itemSodium: sodium,
    itemSodiumPercentage: sodiumPercentage,
    itemTotalCarbs: totalCarbs,
    itemTotalCarbsPercentage: totalCarbsPercentage,
    itemDietaryFiber: dietaryFiber,
    itemDietaryFiberPercentage: dietaryFiberPercentage,
    itemSugar: sugar,
    itemSugarPercentage: sugarPercentage,
    itemProtein: protein,
    itemProteinPercentage: proteinPercentage,
    itemVitaminA: vitaminA,
    itemVitaminC: vitaminC,
    itemIron: iron,
    itemCalcium: calcium,
    itemTotalFat: totalfat,
    itemTotalFatPercentage: totalfatpercentage,
    itemSaturatedFat: saturatedFat,
    itemNutritionCalories: nutcalories,
    itemCaloriesFat: caloriesfat,
    itemServingSize: servingsize,
    itemModifier: state,
  };

  const updateItem = (x) => {
    if (x != undefined) {
      response[props.menu_index].section[props.section_index].subSection[
        props.subsection_index
      ].item[props.item_index].itemName = name;

      response[props.menu_index].section[props.section_index].subSection[
        props.subsection_index
      ].item[props.item_index].itemDescription = description;

      response[props.menu_index].section[props.section_index].subSection[
        props.subsection_index
      ].item[props.item_index].itemPrice = itemprice;

      response[props.menu_index].section[props.section_index].subSection[
        props.subsection_index
      ].item[props.item_index].itemCalorie = calorie;

      response[props.menu_index].section[props.section_index].subSection[
        props.subsection_index
      ].item[props.item_index].itemLabel = select;

      response[props.menu_index].section[props.section_index].subSection[
        props.subsection_index
      ].item[props.item_index].itemWarning = warningState;

      response[props.menu_index].section[props.section_index].subSection[
        props.subsection_index
      ].item[props.item_index].active = checked;

      response[props.menu_index].section[props.section_index].subSection[
        props.subsection_index
      ].item[props.item_index].itemPrepTime = time;

      response[props.menu_index].section[props.section_index].subSection[
        props.subsection_index
      ].item[props.item_index].itemServingSize = servingsize;

      response[props.menu_index].section[props.section_index].subSection[
        props.subsection_index
      ].item[props.item_index].itemNutritionCalories = nutcalories;

      response[props.menu_index].section[props.section_index].subSection[
        props.subsection_index
      ].item[props.item_index].itemCaloriesFat = caloriesfat;

      response[props.menu_index].section[props.section_index].subSection[
        props.subsection_index
      ].item[props.item_index].itemTotalFat = totalfat;

      response[props.menu_index].section[props.section_index].subSection[
        props.subsection_index
      ].item[props.item_index].itemTotalFatPercentage = totalfatpercentage;

      response[props.menu_index].section[props.section_index].subSection[
        props.subsection_index
      ].item[props.item_index].itemSaturatedFat = saturatedFat;

      response[props.menu_index].section[props.section_index].subSection[
        props.subsection_index
      ].item[props.item_index].itemSaturatedFatPercentage =
        saturatedfatpercentage;

      response[props.menu_index].section[props.section_index].subSection[
        props.subsection_index
      ].item[props.item_index].itemTransFat = transfat;

      response[props.menu_index].section[props.section_index].subSection[
        props.subsection_index
      ].item[props.item_index].itemTransFatPercentage = transfatpercentage;

      response[props.menu_index].section[props.section_index].subSection[
        props.subsection_index
      ].item[props.item_index].itemCholesterol = cholesterol;

      response[props.menu_index].section[props.section_index].subSection[
        props.subsection_index
      ].item[props.item_index].itemCholesterolPercentage =
        cholesterolpercentage;

      response[props.menu_index].section[props.section_index].subSection[
        props.subsection_index
      ].item[props.item_index].itemSodium = sodium;

      response[props.menu_index].section[props.section_index].subSection[
        props.subsection_index
      ].item[props.item_index].itemSodiumPercentage = sodiumPercentage;

      response[props.menu_index].section[props.section_index].subSection[
        props.subsection_index
      ].item[props.item_index].itemTotalCarbs = totalCarbs;

      response[props.menu_index].section[props.section_index].subSection[
        props.subsection_index
      ].item[props.item_index].itemTotalCarbsPercentage = totalCarbsPercentage;

      response[props.menu_index].section[props.section_index].subSection[
        props.subsection_index
      ].item[props.item_index].itemDietaryFiber = dietaryFiber;

      response[props.menu_index].section[props.section_index].subSection[
        props.subsection_index
      ].item[props.item_index].itemDietaryFiberPercentage =
        dietaryFiberPercentage;

      response[props.menu_index].section[props.section_index].subSection[
        props.subsection_index
      ].item[props.item_index].itemSugar = sugar;

      response[props.menu_index].section[props.section_index].subSection[
        props.subsection_index
      ].item[props.item_index].itemSugarPercentage = sugarPercentage;

      response[props.menu_index].section[props.section_index].subSection[
        props.subsection_index
      ].item[props.item_index].itemProtein = protein;

      response[props.menu_index].section[props.section_index].subSection[
        props.subsection_index
      ].item[props.item_index].itemProteinPercentage = proteinPercentage;

      response[props.menu_index].section[props.section_index].subSection[
        props.subsection_index
      ].item[props.item_index].itemVitaminA = vitaminA;

      response[props.menu_index].section[props.section_index].subSection[
        props.subsection_index
      ].item[props.item_index].itemVitaminC = vitaminC;

      response[props.menu_index].section[props.section_index].subSection[
        props.subsection_index
      ].item[props.item_index].itemCalcium = calcium;

      response[props.menu_index].section[props.section_index].subSection[
        props.subsection_index
      ].item[props.item_index].itemIron = iron;

      response[props.menu_index].section[props.section_index].subSection[
        props.subsection_index
      ].item[props.item_index].itemTag = sold;

      response[props.menu_index].section[props.section_index].subSection[
        props.subsection_index
      ].item[props.item_index].itemPriceOption = inputList;

      // response[props.menu_index].section[props.section_index].subSection[
      //   props.subsection_index
      // ].item[props.item_index].itemModifierOptions = demoModifier;

      response[props.menu_index].section[props.section_index].subSection[
        props.subsection_index
      ].item[props.item_index].itemModifier = state;

      response[props.menu_index].section[props.section_index].subSection[
        props.subsection_index
      ].item[props.item_index].image = image;

      if (itemprice != null || calorie != null) {
        let initialArray = inputList;
        if (
          inputList[0].price != itemprice ||
          inputList[0].calories != calorie
        ) {
          inputList[0].price = itemprice;
          inputList[0].calories = calorie;
          setInputList(initialArray);
        }
      }

      setResponse([...response]);
      alert("Item With-In SubSection Updated Successfully");
    } else {
      if (itemprice != null || calorie != null) {
        let initialArray = inputList;
        if (
          inputList[0].price != itemprice ||
          inputList[0].calories != calorie
        ) {
          inputList[0].price = itemprice;
          inputList[0].calories = calorie;
          setInputList(initialArray);
        }
      }

      response[props.menu_index].section[props.section_index].item[
        props.item_index
      ].itemPrice = itemprice;


      response[props.menu_index].section[props.section_index].item[
        props.item_index
      ].itemModifier = state;

      response[props.menu_index].section[props.section_index].item[
        props.item_index
      ].itemLabel = select;

      response[props.menu_index].section[props.section_index].item[
        props.item_index
      ].itemWarning = warningState;

      response[props.menu_index].section[props.section_index].item[
        props.item_index
      ].itemName = name;

      response[props.menu_index].section[props.section_index].item[
        props.item_index
      ].itemDescription = description;

      response[props.menu_index].section[props.section_index].item[
        props.item_index
      ].itemPrepTime = time;

      response[props.menu_index].section[props.section_index].item[
        props.item_index
      ].active = checked;

      response[props.menu_index].section[props.section_index].item[
        props.item_index
      ].itemNutritionCalories = nutcalories;

      response[props.menu_index].section[props.section_index].item[
        props.item_index
      ].itemCaloriesFat = caloriesfat;

      response[props.menu_index].section[props.section_index].item[
        props.item_index
      ].itemTotalFat = totalfat;

      response[props.menu_index].section[props.section_index].item[
        props.item_index
      ].itemTotalFatPercentage = totalfatpercentage;

      response[props.menu_index].section[props.section_index].item[
        props.item_index
      ].itemSaturatedFat = saturatedFat;

      response[props.menu_index].section[props.section_index].item[
        props.item_index
      ].itemTag = sold;

      response[props.menu_index].section[props.section_index].item[
        props.item_index
      ].itemTransFat = transfat;

      response[props.menu_index].section[props.section_index].item[
        props.item_index
      ].itemTransFatPercentage = transfatpercentage;

      response[props.menu_index].section[props.section_index].item[
        props.item_index
      ].itemCholesterol = cholesterol;

      response[props.menu_index].section[props.section_index].item[
        props.item_index
      ].itemCholesterolPercentage = cholesterolpercentage;

      response[props.menu_index].section[props.section_index].item[
        props.item_index
      ].itemSodium = sodium;

      response[props.menu_index].section[props.section_index].item[
        props.item_index
      ].itemSodiumPercentage = sodiumPercentage;

      response[props.menu_index].section[props.section_index].item[
        props.item_index
      ].itemTotalCarbs = totalCarbs;

      response[props.menu_index].section[props.section_index].item[
        props.item_index
      ].itemTotalCarbsPercentage = totalCarbsPercentage;

      response[props.menu_index].section[props.section_index].item[
        props.item_index
      ].itemDietaryFiber = dietaryFiber;

      response[props.menu_index].section[props.section_index].item[
        props.item_index
      ].itemDietaryFiberPercentage = dietaryFiberPercentage;

      response[props.menu_index].section[props.section_index].item[
        props.item_index
      ].itemSugar = sugar;

      response[props.menu_index].section[props.section_index].item[
        props.item_index
      ].itemSugarPercentage = sugarPercentage;

      response[props.menu_index].section[props.section_index].item[
        props.item_index
      ].itemProtein = protein;

      response[props.menu_index].section[props.section_index].item[
        props.item_index
      ].itemProteinPercentage = proteinPercentage;

      response[props.menu_index].section[props.section_index].item[
        props.item_index
      ].itemVitaminA = vitaminA;

      response[props.menu_index].section[props.section_index].item[
        props.item_index
      ].itemVitaminC = vitaminC;

      response[props.menu_index].section[props.section_index].item[
        props.item_index
      ].itemCalcium = calcium;

      response[props.menu_index].section[props.section_index].item[
        props.item_index
      ].itemIron = iron;

      response[props.menu_index].section[props.section_index].item[
        props.item_index
      ].itemServingSize = servingsize;

      response[props.menu_index].section[props.section_index].item[
        props.item_index
      ].itemSaturatedFatPercentage = saturatedfatpercentage;

      response[props.menu_index].section[props.section_index].item[
        props.item_index
      ].itemPriceOption = inputList;

      response[props.menu_index].section[props.section_index].item[
        props.item_index
      ].itemModifierOptions = demoModifier;

      response[props.menu_index].section[props.section_index].item[
        props.item_index
      ].image = image;

      response[props.menu_index].section[props.section_index].item[
        props.item_index
      ].itemCalorie = calorie;

      setResponse([...response]);

      console.log(response, "xxxxxx");
      alert("Item Updated Successfully");
    }
  };

  const selectionMultiSelect = (event) => {
    setSelect(event);
  };

  const removalMultiSelect = (event) => {
    setSelect(event);
  };

  const selectionMultiSelectwarning = (event) => {
    setWarningState(event);
  };

  const removalMultiSelectwarning = (event) => {
    setWarningState(event);
  };

  const testfunc = (x) => {
    if (x === true) {
      response[props.menu_index].section[props.section_index].subSection[
        props.subsection_index
      ].item.push(itemData);
      alert("Single Push On basis Of Conditional Parameters");
      // console.log(response, "orig");
    } else {
      response[props.menu_index].section[props.section_index].item.push(
        itemData
      );
      console.log(response, "orig");
      alert("Item Created Successfully");
    }
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;

    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  const handleAddInput = () => {
    setInputList([...inputList, { name: "", price: "", calories: "" }]);
    // const list = [...inputList]
    // list.push({ firstName: "", lastName: "" })
    // setInputList(list)
  };

  const handleRemoveInput = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleModifierInput = () => {
    setDemoModifier([...demoModifier, { min: "", max: "" }]);
    // const list = [...inputList]
    // list.push({ firstName: "", lastName: "" })
    // setInputList(list)
  };

  const handleRemoveModifier = (index) => {
    const x = [...demoModifier];
    x.splice(index, 1);
    setDemoModifier(x);
  };

  const pictureCapture = (event) => {
    let value = URL.createObjectURL(event.target.files[0]);
    setImage(value);
  };
  function deleteimg() {
    setImage(null);
    document.getElementById("img").value = "";
  }

  const videoCapture = (event) => {
    setVideo(event);
  };

  const myfuncresponse = () => {
    // console.log(a, b, c, "==================")
    var info = {
      Cal: caloriesConcat,
      money: priceConcat,
      siz: size,
    };
    rrr.push(info);

    console.log(rrr, "+_+_+_+_");
  };

  // const potatoes = (x) => {
  //   console.log(x, "x=====================")
  //   setCaloriesConcat(x)
  //   return x

  // }

  // console.log(() => potatoes(), "potatoes")

  const addPriceOption = (event) => {
    // if (caloriesConcat !== undefined || priceConcat !== undefined || size !== undefined) {
    //   myfuncresponse(caloriesConcat, priceConcat, size)
    // }
    setPrice(
      price.concat(
        <HStack m={5}>
          <FormControl>
            <FormLabel fontWeight="400">Size</FormLabel>
            <Input
              borderRadius="8px"
              placeholder="Size"
              type="text"
              onChange={(e) => {
                setSize(e.target.value);
              }}
            />
          </FormControl>
          ,
          <FormControl mt={3}>
            <FormLabel fontWeight="400">Price</FormLabel>
            <InputGroup>
              <InputLeftAddon children="$" />
              <Input
                type="number"
                placeholder="0"
                onChange={(e) => setPriceConcat(e.target.value)}
              />
            </InputGroup>
          </FormControl>
          ,
          <FormControl mt={3}>
            <FormLabel fontWeight="400">Calories</FormLabel>
            <InputGroup>
              <InputLeftAddon children="cal" />
              <Input
                type="number"
                placeholder="0"
                onChange={(e) => setCaloriesConcat(e.target.value)}
              />
            </InputGroup>
          </FormControl>
          <Box marginTop={20}>
            <Switch
              size="sm"
              checked={push}
              onChange={() => myfuncresponse(caloriesConcat, priceConcat, size)}
            ></Switch>
          </Box>
        </HStack>
      )
    );
  };

  return (
    <>
      <Drawer
        isOpen={props.isOpen}
        placement="right"
        onClose={props.onClose}
        size="lg"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Add New Item</DrawerHeader>

          <DrawerBody>
            <Tabs>
              <TabList>
                <Tab>General Information</Tab>
                <Tab>Price Options</Tab>
                <Tab>Modifier Options</Tab>
                <Tab>Nutrition Info</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <FormControl>
                    <FormLabel fontWeight="400">Name</FormLabel>
                    <Input
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                    />
                  </FormControl>

                  <FormControl mt={3}>
                    <FormLabel fontWeight="400">Description</FormLabel>
                    <Textarea
                      placeholder="Here is a sample placeholder"
                      onChange={(e) => setDescription(e.target.value)}
                      value={description}
                    />
                  </FormControl>

                  <FormControl mt={3}>
                    <FormLabel fontWeight="400">Display the section</FormLabel>
                    <SwitchComponent
                      id="switch1"
                      checked={checked}
                      onChange={(e) => setChecked(e.target.checked)}
                    />
                  </FormControl>

                  <FormControl mt={3}>
                    <HStack>
                      <FormLabel fontWeight="400">Price</FormLabel>
                      <Input
                        placeholder="Price"
                        borderRadius={6}
                        width="160px"
                        mr={4}
                        value={itemprice}
                        onChange={(e) => setItemPrice(e.target.value)}
                      />
                      <FormLabel fontWeight="400">Calorie</FormLabel>
                      <Input
                        placeholder="Calorie"
                        borderRadius={6}
                        width="160px"
                        mr={4}
                        value={calorie}
                        onChange={(e) => setCalorie(e.target.value)}
                      />
                    </HStack>
                  </FormControl>

                  <FormControl mt={3}>
                    <FormLabel fontWeight="400">Mark as Sold Out</FormLabel>
                    <SwitchComponent
                      id="switch1"
                      checked={sold}
                      onChange={(e) => setSold(e.target.checked)}
                    />
                  </FormControl>

                  <FormControl mt={3}>
                    <FormLabel fontWeight="400">Upload Your Image</FormLabel>
                    <Input
                      size="sm"
                      type="file"
                      accept=".jpg,.png"
                      onChange={pictureCapture}
                      id="img"
                    />
                    {image && (
                      <div>
                        <img
                          className="preview mt-4 mx-auto"
                          src={image}
                          alt=""
                          width="200px"
                          height="200px"
                          onClick={ModalOnOpen}
                        />
                        <IconButton
                          onClick={deleteimg}
                          variant="outline"
                          colorScheme="teal"
                          icon={<BsFillTrashFill />}
                        />
                      </div>
                    )}

                    <Modal isOpen={ModalOpen} onClose={ModalOnClose}>
                      <ModalOverlay />
                      <ModalContent>
                        <ModalCloseButton />

                        <ModalBody>
                          <Center>
                            <div>
                              <img className="preview p-5" src={image} alt="" />
                            </div>
                          </Center>
                        </ModalBody>
                      </ModalContent>
                    </Modal>
                  </FormControl>

                  <FormControl mt={3}>
                    <FormLabel fontWeight="400">Upload Your Video</FormLabel>
                    <Input
                      size="sm"
                      type="file"
                      onChange={(e) => videoCapture(e.target.files[0].name)}
                    />
                  </FormControl>

                  {/* <FormControl mt={3}>
                    <FormLabel fontWeight="400">Section</FormLabel>
                    <Select></Select>
                  </FormControl> */}

                  <FormControl mt={3}>
                    <FormLabel fontWeight="400">Labels</FormLabel>
                    <Multiselect
                      isObject={false}
                      onRemove={(event) => {
                        removalMultiSelect(event);
                      }}
                      onSelect={(event) => {
                        selectionMultiSelect(event);
                      }}
                      options={food}
                      selectedValues={select}
                      showCheckbox
                    />
                  </FormControl>

                  <FormControl mt={3}>
                    <FormLabel fontWeight="400">Ingredient Warnings</FormLabel>
                    <Multiselect
                      isObject={false}
                      value={warningState}
                      onRemove={(event) => {
                        removalMultiSelectwarning(event);
                      }}
                      onSelect={(event) => {
                        selectionMultiSelectwarning(event);
                      }}
                      options={warning}
                      selectedValues={warningState}
                      showCheckbox
                    />
                  </FormControl>

                  <FormControl mt={3}>
                    <FormLabel fontWeight="400">Recommended Items</FormLabel>
                    <Input
                      type="text"
                      placeholder="Type to search items"
                      onChange={(e) => setRecommendedItem(e.target.value)}
                    />
                  </FormControl>

                  <FormControl mt={3}>
                    <FormLabel fontWeight="400">Preparation Time</FormLabel>
                    <InputGroup>
                      <InputLeftAddon children="min(s)" />
                      <Input
                        type="number"
                        placeholder="0"
                        w="30%"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                      />
                    </InputGroup>
                  </FormControl>
                </TabPanel>
                <TabPanel>
                  <Box>
                    {inputList?.map((x, index) => {
                      return (
                        <Box key={index} mt={5}>
                          <HStack>
                            <Input
                              borderRadius="8px"
                              placeholder="Name"
                              name="name"
                              size="sm"
                              type="text"
                              value={x.name}
                              width="30%"
                              onChange={(e) => handleChange(e, index)}
                            />
                            <Input
                              borderRadius="8px"
                              placeholder="Price"
                              size="sm"
                              name="price"
                              type="text"
                              value={x.price}
                              width="30%"
                              onChange={(e) => handleChange(e, index)}
                            />
                            <Input
                              borderRadius="8px"
                              placeholder="Calories"
                              size="sm"
                              name="calories"
                              type="text"
                              width="30%"
                              value={x.calories}
                              onChange={(e) => handleChange(e, index)}
                            />
                            {inputList.length !== 1 && (
                              <IconButton
                                size="xs"
                                variant="outline"
                                colorScheme="blue"
                                onClick={handleRemoveInput}
                                icon={<CloseIcon />}
                              />
                            )}
                            {inputList.length - 1 === index && (
                              <IconButton
                                size="xs"
                                variant="outline"
                                colorScheme="blue"
                                onClick={() => handleAddInput(index)}
                                icon={<AddIcon />}
                              />
                            )}
                          </HStack>
                        </Box>
                      );
                    })}
                  </Box>
                  {/* <Box>
                    <Text>
                      {JSON.stringify(inputList, null, 2)}
                    </Text>

                  </Box> */}
                </TabPanel>
                <TabPanel>
                  <Box>
                    {demoModifier?.map((y, index) => {
                      return (
                        <Box key={index} mt={5}>
                          <HStack>
                            <Select
                              placeholder="Select Group"
                              width="30%"
                              size="sm"
                              borderRadius="8px"
                              name="groupname"
                              value={y.groupname}
                              onChange={(e) => ModifierOptions(e, index)}
                            >
                              {modifier?.map((a, index) => {
                                return (
                                  <option value={a.Groupname}>
                                    {a.Groupname}
                                  </option>
                                );
                              })}
                            </Select>

                            <Input
                              borderRadius="8px"
                              placeholder="Min"
                              size="sm"
                              name="min"
                              type="text"
                              value={y.min}
                              width="30%"
                              onChange={(e) => ModifierOptions(e, index)}
                            />
                            <Input
                              borderRadius="8px"
                              placeholder="Max"
                              size="sm"
                              name="max"
                              type="text"
                              width="30%"
                              value={y.max}
                              onChange={(e) => ModifierOptions(e, index)}
                            />
                            {/* <Checkbox>Required</Checkbox> */}
                            {demoModifier.length !== 1 && (
                              <IconButton
                                size="xs"
                                variant="outline"
                                colorScheme="blue"
                                onClick={handleRemoveModifier}
                                icon={<CloseIcon />}
                              />
                            )}
                            {demoModifier.length - 1 === index && (
                              <IconButton
                                size="xs"
                                variant="outline"
                                colorScheme="blue"
                                onClick={() => handleModifierInput(index)}
                                icon={<AddIcon />}
                              />
                            )}
                          </HStack>
                        </Box>
                      );
                    })}
                    {/* <div style={{ marginTop: 20 }}>
                      {JSON.stringify(demoModifier)}
                    </div> */}
                  </Box>
                </TabPanel>
                <TabPanel>
                  <FormControl>
                    <FormLabel fontWeight="400">
                      Display the Nutrition Info on the menu
                    </FormLabel>
                    <Switch></Switch>
                  </FormControl>

                  <FormControl mt={3}>
                    <FormLabel fontWeight="400">Serving Size</FormLabel>
                    <Input
                      type="text"
                      value={servingsize}
                      onChange={(e) => setServingSize(e.target.value)}
                    />
                  </FormControl>

                  <Grid templateColumns="repeat(5, 1fr)" gap={4} mt={3}>
                    <GridItem colSpan={2} h="10">
                      <FormControl mt={3}>
                        <FormLabel fontWeight="400">Calories</FormLabel>

                        <NumberInput
                          value={nutcalories}
                          onChange={(nutcalories) =>
                            setNutCalories(nutcalories)
                          }
                        >
                          <NumberInputField />
                          <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                          </NumberInputStepper>
                        </NumberInput>
                      </FormControl>
                    </GridItem>
                    <GridItem colStart={4} colEnd={6} h="10">
                      <FormControl mt={3}>
                        <FormLabel fontWeight="400">
                          Calories From Fat
                        </FormLabel>

                        <NumberInput
                          value={caloriesfat}
                          onChange={(caloriesfat) =>
                            setCaloriesFat(caloriesfat)
                          }
                        >
                          <NumberInputField />
                          <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                          </NumberInputStepper>
                        </NumberInput>
                      </FormControl>
                    </GridItem>
                  </Grid>

                  <SimpleGrid columns={3} spacing={10} mt="15%">
                    <GridItem h="10">
                      <Text fontWeight="500">Total Fat</Text>
                    </GridItem>
                    <GridItem>
                      <NumberInput
                        value={totalfat}
                        onChange={(totalfat) => setTotalFat(totalfat)}
                      >
                        <NumberInputField placeholder="gr" />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </GridItem>
                    <GridItem h="10">
                      <GridItem>
                        <NumberInput
                          value={totalfatpercentage}
                          onChange={(totalfatpercentage) =>
                            setTotalFatPercentage(totalfatpercentage)
                          }
                        >
                          <NumberInputField placeholder="%" />
                          <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                          </NumberInputStepper>
                        </NumberInput>
                      </GridItem>
                    </GridItem>
                  </SimpleGrid>

                  <SimpleGrid columns={3} spacing={10} mt="2%">
                    <GridItem h="10">
                      <Text>Saturated Fat</Text>
                    </GridItem>
                    <GridItem>
                      <NumberInput
                        value={saturatedFat}
                        onChange={(saturatedFat) =>
                          setSaturatedFat(saturatedFat)
                        }
                      >
                        <NumberInputField placeholder="gr" />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </GridItem>
                    <GridItem h="10">
                      <GridItem>
                        <NumberInput
                          value={saturatedfatpercentage}
                          onChange={(saturatedfatpercentage) =>
                            setSaturatedFatPercentage(saturatedfatpercentage)
                          }
                        >
                          <NumberInputField placeholder="%" />
                          <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                          </NumberInputStepper>
                        </NumberInput>
                      </GridItem>
                    </GridItem>
                  </SimpleGrid>

                  <SimpleGrid columns={3} spacing={10} mt="2%">
                    <GridItem h="10">
                      <Text>Trans Fat</Text>
                    </GridItem>
                    <GridItem>
                      <NumberInput
                        value={transfat}
                        onChange={(transfat) => setTransFat(transfat)}
                      >
                        <NumberInputField placeholder="gr" />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </GridItem>
                    <GridItem h="10">
                      <GridItem>
                        <NumberInput
                          value={transfatpercentage}
                          onChange={(transfatpercentage) =>
                            setTransFatPercentage(transfatpercentage)
                          }
                        >
                          <NumberInputField placeholder="%" />
                          <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                          </NumberInputStepper>
                        </NumberInput>
                      </GridItem>
                    </GridItem>
                  </SimpleGrid>

                  <SimpleGrid columns={3} spacing={10} mt="2%">
                    <GridItem h="10">
                      <Text fontWeight="500">Cholesterol</Text>
                    </GridItem>
                    <GridItem>
                      <NumberInput
                        value={cholesterol}
                        onChange={(cholesterol) => setCholesterol(cholesterol)}
                      >
                        <NumberInputField placeholder="mg" />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </GridItem>
                    <GridItem h="10">
                      <GridItem>
                        <NumberInput
                          value={cholesterolpercentage}
                          onChange={(cholesterolpercentage) =>
                            setCholesterolPercentage(cholesterolpercentage)
                          }
                        >
                          <NumberInputField placeholder="%" />
                          <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                          </NumberInputStepper>
                        </NumberInput>
                      </GridItem>
                    </GridItem>
                  </SimpleGrid>

                  <SimpleGrid columns={3} spacing={10} mt="2%">
                    <GridItem h="10">
                      <Text fontWeight="500">Sodium</Text>
                    </GridItem>
                    <GridItem>
                      <NumberInput
                        value={sodium}
                        onChange={(sodium) => setSodium(sodium)}
                      >
                        <NumberInputField placeholder="mg" />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </GridItem>
                    <GridItem h="10">
                      <GridItem>
                        <NumberInput
                          value={sodiumPercentage}
                          onChange={(sodiumPercentage) =>
                            setSodiumPercentage(sodiumPercentage)
                          }
                        >
                          <NumberInputField placeholder="%" />
                          <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                          </NumberInputStepper>
                        </NumberInput>
                      </GridItem>
                    </GridItem>
                  </SimpleGrid>

                  <SimpleGrid columns={3} spacing={10} mt="2%">
                    <GridItem h="10">
                      <Text fontWeight="500">Total Carbs</Text>
                    </GridItem>
                    <GridItem>
                      <NumberInput
                        value={totalCarbs}
                        onChange={(totalCarbs) => setTotalCarbs(totalCarbs)}
                      >
                        <NumberInputField placeholder="gr" />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </GridItem>
                    <GridItem h="10">
                      <GridItem>
                        <NumberInput
                          value={totalCarbsPercentage}
                          onChange={(totalCarbsPercentage) =>
                            setTotalCarbsPercentage(totalCarbsPercentage)
                          }
                        >
                          <NumberInputField placeholder="%" />
                          <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                          </NumberInputStepper>
                        </NumberInput>
                      </GridItem>
                    </GridItem>
                  </SimpleGrid>

                  <SimpleGrid columns={3} spacing={10} mt="2%">
                    <GridItem h="10">
                      <Text>Dietary Fiber</Text>
                    </GridItem>
                    <GridItem>
                      <NumberInput
                        value={dietaryFiber}
                        onChange={(dietaryFiber) =>
                          setDietaryFiber(dietaryFiber)
                        }
                      >
                        <NumberInputField placeholder="gr" />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </GridItem>
                    <GridItem h="10">
                      <GridItem>
                        <NumberInput
                          value={dietaryFiberPercentage}
                          onChange={(dietaryFiberPercentage) =>
                            setDietaryFiberPercentage(dietaryFiberPercentage)
                          }
                        >
                          <NumberInputField placeholder="%" />
                          <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                          </NumberInputStepper>
                        </NumberInput>
                      </GridItem>
                    </GridItem>
                  </SimpleGrid>

                  <SimpleGrid columns={3} spacing={10} mt="2%">
                    <GridItem h="10">
                      <Text>Sugars</Text>
                    </GridItem>
                    <GridItem>
                      <NumberInput
                        value={sugar}
                        onChange={(sugar) => setSugar(sugar)}
                      >
                        <NumberInputField placeholder="gr" />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </GridItem>
                    <GridItem h="10">
                      <GridItem>
                        <NumberInput
                          value={sugarPercentage}
                          onChange={(sugarPercentage) =>
                            setSugarPercentage(sugarPercentage)
                          }
                        >
                          <NumberInputField placeholder="%" />
                          <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                          </NumberInputStepper>
                        </NumberInput>
                      </GridItem>
                    </GridItem>
                  </SimpleGrid>

                  <SimpleGrid columns={3} spacing={10} mt="2%">
                    <GridItem h="10">
                      <Text fontWeight="500">Protein</Text>
                    </GridItem>
                    <GridItem>
                      <NumberInput
                        value={protein}
                        onChange={(protein) => setProtein(protein)}
                      >
                        <NumberInputField placeholder="mg" />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </GridItem>
                    <GridItem h="10">
                      <GridItem>
                        <NumberInput
                          value={proteinPercentage}
                          onChange={(proteinPercentage) =>
                            setProteinPercentage(proteinPercentage)
                          }
                        >
                          <NumberInputField placeholder="%" />
                          <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                          </NumberInputStepper>
                        </NumberInput>
                      </GridItem>
                    </GridItem>
                  </SimpleGrid>

                  <SimpleGrid columns={3} spacing={10} mt="2%">
                    <GridItem h="10">
                      <Text>Vitamin A</Text>
                    </GridItem>
                    <GridItem>
                      <NumberInput
                        value={vitaminA}
                        onChange={(vitaminA) => setVitaminA(vitaminA)}
                      >
                        <NumberInputField placeholder="%" />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </GridItem>
                  </SimpleGrid>

                  <SimpleGrid columns={3} spacing={10} mt="2%">
                    <GridItem h="10">
                      <Text>Vitamin C</Text>
                    </GridItem>
                    <GridItem>
                      <NumberInput
                        value={vitaminC}
                        onChange={(vitaminC) => setVitaminC(vitaminC)}
                      >
                        <NumberInputField placeholder="%" />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </GridItem>
                  </SimpleGrid>

                  <SimpleGrid columns={3} spacing={10} mt="2%">
                    <GridItem h="10">
                      <Text>Calcium</Text>
                    </GridItem>
                    <GridItem>
                      <NumberInput
                        value={calcium}
                        onChange={(calcium) => setCalcium(calcium)}
                      >
                        <NumberInputField placeholder="%" />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </GridItem>
                  </SimpleGrid>

                  <SimpleGrid columns={3} spacing={10} mt="2%">
                    <GridItem h="10">
                      <Text>Iron</Text>
                    </GridItem>
                    <GridItem>
                      <NumberInput
                        value={iron}
                        onChange={(iron) => setIron(iron)}
                      >
                        <NumberInputField placeholder="%" />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </GridItem>
                  </SimpleGrid>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </DrawerBody>

          <DrawerFooter>
            <Checkbox defaultChecked mr="46%">
              Save and add more
            </Checkbox>
            {/* <Button variant="outline" mr={3} onClick={props.onClose}>
              Cancel
            </Button> */}
            <CustomButton
              click={props.onClose}
              btnText={"Cancel"}
              variant={"outline"}
              mr={3}
              size={"sm"}
            />
            {/* <CustomButton
              btnText={"Save"}
              click={() => testfunc()}
              size={"sm"}
            /> */}

            {Number.isInteger(props?.item_index) ? (
              <Button
                colorScheme="blue"
                onClick={() => {
                  updateItem(props?.subsection_index);
                }}
              >
                Update
              </Button>
            ) : (
              <Button
                colorScheme="blue"
                onClick={() => {
                  testfunc(props?.subsection_push);
                }}
              >
                Save
              </Button>
            )}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ItemDrawer;
