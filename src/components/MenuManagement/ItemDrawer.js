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
  Tooltip,
} from "@chakra-ui/react";
import {
  faSpaghettiMonsterFlying,
  faXRay,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { BsFillTrashFill, BsPlusLg } from "react-icons/bs";
import { MenuState } from "../../context/MenuContext";
import CustomButton from "../../CustomElements/CustomButton";
import Multiselect from "multiselect-react-dropdown";
import { SwitchComponent } from "@syncfusion/ej2-react-buttons";
import { AddIcon, CloseIcon } from "@chakra-ui/icons";
import apiFunctions from "../../global/GlobalFunction";
import { API_URL, BASE_URL } from "../../global/Constant";
import { useToast } from "@chakra-ui/react";
import Spinner from "react-bootstrap/Spinner";

const ItemDrawer = (props) => {
  let section_index = props?.section_index;
  let subSection_index = props?.subSection_index;
  // console.log(subSection_index, "subsection_index");
  // console.log(section_index, "section_index");

  let section_Or_subSection = props?.fromSection;
  // console.log(section_Or_subSection, "section_Or_subSection");
  let item_index = props?.item_index;

  const toast = useToast();

  const {
    isOpen: ModalOpen,
    onOpen: ModalOnOpen,
    onClose: ModalOnClose,
  } = useDisclosure();
  const { response, setResponse, itemUpdater, setItemUpdater } = MenuState();
  const [loading, setLoading] = useState(true);
  const [select, setSelect] = useState();
  const [conversion, setConversion] = useState([]);

  const [demoModifier, setDemoModifier] = useState([{ min: "", max: "" }]);

  const [price, setPrice] = useState([]);
  const [rrr, setRrr] = useState([]);

  const [video, setVideo] = useState();

  const [priceConcat, setPriceConcat] = useState();
  const [caloriesConcat, setCaloriesConcat] = useState();
  const [size, setSize] = useState();
  const [push, setPush] = useState(false);
  const [food, setFood] = useState([
    "New",
    "Signature",
    "Special_Presentation",
  ]);

  const [modifier, setModifier] = useState([]);

  const [title, setTitle] = useState();

  const [warning, setWarning] = useState(["Alcohol", "AlcoholFree"]);

  const [conversionWarning, setConversionWarning] = useState([]);
  const [warningState, setWarningState] = useState();
  const [image, setImage] = useState();
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [checked, setChecked] = useState();
  const [calorie, setCalorie] = useState();
  const [sold, setSold] = useState();
  const [time, setTime] = useState();
  const [itemPrice, setItemPrice] = useState();
  const [nutCalories, setNutCalories] = useState();
  const [saturatedFatPercentage, setSaturatedFatPercentage] = useState();
  const [transFat, setTransFat] = useState();
  const [transFatPercentage, setTransFatPercentage] = useState();
  const [cholesterol, setCholesterol] = useState();
  const [cholesterolPercentage, setCholesterolPercentage] = useState();
  const [sodium, setSodium] = useState();
  const [sodiumPercentage, setSodiumPercentage] = useState();
  const [totalCarbs, setTotalCarbs] = useState();
  const [totalCarbsPercentage, setTotalCarbsPercentage] = useState();
  const [dietaryFiber, setDietaryFiber] = useState();
  const [dietaryFiberPercentage, setDietaryFiberPercentage] = useState();
  const [sugar, setSugar] = useState();
  const [sugarPercentage, setSugarPercentage] = useState();
  const [protein, setProtein] = useState();
  const [proteinPercentage, setProteinPercentage] = useState();
  const [vitaminA, setVitaminA] = useState();
  const [vitaminC, setVitaminC] = useState();
  const [iron, setIron] = useState();
  const [calcium, setCalcium] = useState();
  const [totalFat, setTotalFat] = useState();
  const [totalFatPercentage, setTotalFatPercentage] = useState();
  const [saturatedFat, setSaturatedFat] = useState();
  const [caloriesfat, setCaloriesFat] = useState();
  const [servingSize, setServingSize] = useState();
  const [state, setState] = useState();
  let itemModifier = [];
  const [recommendedItem, setRecommendedItem] = useState();

  const [inputList, setInputList] = useState([
    { name: "", price: "", calories: "" },
  ]);
  if (itemPrice || calorie) {
    inputList[0].price = itemPrice;
    inputList[0].calories = calorie;
  }

  let itemData = {
    itemName: name,
    itemImage: image,
    itemDescription: description,
    active: checked,
    itemCalorie: calorie,
    itemTag: sold,
    itemLabel: conversion,
    itemRecommendedItems: recommendedItem,
    itemWarning: conversionWarning,
    itemPrepTime: time,
    itemPrice: itemPrice,
    itemCalories: nutCalories,
    video: video,
    itemPriceOption: inputList,
    itemSaturatedFatPercentage: saturatedFatPercentage,
    itemTransFat: transFat,
    itemTransFatPercentage: transFatPercentage,
    itemCholesterol: cholesterol,
    itemCholesterolPercentage: cholesterolPercentage,
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
    itemTotalFat: totalFat,
    itemTotalFatPercentage: totalFatPercentage,
    itemSaturatedFat: saturatedFat,
    itemNutritionCalories: nutCalories,
    itemCaloriesFat: caloriesfat,
    itemServingSize: servingSize,
    itemModifier: state,
  };

  const updateItem = async (id) => {
    if (props?.itemDecider === "item" && id) {
      await apiFunctions
        .PUT_REQUEST(BASE_URL + API_URL.UPDATE_ITEM_BY_ID + id, itemData)
        .then((res) => {
          console.log(res);
          if (res.data.success == true) {
            // alert(` ITEM UPDATED SUCCESSFULLY`);
            toast({
              position: "top",
              title: ` Item Updated Successfully`,
              status: "success",
              duration: 9000,
              isClosable: true,
            });
            setItemUpdater(true);
            return true;
          } else {
            toast({
              position: "top",
              title: `There Some Error`,
              status: "error",
              duration: 9000,
              isClosable: true,
            });
            return false;
          }
        });
    } else {
      await apiFunctions
        .PUT_REQUEST(BASE_URL + API_URL.UPDATE_SUB_ITEM_BY_ID + id, itemData)
        .then((res) => {
          if (res.data.success == true) {
            toast({
              position: "top",
              title: `Sub Item Updated Successfully`,
              status: "success",
              duration: 9000,
              isClosable: true,
            });
            setItemUpdater(true);
            return true;
          } else {
            toast({
              position: "top",
              title: `There Some Error`,
              status: "error",
              duration: 9000,
              isClosable: true,
            });
            return false;
          }
        });
    }
  };

  let jsonObj = {};
  let jsonObjWarning = {};

  const selectionMultiSelect = (event) => {
    setSelect(event);

    for (let i in event) {
      jsonObj[event[i]] = event[i];
    }
    setConversion([]);
    setConversion([jsonObj]);
  };

  const removalMultiSelect = (event) => {
    setSelect(event);

    for (let i in event) {
      jsonObj[event[i]] = event[i];
    }
    setConversion([]);
    setConversion([jsonObj]);
  };

  const selectionMultiSelectwarning = (event) => {
    setWarningState(event);

    for (let i in event) {
      jsonObjWarning[event[i]] = event[i];
    }
    setConversionWarning([]);
    setConversionWarning([jsonObjWarning]);
  };

  const removalMultiSelectwarning = (event) => {
    setWarningState(event);

    for (let i in event) {
      jsonObjWarning[event[i]] = event[i];
    }
    setConversionWarning([]);
    setConversionWarning([jsonObjWarning]);
  };

  const testfunc = async (secid, subsecid) => {
    if (section_Or_subSection === "section" && secid) {
      if (!name) {
        //alert("Please Enter All Fields");
        toast({
          position: "top",
          title: `Please Enter All Fields`,
          status: "warning",
          duration: 9000,
          isClosable: true,
        });
        return;
      }
      await apiFunctions
        .POST_REQUEST(BASE_URL + API_URL.CREATE_ITEM + secid, itemData)
        .then((res) => {
          if (res.data.success == true) {
            toast({
              position: "top",
              title: `Item Created SuccessFully`,
              status: "success",
              duration: 9000,
              isClosable: true,
            });
            setItemUpdater(true);
            return true;
          } else {
            // alert(`There Some Error`);
            toast({
              position: "top",
              title: `There Some Error`,
              status: "error",
              duration: 9000,
              isClosable: true,
            });
            return false;
          }
        });
    } else if (section_Or_subSection === "subSection" && subsecid) {
      if (!name) {
        //alert("Please Enter All Fields");
        toast({
          position: "top",
          title: `Please Enter All Fields`,
          status: "warning",
          duration: 9000,
          isClosable: true,
        });
        return;
      }
      await apiFunctions
        .POST_REQUEST(BASE_URL + API_URL.CREATE_SUB_ITEM + subsecid, itemData)
        .then((res) => {
          // console.log(res.data.subSectionItem, "item response");
          if (res.data.success == true) {
            toast({
              position: "top",
              title: `Sub Item Created SuccessFully`,
              status: "success",
              duration: 9000,
              isClosable: true,
            });
            setItemUpdater(true);
            return true;
          } else {
            toast({
              position: "top",
              title: `There Some Error`,
              status: "error",
              duration: 9000,
              isClosable: true,
            });
            return false;
          }
        });
    }
  };

  useEffect(() => {
    // console.log(props.itemDecider);
    if (item_index && props?.itemDecider === "item") {
      getSingleItemByID();
    } else if (item_index && props?.itemDecider === "subItem") {
      getSingleSubItemByID();
    } else {
      return;
    }
  }, []);

  async function getSingleItemByID() {
    setLoading(false);
    let getSingleItem = await apiFunctions.GET_REQUEST_BY_ID(
      BASE_URL + API_URL.GET_ITEM_BY_ID + item_index
    );

    if (getSingleItem.data.item.length == 0) {
      setLoading(true);
    }

    let setVar = getSingleItem.data.item;
    let propertyNames;
    let propertyNamesWarning;

    setName(setVar.itemName);
    setTitle(setVar.itemName);
    setImage(setVar.itemImage);
    setDescription(setVar.itemDescription);
    setChecked(setVar.active);
    setCalorie(setVar.itemCalorie);
    setSold(setVar.itemTag);

    for (let i in setVar.itemLabel) {
      propertyNames = Object.keys(setVar.itemLabel[i]);
    }
    if (propertyNames) {
      propertyNames.pop();
    }

    setSelect(propertyNames);

    for (let i in setVar.itemWarning) {
      propertyNamesWarning = Object.keys(setVar.itemWarning[i]);
    }
    if (propertyNamesWarning) {
      propertyNamesWarning.pop();
    }

    setWarningState(propertyNamesWarning);

    setRecommendedItem(setVar.itemRecommendedItems);
    setTime(setVar.itemPrepTime);
    setItemPrice(setVar.itemPrice);
    setNutCalories(setVar.itemCalories);
    setVideo(setVar.video);
    setInputList(setVar.itemPriceOption);
    setSaturatedFatPercentage(setVar.itemSaturatedFatPercentage);
    setTransFat(setVar.itemTransFat);
    setTransFatPercentage(setVar.itemTransFatPercentage);
    setCholesterol(setVar.itemCholesterol);
    setCholesterolPercentage(setVar.itemCholesterolPercentage);
    setSodium(setVar.itemSodium);
    setSodiumPercentage(setVar.itemSodiumPercentage);
    setTotalCarbs(setVar.itemTotalCarbs);
    setTotalCarbsPercentage(setVar.itemTotalCarbsPercentage);
    setDietaryFiber(setVar.itemDietaryFiber);
    setDietaryFiberPercentage(setVar.itemDietaryFiberPercentage);
    setSugar(setVar.itemSugar);
    setSugarPercentage(setVar.itemSugarPercentage);
    setProtein(setVar.itemProtein);
    setProteinPercentage(setVar.itemProteinPercentage);
    setVitaminA(setVar.itemVitaminA);
    setVitaminC(setVar.itemVitaminC);
    setIron(setVar.itemIron);
    setCalcium(setVar.itemCalcium);
    setTotalFat(setVar.itemTotalFat);
    setTotalFatPercentage(setVar.itemTotalFatPercentage);
    setSaturatedFat(setVar.itemSaturatedFat);
    setNutCalories(setVar.itemNutritionCalories);
    setCaloriesFat(setVar.itemCaloriesFat);
    setServingSize(setVar.itemServingSize);

    if (setVar.itemModifier[0]?.min) {
      setDemoModifier(setVar.itemModifier);
    } else {
      setDemoModifier([{ min: "", max: "" }]);
    }
    setLoading(true);
  }

  async function getSingleSubItemByID() {
    setLoading(false);
    let getSingleItem = await apiFunctions.GET_REQUEST_BY_ID(
      BASE_URL + API_URL.GET_SINGLE_SUB_ITEM_BY_ID + item_index
    );

    if (getSingleItem.data.item.length == 0) {
      setLoading(true);
    }

    let setVar = getSingleItem.data.item;
    let propertyNames;
    let propertyNamesWarning;

    setName(setVar.itemName);
    setTitle(setVar.itemName);
    setImage(setVar.itemImage);
    setDescription(setVar.itemDescription);
    setChecked(setVar.active);
    setCalorie(setVar.itemCalorie);
    setSold(setVar.itemTag);

    for (let i in setVar.itemLabel) {
      propertyNames = Object.keys(setVar.itemLabel[i]);
    }
    if (propertyNames) {
      propertyNames.pop();
    }

    setSelect(propertyNames);

    for (let i in setVar.itemWarning) {
      propertyNamesWarning = Object.keys(setVar.itemWarning[i]);
    }
    if (propertyNamesWarning) {
      propertyNamesWarning.pop();
    }

    setWarningState(propertyNamesWarning);

    setRecommendedItem(setVar.itemRecommendedItems);
    setTime(setVar.itemPrepTime);
    setItemPrice(setVar.itemPrice);
    setNutCalories(setVar.itemCalories);
    setVideo(setVar.video);
    setInputList(setVar.itemPriceOption);
    setSaturatedFatPercentage(setVar.itemSaturatedFatPercentage);
    setTransFat(setVar.itemTransFat);
    setTransFatPercentage(setVar.itemTransFatPercentage);
    setCholesterol(setVar.itemCholesterol);
    setCholesterolPercentage(setVar.itemCholesterolPercentage);
    setSodium(setVar.itemSodium);
    setSodiumPercentage(setVar.itemSodiumPercentage);
    setTotalCarbs(setVar.itemTotalCarbs);
    setTotalCarbsPercentage(setVar.itemTotalCarbsPercentage);
    setDietaryFiber(setVar.itemDietaryFiber);
    setDietaryFiberPercentage(setVar.itemDietaryFiberPercentage);
    setSugar(setVar.itemSugar);
    setSugarPercentage(setVar.itemSugarPercentage);
    setProtein(setVar.itemProtein);
    setProteinPercentage(setVar.itemProteinPercentage);
    setVitaminA(setVar.itemVitaminA);
    setVitaminC(setVar.itemVitaminC);
    setIron(setVar.itemIron);
    setCalcium(setVar.itemCalcium);
    setTotalFat(setVar.itemTotalFat);
    setTotalFatPercentage(setVar.itemTotalFatPercentage);
    setSaturatedFat(setVar.itemSaturatedFat);
    setNutCalories(setVar.itemNutritionCalories);
    setCaloriesFat(setVar.itemCaloriesFat);
    setServingSize(setVar.itemServingSize);
    if (setVar.itemModifier[0]?.min) {
      setDemoModifier(setVar.itemModifier);
    } else {
      setDemoModifier([{ min: "", max: "" }]);
    }
    setLoading(true);
  }

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  const handleAddInput = () => {
    setInputList([...inputList, { name: "", price: "", calories: "" }]);
    const list = [...inputList];
    list.push({ name: "", price: "", calories: "" });
    setInputList(list);
  };

  const handleRemoveInput = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

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
          // console.log(itemModifier, 'itemMODIFER')
          itemModifier.push(responseBody);
          setState(itemModifier);
          // console.log(state, "states");
        }
      }
    }
  };

  const handleModifierInput = () => {
    setDemoModifier([...demoModifier, { min: "", max: "" }]);
    const x = [...demoModifier];
    x.push({ min: "", max: "" });
    setDemoModifier(x);
  };

  const handleRemoveModifier = (index) => {
    const x = [...demoModifier];
    x.splice(index, 1);
    setDemoModifier(x);

    setState(x);
  };

  useEffect(() => {
    getAllModifier();
  }, []);

  async function getAllModifier() {
    let getMenu = await apiFunctions.GET_REQUEST(
      BASE_URL + API_URL.GET_ALL_MODIFIER
    );

    let res = getMenu.data.modifier;
    setModifier(res);
  }

  const pictureCapture = (event) => {
    const formData = new FormData();
    formData.append("file", event.target.files[0]);
    formData.append("upload_preset", "dineInApp");
    fetch("https://api.cloudinary.com/v1_1/dkq6jers7/image/upload", {
      method: "post",
      body: formData,
    }).then((res) =>
      res
        .json()
        .then((data) => {
          // setPic(data.url.toString());
          setImage(data.url.toString());
        })
        .catch((err) => {
          // console.log(err);
        })
    );
  };

  function deleteimg() {
    setImage(null);
    document.getElementById("img").value = "";
  }

  function deleteVideo() {
    setVideo(null);
    document.getElementById("video").value = "";
  }

  const videoCapture = async (event) => {
    try {
      setVideo("");
      const formData = new FormData();
      formData.append("file", event.target.files[0]);
      formData.append("upload_preset", "dineInApp");
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dkq6jers7/video/upload",
        {
          method: "post",
          body: formData,
        }
      );
      const data = await res.json();
      setVideo(data.url.toString());
      // console.log(video, "video");
    } catch (err) {
      console.log(err);
    }
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

          {(item_index && props?.itemDecider === "item") ||
            (item_index && props?.itemDecider === "subItem") ? (
            <DrawerHeader>{title}</DrawerHeader>
          ) : (
            <DrawerHeader>Add New Item</DrawerHeader>
          )}

          {loading ? (
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

                    {/* <FormControl mt={3}>
                    <FormLabel fontWeight="400">Display the section</FormLabel>
                    <SwitchComponent
                      id="switch1"
                      checked={checked}
                      onChange={(e) => setChecked(e.target.checked)}
                    />
                  </FormControl> */}

                    <label>
                      <input
                        type="checkbox"
                        checked={checked ? checked : false}
                        onChange={(e) => setChecked(e.target.checked)}
                        style={{ marginRight: "5px", marginTop: "20px" }}
                      />
                      Display The Section
                    </label>

                    <FormControl mt={3}>
                      <HStack>
                        <FormLabel fontWeight="400">Price</FormLabel>
                        <Input
                          placeholder="Price"
                          borderRadius={6}
                          width="160px"
                          mr={4}
                          value={itemPrice}
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
                      {/* <FormLabel fontWeight="400">Mark as Sold Out</FormLabel>
                    <SwitchComponent
                      id="switch1"
                      checked={sold}
                      onChange={(e) => setSold(e.target.checked)}
                    /> */}

                      <label>
                        <input
                          type="checkbox"
                          checked={sold ? sold : false}
                          onChange={(e) => setSold(e.target.checked)}
                          style={{ marginRight: "5px" }}
                        />
                        Mark as Sold Out
                      </label>
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
                                <img
                                  className="preview p-5"
                                  src={image}
                                  alt=""
                                />
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
                        accept="video/*"
                        onChange={videoCapture}
                        id="video"
                      />

                      {video && (
                        <div>
                          <Center>
                            <video width="320" height="240" controls>
                              <source src={video} type="video/mp4"></source>
                            </video>
                          </Center>
                          <IconButton
                            onClick={deleteVideo}
                            variant="outline"
                            colorScheme="teal"
                            icon={<BsFillTrashFill />}
                          />
                        </div>
                      )}
                    </FormControl>

                    {/* <video width="320" height="240" controls>
                    <source src={video} type="video/mp4">
                     


                      </video> */}
                    {/* )} */}

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
                      <FormLabel fontWeight="400">
                        Ingredient Warnings
                      </FormLabel>
                      <Multiselect
                        isObject={false}
                        // value={warningState}
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
                        value={recommendedItem}
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
                              <Tooltip label="Name" placement="top">
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
                              </Tooltip>
                              <Tooltip label="Price" placement="top">
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
                              </Tooltip>

                              <Tooltip label="Calories" placement="top">
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
                              </Tooltip>
                              {inputList.length !== 1 && (
                                <IconButton
                                  size="xs"
                                  variant="outline"
                                  colorScheme="blue"
                                  onClick={() => handleRemoveInput(index)}
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
                              <Tooltip label="Groupname" placement="top">
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
                                      <option value={a.Groupname} key={index}>
                                        {a.Groupname}
                                      </option>
                                    );
                                  })}
                                </Select>
                              </Tooltip>

                              <Tooltip label="Min" placement="top">
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
                              </Tooltip>

                              <Tooltip label="Max" placement="top">
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
                              </Tooltip>
                              {/* <Checkbox>Required</Checkbox> */}
                              {demoModifier.length !== 1 && (
                                <IconButton
                                  size="xs"
                                  variant="outline"
                                  colorScheme="blue"
                                  onClick={() => handleRemoveModifier(index)}
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

                      {/* <Box>
                      <Text>{JSON.stringify(demoModifier, null, 2)}</Text>
                    </Box> */}
                    </Box>
                  </TabPanel>
                  <TabPanel>
                    {/* <FormControl>
                      <FormLabel fontWeight="400">
                        Display the Nutrition Info on the menu
                      </FormLabel>
                      <Switch></Switch>
                    </FormControl> */}

                    <FormControl mt={3}>
                      <FormLabel fontWeight="400">Serving Size</FormLabel>
                      <Input
                        type="text"
                        value={servingSize}
                        onChange={(e) => setServingSize(e.target.value)}
                      />
                    </FormControl>

                    <Grid templateColumns="repeat(5, 1fr)" gap={4} mt={3}>
                      <GridItem colSpan={2} h="10">
                        <FormControl mt={3}>
                          <FormLabel fontWeight="400">Calories</FormLabel>

                          <NumberInput
                            value={nutCalories}
                            onChange={(nutCalories) =>
                              setNutCalories(nutCalories)
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
                          value={totalFat}
                          onChange={(totalFat) => setTotalFat(totalFat)}
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
                            value={totalFatPercentage}
                            onChange={(totalFatPercentage) =>
                              setTotalFatPercentage(totalFatPercentage)
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
                            value={saturatedFatPercentage}
                            onChange={(saturatedFatPercentage) =>
                              setSaturatedFatPercentage(saturatedFatPercentage)
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
                          value={transFat}
                          onChange={(transFat) => setTransFat(transFat)}
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
                            value={transFatPercentage}
                            onChange={(transFatPercentage) =>
                              setTransFatPercentage(transFatPercentage)
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
                          onChange={(cholesterol) =>
                            setCholesterol(cholesterol)
                          }
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
                            value={cholesterolPercentage}
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
          ) : (
            <div className="loading-screen">
              <div className="loading-spinner"> </div>
            </div>
          )}

          {loading ? (
            <DrawerFooter>
              {/* <Checkbox defaultChecked mr="46%">
                Save and add more
              </Checkbox> */}
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

              {props?.item_index ? (
                <Button
                  colorScheme="blue"
                  onClick={() => {
                    updateItem(item_index);
                  }}
                >
                  Update
                </Button>
              ) : (
                <Button
                  colorScheme="blue"
                  onClick={() => {
                    testfunc(section_index, subSection_index);
                  }}
                >
                  Save
                </Button>
              )}
            </DrawerFooter>
          ) : (
            <div className="loading-screen">
              <div className="loading-spinner"> </div>
            </div>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ItemDrawer;
