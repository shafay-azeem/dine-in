import React, { useContext } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
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
  SimpleGrid,
  Box,
  Text,
  FormHelperText,
  Checkbox,
  HStack,
  VStack,
  Radio,
  ButtonGroup,
  RadioGroup,
  useDisclosure,
  Select,
  IconButton,
} from "@chakra-ui/react";
import CustomButton from "../../CustomElements/CustomButton";
import { MenuState } from "../../context/MenuContext";
import { useState } from "react";
import { SwitchComponent } from "@syncfusion/ej2-react-buttons";
import { Alert, Col, Form, FormCheck, Row } from "react-bootstrap";
import { AddIcon, CloseIcon } from "@chakra-ui/icons";
import apiFunctions from "../../global/GlobalFunction";
import { API_URL, BASE_URL } from "../../global/Constant";
import { useEffect } from "react";

const SettingDrawer = (props) => {
  // DATA AND TIME
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var date_time = new Date().toLocaleString();

  //DAY
  const d = new Date();
  let day = weekday[d.getDay()];

  function getTimestampInSeconds() {
    return Math.floor(Date.now() / 1000);
  }
  const { response, setResponse, responseSingleMenu, setResponseSignleMenu } =
    MenuState();

  // const itemCondtionState5 =
  //   typeof response[props?.index]?.availaibility === "undefined"
  //     ? "1"
  //     : String(response[props.index].val);

  // const [value, setValue] = useState(itemCondtionState5);

  // const nameState = props?.menuCreate ? "" : response[props?.index]?.menuName;
  const [name, setName] = useState();
  const [availability, setAvailability] = useState("All Day");

  // const descriptionState = props?.menuCreate
  //   ? ""
  //   : response[props?.index]?.menuDescription;
  const [description, setDescription] = useState();

  // const noteState = props?.menuCreate ? "" : response[props?.index]?.menuNote;
  const [note, setNote] = useState();
  const [formChecked, setFormChecked] = useState(true);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  // const [avail, setEndTime] = useState();
  const [value, setValue] = useState();

  const conditonMade = props?.menuCreate ? "menuCreate" : "section";

  let y = response[props.index];
  let TOGGLE;

  if (conditonMade == "menuCreate") {
    if (typeof response?.menuStatus === "undefined") {
      TOGGLE = false;
    } else if (response?.menuStatus === false) {
      TOGGLE = false;
    } else {
      TOGGLE = true;
    }
  } else {
    if (typeof y?.menuStatus === "undefined") {
      TOGGLE = false;
    } else if (y?.menuStatus === false) {
      TOGGLE = false;
    } else {
      TOGGLE = true;
    }
  }
  const handleChange = (e) => {
    setFormChecked(e.target.checked);
  };


  // if (!props?.index) {

  // }
  const [active, setActive] = useState();

  const updatedMenu = async () => {
    // response[props.index].menuName = name;
    // response[props.index].menuDescription = description;
    // response[props.index].menuNote = note;
    // response[props.index].menuStatus = active;
    // response[props.index].createdDate = new Date().toLocaleString();
    // setResponse([...response]);
    // alert("Menu Updated Successfully");

    let menuData = {
      menuName: name,
      menuDescription: description,
      menuNote: note,
      menuStatus: active,
      availability: inputList
    };

    await apiFunctions
      .PUT_REQUEST(BASE_URL + API_URL.UPDATE_MENU_BY_ID + props.index, menuData)
      .then((res) => {
        if (res.data.success == true) {
          alert(`${res.data.message}`);
          return true;
        } else {
          alert(`There Some Error`);
          return false;
        }
      });
  };
  let SpecificDate;
  // const menuCreate = () => {
  //   if (value == 2) {
  //     if (formChecked == false) {
  //       SpecificDate = {
  //         startDate: startDate,
  //         startTime: startTime,
  //         endDate: endDate,
  //         endTime: endTime,
  //       };
  //     } else {
  //       SpecificDate = {
  //         startDate: startDate,
  //         endDate: endDate,
  //       };
  //     }
  //   } else if (value == 3) {
  //     SpecificDate = inputList;
  //   } else {
  //     SpecificDate = {
  //       availability: availability,
  //     };
  //   }

  //   let menuData = {
  //     menuName: name,
  //     menuDescription: description,
  //     menuNote: note,
  //   };

  //   response.push(menuData);
  //   alert("Menu Created");
  //   setResponse([...response]);
  // };

  let avail;

  if (typeof response[props?.index]?.availaibility === "undefined") {
    avail = [{ StartTime: "", EndTime: "" }];
  } else {
    avail = response[props.index].availaibility;
  }
  //avail
  const [inputList, setInputList] = useState([{ StartTime: "", EndTime: "" }]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleAddClick = () => {
    setInputList([...inputList, { StartTime: "", EndTime: "" }]);
  };

  let menuData = {
    menuName: name,
    menuDescription: description,
    menuNote: note,
    menuStatus: active,
    availaibility: inputList
  };


  const createMenu = async () => {
    await apiFunctions
      .POST_REQUEST(BASE_URL + API_URL.CREATE_MENU, menuData)
      .then((res) => {
        if (res.data.success == true) {
          alert(`${res.data.message}`);
          return true;
        } else {
          alert(`There Some Error`);
          return false;
        }
      });
  };

  useEffect(() => {
    if (props?.index) {
      getSingleMenuByID();
    }
    return

  }, []);


  async function getSingleMenuByID() {
    let getSingleMenu = await apiFunctions.GET_REQUEST_BY_ID(
      BASE_URL + API_URL.GET_MENU_BY_ID + props.index
    );

    let setVar = getSingleMenu.data.menu;

    setName(setVar.menuName);
    setDescription(setVar.menuDescription);
    setNote(setVar.menuNote);
    setActive(setVar.menuStatus)
    setInputList(setVar.availaibility)

    console.log(setVar.menuStatus, 'setVar.menuStatus')
    console.log(active, 'menuStatus')
    console.log(name, 'bdnme')


  }

  return (
    <Drawer
      isOpen={props.isOpen}
      placement="right"
      onClose={props.onClose}
      size="lg"
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        {/* 
        <DrawerHeader></DrawerHeader> */}

        <DrawerBody>
          <Tabs>
            <TabList>
              <Tab>Overview</Tab>
              <Tab>Customize View</Tab>
              <Tab>Visibility</Tab>
              <Tab>Availability</Tab>
            </TabList>

            <TabPanels>
              {/* Overview */}
              <TabPanel>
                <FormControl isRequired>
                  <FormLabel fontWeight="400">Name</FormLabel>
                  <Input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel fontWeight="400">Description</FormLabel>
                  <Textarea
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel fontWeight="400">Note</FormLabel>
                  <Input
                    type="text"
                    placeholder="E.g: 20% VAT included"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                  />
                </FormControl>

                <FormControl mt={3}>
                  {/* <FormLabel fontWeight="400">Display the section</FormLabel> */}

                  <label>
                    <input
                      type="checkbox"
                      checked={active ? active : false}
                      onChange={(e) => setActive(e.target.checked)}
                    />
                    Display the Menu
                  </label>

                </FormControl>
              </TabPanel>
              {/* Overview */}

              {/* Customize View */}
              <TabPanel>
                <SimpleGrid columns={2} spacing={10}>
                  <Box>
                    <Text>Alphabetical Order:</Text>
                  </Box>
                  <Box>
                    <FormControl>
                      <Switch />
                      <FormHelperText>
                        This feature sorts the items and sections under the
                        section in alphabetical order.
                      </FormHelperText>
                    </FormControl>
                  </Box>

                  <Box>
                    <Text>Number of Columns:</Text>
                  </Box>
                  <Box>
                    <FormControl>
                      <ButtonGroup variant="outline" spacing="0" size="sm">
                        <Button>1</Button>
                        <Button>2</Button>
                        <Button>3</Button>
                        <Button>4</Button>
                      </ButtonGroup>
                      <FormHelperText>
                        You can select how many grids will shown in the menu
                      </FormHelperText>
                    </FormControl>
                  </Box>
                  <Box>
                    <Text>Grid Title Position:</Text>
                  </Box>
                  <Box>
                    <FormControl>
                      <ButtonGroup variant="outline" spacing="0" size="sm">
                        <Button>Top</Button>
                        <Button>Bottom</Button>
                      </ButtonGroup>
                      <FormHelperText>
                        You can change the title position of inner sections /
                        inner items
                      </FormHelperText>
                    </FormControl>
                  </Box>
                </SimpleGrid>
              </TabPanel>
              {/* Customize View */}

              {/* Visibility */}

              <TabPanel>
                <Text>
                  The menu will be visible on the products selected below.
                </Text>
                <VStack align="stretch" mt={4}>
                  <Checkbox defaultChecked pt={2}>
                    Tablet Menu
                  </Checkbox>
                  <Checkbox defaultChecked pt={2}>
                    QR / Dine-In Menu
                  </Checkbox>
                  <Checkbox defaultChecked pt={2}>
                    Pick-Up Menu
                  </Checkbox>
                  <Checkbox defaultChecked pt={2}>
                    Delivery Menu
                  </Checkbox>
                </VStack>
              </TabPanel>
              {/* Visibility */}

              {/* Availability */}


              <TabPanel>


                <Box>


                  <Box>
                    {inputList.map((y, i) => {
                      return (
                        <Box key={i} mt={5}>
                          <HStack>
                            <Select
                              placeholder="Select Group"
                              width="30%"
                              size="sm"
                              borderRadius="8px"
                              name="Day"
                              value={y.Day}
                              onChange={(e) => handleInputChange(e, i)}
                            >
                              {weekday?.map((a) => {
                                return <option value={a}>{a}</option>;
                              })}
                            </Select>

                            <Input
                              borderRadius="8px"
                              placeholder="Max"
                              size="sm"
                              name="StartTime"
                              type="time"
                              width="30%"
                              value={y.StartTime}
                              onChange={(e) => handleInputChange(e, i)}
                            />

                            <Input
                              borderRadius="8px"
                              placeholder="Max"
                              size="sm"
                              name="EndTime"
                              type="time"
                              width="30%"
                              value={y.EndTime}
                              onChange={(e) => handleInputChange(e, i)}
                            />
                            {inputList.length !== 1 && (
                              <IconButton
                                size="xs"
                                variant="outline"
                                colorScheme="blue"
                                onClick={() => handleRemoveClick(i)}
                                icon={<CloseIcon />}
                              />
                            )}
                            {inputList.length - 1 === i && (
                              <IconButton
                                size="xs"
                                variant="outline"
                                colorScheme="blue"
                                onClick={handleAddClick}
                                icon={<AddIcon />}
                              />
                            )}
                          </HStack>
                        </Box>
                      );
                    })}
                  </Box>


                  {/* <div style={{ marginTop: 20 }}>
                      {JSON.stringify(inputList)}
                    </div> */}
                </Box>

              </TabPanel>

              {/* Availability */}
            </TabPanels>
          </Tabs>
        </DrawerBody>

        <DrawerFooter>
          {props?.menuCreate ? (
            <Button
              colorScheme="blue"
              onClick={() => {
                createMenu();
              }}
            >
              Save
            </Button>
          ) : (
            <Button
              colorScheme="blue"
              onClick={() => {
                updatedMenu();
              }}
            >
              Update
            </Button>
          )}
          {/* <CustomButton
            click={props.onClose}
            btnText={"Cancel"}
            variant={"outline"}
            mr={3}
            size={"sm"}
          /> */}
          {/* <Button
            colorScheme="blue"
            onClick={() => {
              updatedMenu();
            }}
          >
            Save
          </Button> */}
          {/* <CustomButton btnText={"Save"} mr={3} size={"sm"} /> */}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default SettingDrawer;
