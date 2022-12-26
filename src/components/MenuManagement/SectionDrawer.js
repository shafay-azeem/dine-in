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
  RadioGroup,
  Stack,
  Radio,
  Alert,
  Box,
  Modal,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Center,
  IconButton,
} from "@chakra-ui/react";
import React from "react";
import { useState, useRef } from "react";
import { MenuState } from "../../context/MenuContext";
import SelectSearch from "react-select-search";
import Multiselect from "multiselect-react-dropdown";
import { SwitchComponent } from "@syncfusion/ej2-react-buttons";
import ImagePreviewModal from "./ImagePreviewModal";
import { BsFillTrashFill } from "react-icons/bs";
import { useEffect } from "react";

const SectionDrawer = (props) => {
  let menu_index = props.menu_index;
  let section_index = props?.section_index;
  let subsection_index = props?.subsection_index;

  const [checkedItems, setCheckedItems] = useState(false);
  const [food, setFood] = useState(["New", "Signature"]);
  const [value, setValue] = React.useState("1");
  const [valuetrue, setValueTrue] = React.useState();

  const { response, setResponse } = MenuState();
  const inputElement = useRef();

  const initialState = Number.isInteger(props?.subsection_index)
    ? response[props.menu_index].section[props?.section_index]?.subSection[
        props?.subsection_index
      ]?.sectionName
    : response[props.menu_index].section[props?.section_index]?.sectionName;
  const [name, setName] = useState(initialState);

  const descriptionState = Number.isInteger(props?.subsection_index)
    ? response[props.menu_index].section[props?.section_index]?.subSection[
        props?.subsection_index
      ]?.sectionDescription
    : response[props.menu_index].section[props?.section_index]
        ?.sectionDescription;

  const [description, setDescription] = useState(descriptionState);

  const noteState = Number.isInteger(props?.subsection_index)
    ? response[props.menu_index].section[props?.section_index]?.subSection[
        props?.subsection_index
      ]?.sectionNote
    : response[props.menu_index].section[props?.section_index]?.sectionNote;

  const [note, setNote] = useState(noteState);

  const imageState = Number.isInteger(props?.subsection_index)
    ? response[props.menu_index].section[props?.section_index]?.subSection[
        props?.subsection_index
      ]?.image
    : response[props.menu_index].section[props?.section_index]?.image;

  let initialArrayFaizy = [...response[props.menu_index]?.section];
  let initalArrayShafay = response[props.menu_index]?.section;
  let initalArrayfaiz = initialArrayFaizy?.splice(props?.section_index, 1);

  const initalArrayDecider = Number.isInteger(props?.section_index)
    ? initialArrayFaizy
    : initalArrayShafay;
  const [arrayDecider, setArrayDecider] = useState(initalArrayDecider);

  const [image, setImage] = useState(imageState);

  const [searchSection, setsearchSection] = useState();

  const labelState = Number.isInteger(props?.subsection_index)
    ? response[props.menu_index].section[props?.section_index]?.subSection[
        props?.subsection_index
      ]?.sectionLabel
    : response[props.menu_index].section[props?.section_index]?.sectionLabel;

  const [select, setSelect] = useState(labelState);
  const [pass, setPass] = useState(false);
  const [close, setClose] = useState();

  let x =
    response[props.menu_index].section[props?.section_index]?.subSection[
      props?.subsection_index
    ];
  let y = response[props.menu_index].section[props?.section_index];
  const conditonMade = Number.isInteger(props?.subsection_index)
    ? "subSection"
    : "section";
  let TOGGLE;

  if (conditonMade == "subSection") {
    if (typeof x?.sectionStatus === "undefined") {
      TOGGLE = false;
    } else if (x?.sectionStatus === false) {
      TOGGLE = false;
    } else {
      TOGGLE = true;
    }
  } else {
    if (typeof y?.sectionStatus === "undefined") {
      TOGGLE = false;
    } else if (y?.sectionStatus === false) {
      TOGGLE = false;
    } else {
      TOGGLE = true;
    }
  }

  const [checked, setChecked] = useState(TOGGLE);

  const [alphabetical, setalphabetical] = useState(false);
  const [val, setVal] = useState();

  const {
    isOpen: ModalOpen,
    onOpen: ModalOnOpen,
    onClose: ModalOnClose,
  } = useDisclosure();
  // function enabelDisable() {
  //   if (value === "1") {
  //     setValueTrue(true);
  //   } else {
  //     setValueTrue(false);
  //   }
  // }
  const pictureCapture = (event) => {
    let value = URL.createObjectURL(event.target.files[0]);
    setImage(value);
  };

  function getTimestampInSeconds() {
    return Math.floor(Date.now() / 1000);
  }

  let sectionData = {
    sectionId: getTimestampInSeconds(),
    sectionName: name,
    sectionDescription: description,
    sectionNote: note,
    sectionLabel: select,
    sectionStatus: checked,
    image: image,
    item: [],
    subSection: [],
  };

  const [modalShow, setModalShow] = useState(false);

  const testfunc = () => {
    if (checkedItems === true) {
      let initialArray = [...response[props.menu_index].section];
      for (var i = 0; i < initialArray.length; i++) {
        if (initialArray[i].sectionName == val) {
          response[props.menu_index].section[i].subSection.push(sectionData);
          setResponse([...response]);
          alert("SubSection has been has been added");
        }
      }
    } else {
      response[props.menu_index].section.push(sectionData);
      let initialArray = [...response[props.menu_index].section];
      function compare(a, b) {
        if (a.sectionName < b.sectionName) {
          return -1;
        }
        if (a.sectionName > b.sectionName) {
          return 1;
        }
        return 0;
      }
      response[props.menu_index].section.sort(compare);

      setResponse([...response]);
      alert("Section Created Successfully");
    }
  };

  const updatedSection = (x, y) => {
    if (x == undefined && checkedItems == false) {
      response[props.menu_index].section[props.section_index].sectionName =
        name;
      response[props.menu_index].section[
        props.section_index
      ].sectionDescription = description;
      response[props.menu_index].section[props.section_index].sectionNote =
        note;
      response[props.menu_index].section[props.section_index].sectionLabel =
        select;

      response[props.menu_index].section[props.section_index].sectionStatus =
        checked;

      response[props.menu_index].section[props.section_index].image = image;

      function compare(a, b) {
        if (a.sectionName < b.sectionName) {
          return -1;
        }
        if (a.sectionName > b.sectionName) {
          return 1;
        }
        return 0;
      }
      response[props.menu_index].section.sort(compare);

      setResponse([...response]);
      alert("Section Updated Successfully");
    } else if (x > -1) {
      response[props.menu_index].section[props.section_index].subSection[
        props.subsection_index
      ].sectionName = name;

      response[props.menu_index].section[props.section_index].subSection[
        props.subsection_index
      ].sectionDescription = description;

      response[props.menu_index].section[props.section_index].subSection[
        props.subsection_index
      ].sectionNote = note;

      response[props.menu_index].section[props.section_index].subSection[
        props.subsection_index
      ].sectionLabel = select;

      response[props.menu_index].section[props.section_index].subSection[
        props.subsection_index
      ].sectionStatus = checked;

      response[props.menu_index].section[props.section_index].subSection[
        props.subsection_index
      ].image = image;

      setResponse([...response]);
      alert("SubSection Updated Successfully");
    } else {
      let initialArray = [...response[props.menu_index].section];
      for (var i = 0; i < initialArray.length; i++) {
        if (initialArray[i].sectionName == val) {
          response[props.menu_index].section[i].subSection.push(sectionData);
          response[props.menu_index]?.section.splice(y, 1);
          setResponse([...response]);
          alert("SubSection has been has been updated");
        }
      }
    }
  };

  const removalMultiSelect = (event) => {
    setSelect(event);
  };

  const selectionMultiSelect = (event) => {
    setSelect(event);
  };

  const handleAlphabetically = (event) => {};

  function deleteimg() {
    setImage(null);
    document.getElementById("img").value = "";
  }
  return (
    <>
      <Drawer
        isOpen={props.isOpen}
        placement="right"
        onClose={props.onClose}
        size="md"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Add New Section</DrawerHeader>

          <DrawerBody>
            <Tabs>
              <TabList>
                <Tab>Overview</Tab>
                <Tab>Detail</Tab>
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
                    <FormLabel fontWeight="400">Note</FormLabel>
                    <Input
                      type="text"
                      onChange={(e) => setNote(e.target.value)}
                      value={note}
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

                  {/* <FormControl mt={3}>
                    <FormLabel fontWeight="400">Display the section</FormLabel>
                    <Switch
                      checked={checked}
                      onChange={(e) => setChecked(e.target.checked)}
                    />
                  </FormControl> */}

                  <FormControl mt={3}>
                    <FormLabel fontWeight="400">Display the section</FormLabel>
                    <SwitchComponent
                      id="switch1"
                      checked={checked}
                      onChange={(e) => setChecked(e.target.checked)}
                    />
                  </FormControl>

                  {arrayDecider.length > 0 &&
                  props?.subsection_index == undefined ? (
                    <FormControl>
                      <Checkbox
                        isChecked={checkedItems}
                        onChange={(e) => setCheckedItems(e.target.checked)}
                      >
                        Use as a sub-section
                      </Checkbox>

                      {checkedItems ? (
                        <Select
                          placeholder="Select option"
                          onChange={(e) => setVal(e.target.value)}
                        >
                          {arrayDecider?.map((x, index) => {
                            return (
                              <option value={x.sectionName}>
                                {x.sectionName}
                              </option>
                            );
                          })}
                        </Select>
                      ) : (
                        <Select placeholder="Select option">
                          {arrayDecider?.map((x, index) => {
                            return (
                              <option value={x.sectionName}>
                                {x.sectionName}
                              </option>
                            );
                          })}
                        </Select>
                      )}
                    </FormControl>
                  ) : (
                    <FormControl mt={3}>
                      <Checkbox isDisabled>Use as a sub-section</Checkbox>
                      <Input
                        isDisabled
                        type="text"
                        mt={2}
                        bg="grey.300"
                        placeholder="Type to search sections"
                      ></Input>
                    </FormControl>
                  )}
                </TabPanel>
                <TabPanel>
                  <FormControl>
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

                  <FormControl mt={5}>
                    <FormLabel fontWeight="400">Alphabetical Order</FormLabel>
                    <Switch
                      checked={alphabetical}
                      onChange={(e) => handleAlphabetically(e.target.checked)}
                    />
                  </FormControl>

                  <RadioGroup mt={5} onChange={setValue} value={value}>
                    <Stack direction="row">
                      {/* <Radio value="1" onChange={enabelDisable}>
                        List
                      </Radio>
                      <Radio value="2" onChange={enabelDisable}>
                        Grid
                      </Radio> */}
                    </Stack>

                    {valuetrue ? (
                      <FormControl mt={5}>
                        <FormLabel fontWeight="400">
                          Number of Columns
                        </FormLabel>
                        <Select>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </Select>
                      </FormControl>
                    ) : (
                      <FormControl mt={5}>
                        <FormLabel fontWeight="400">
                          Number of Columns
                        </FormLabel>
                        <Select isDisabled>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </Select>
                      </FormControl>
                    )}
                  </RadioGroup>

                  {valuetrue ? (
                    <FormControl mt={5}>
                      <FormLabel fontWeight="400">Hide grid titles</FormLabel>
                      <Switch />
                    </FormControl>
                  ) : (
                    <FormControl mt={5}>
                      <FormLabel fontWeight="400">Hide grid titles</FormLabel>
                      <Switch isDisabled />
                    </FormControl>
                  )}
                </TabPanel>
              </TabPanels>
            </Tabs>
          </DrawerBody>

          <DrawerFooter>
            <Checkbox defaultChecked mr="28%">
              Save and add more
            </Checkbox>
            <Button variant="outline" mr={3} onClick={props.onClose}>
              Cancel
            </Button>

            {Number.isInteger(props?.section_index) ? (
              <Button
                colorScheme="blue"
                onClick={() => {
                  updatedSection(props?.subsection_index, props?.section_index);
                }}
              >
                Update
              </Button>
            ) : (
              <Button
                colorScheme="blue"
                onClick={() => {
                  testfunc();
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

export default SectionDrawer;
