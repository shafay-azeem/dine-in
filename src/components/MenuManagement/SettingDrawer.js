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
} from "@chakra-ui/react";
import CustomButton from "../../CustomElements/CustomButton";
import { MenuState } from "../../context/MenuContext";
import { useState } from "react";
import { SwitchComponent } from "@syncfusion/ej2-react-buttons";
import { isDisabled } from "@testing-library/user-event/dist/utils";
import { Col, Form, FormCheck, Row } from "react-bootstrap";

const SettingDrawer = (props) => {
  console.log(props.menuCreate, "props.menuCreate");


  // DATA AND TIME
  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var date_time = new Date().toLocaleString();

  //DAY
  const d = new Date();
  let day = weekday[d.getDay()];


  // const dateInput = document.getElementById('date');


  // dateInput.value = new Date().toISOString().split('T')[0];

  // console.log(new Date().toISOString().split('T')[0]);

  ///


  function getTimestampInSeconds() {
    return Math.floor(Date.now() / 1000);
  }
  const { response, setResponse } = MenuState();
  const [value, setValue] = useState("1");



  const nameState = props?.menuCreate ? "" : response[props?.index]?.menuName;
  const [name, setName] = useState(nameState);

  const descriptionState = props?.menuCreate
    ? ""
    : response[props?.index]?.menuDescription;
  const [description, setDescription] = useState(descriptionState);

  // const [description, setDescription] = useState(
  //   response[props?.index]?.menuDescription
  // );

  const noteState = props?.menuCreate ? "" : response[props?.index]?.menuNote;
  const [note, setNote] = useState(noteState);
  const [formChecked, setFormChecked] = useState(true);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();

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
    setFormChecked(e.target.checked)

  }

  const [active, setActive] = useState(TOGGLE);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const updatedMenu = () => {
    response[props.index].menuName = name;
    response[props.index].menuDescription = description;
    response[props.index].menuNote = note;
    response[props.index].menuStatus = active;
    setResponse([...response]);
    alert("Menu Updated Successfully");
  };

  let menuData = {
    id: getTimestampInSeconds(),
    menuName: name,
    menuDescription: description,
    menuNote: note,
    menuStatus: active,
    section: [],
  };

  // function myfun(){

  // }

  // if (value == "2") {
  //   document.getElementById("always").setAttribute("isDisabled");
  // }

  const menuCreate = () => {
    response.push(menuData);
    alert("Menu Created");
    setResponse([...response]);
    //console.log(response, "create menu");
  };

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

        <DrawerHeader>{response[props?.index]?.menuName}</DrawerHeader>

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
                  <FormLabel fontWeight="400">Display the section</FormLabel>

                  <SwitchComponent
                    id="switch1"
                    checked={active}
                    onChange={(e) => setActive(e.target.checked)}
                  />
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
                <RadioGroup onChange={setValue} value={value}>
                  <Radio value="1" id="always">
                    Always
                  </Radio>
                  <Text ml={6} fontSize="13px" color="gray">
                    The menu will always be shown
                  </Text>

                  <Radio value="2" mt={3}>
                    Specific Dates & Times
                  </Radio>

                  <Text ml={6} fontSize="13px" color="gray" mt={3}>
                    The menu will be visible between specific dates.
                  </Text>
                  <Text ml={6} fontSize="14px" color="gray">
                    Current Time : {day} {date_time}
                  </Text>

                  {value == 2 ? (
                    <Box>
                      <Row>
                        <Col>
                          <FormControl mt={5}>
                            <FormLabel fontWeight="400">Start Date</FormLabel>
                            <input id='date' type='date' onChange={(e) => setStartDate(e.target.value)} ></input>
                          </FormControl>
                        </Col>
                        <Col>
                          <FormControl mt={5}>
                            <FormLabel fontWeight="400">End Date</FormLabel>
                            <input id='date-input' type='date' onChange={(e) => setEndDate(e.target.value)}></input>
                          </FormControl>
                        </Col>
                      </Row>

                      <Box mt={3}>
                        <Form.Check type="checkbox" label="All Day" onChange={(e) => handleChange(e)} checked={formChecked} />
                      </Box>
                      {formChecked == false ? (
                        <Box>
                          <Row>
                            <Col>
                              <FormControl mt={5}>
                                <FormLabel fontWeight="400">Start Time</FormLabel>
                                <input type='time' onChange={(e) => setStartTime(e.target.value)} ></input>
                              </FormControl>
                            </Col>
                            <Col>
                              <FormControl mt={5}>
                                <FormLabel fontWeight="400">End Time</FormLabel>
                                <input type='time' onChange={(e) => setEndDate(e.target.value)}></input>
                              </FormControl>
                            </Col>
                          </Row>
                        </Box>

                      ) : (null)}

                    </Box>) : (
                    null
                  )}



                </RadioGroup>
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
                menuCreate();
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
    </Drawer >
  );
};

export default SettingDrawer;
