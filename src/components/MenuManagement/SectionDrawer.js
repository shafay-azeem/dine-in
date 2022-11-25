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
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { MenuState } from "../../context/MenuContext";
import SelectSearch from "react-select-search";
import Multiselect from "multiselect-react-dropdown";

const SectionDrawer = (props) => {
  let menu_index = props.menu_index;
  let section_index = props?.section_index;
  let subsection_index = props?.subsection_index

  console.log(subsection_index, "subsection_index",)
  const [checkedItems, setCheckedItems] = React.useState(false);
  const [food, setFood] = useState(["New", "Signature"]);
  const [value, setValue] = React.useState("1");
  const [valuetrue, setValueTrue] = React.useState();
  const { response, setResponse } = MenuState();


  const initialState = Number.isInteger(props?.subsection_index)
    ? response[props.menu_index].section[props?.section_index]?.subSection[
      props?.subsection_index
    ]?.sectionName
    : response[props.menu_index].section[props?.section_index]?.sectionName;
  const [name, setName] = useState(
    initialState
  );
  const [description, setDescription] = useState(
    response[props.menu_index].section[props?.section_index]?.sectionDescription
  );
  const [note, setNote] = useState(
    response[props.menu_index].section[props?.section_index]?.sectionNote
  );
  const [searchSection, setsearchSection] = useState();
  const [select, setSelect] = useState();
  const [pass, setPass] = useState(false);
  const [close, setClose] = useState();

  const [checked, setChecked] = useState(false);
  const [alphabetical, setalphabetical] = useState(false);
  const [val, setVal] = useState();

  // function enabelDisable() {
  //   if (value === "1") {
  //     setValueTrue(true);
  //   } else {
  //     setValueTrue(false);
  //   }
  // }

  function getTimestampInSeconds() {
    return Math.floor(Date.now() / 1000);
  }

  let sectionData = {
    sectionId: getTimestampInSeconds(),
    sectionName: name,
    sectionDescription: description,
    sectionNote: note,
    sectionStatus: checked,
    sectionLabel: select,
    item: [],
    subSection: [],
  };

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
      console.log(response);
      alert("data has been added");
    }
  };

  const updatedSection = (x) => {
    if (x == null) {
      response[props.menu_index].section[props.section_index].sectionName = name;
      response[props.menu_index].section[props.section_index].sectionDescription =
        description;
      response[props.menu_index].section[props.section_index].sectionNote = note;
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

    } else {
      response[props.menu_index].section[props.section_index].subSection[
        props.subsection_index
      ].sectionName = name
    }
    setResponse([...response]);
    alert("SubSection Updated Successfully");
  };

  const selectionMultiSelect = (event) => {
    setSelect(event);
    console.log(select, "select event");
  };

  const handleAlphabetically = (event) => {
    console.log(event, "event");
  };

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
                    <FormLabel fontWeight="400">Display the section</FormLabel>
                    <Switch
                      checked={checked}
                      onChange={(e) => setChecked(e.target.checked)}
                    />
                  </FormControl>

                  {response[props.menu_index].section.length > 0 ? (
                    <FormControl mt={3}>
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
                          {response[props.menu_index].section.map(
                            (x, index) => {
                              return (
                                <option value={x.sectionName}>
                                  {x.sectionName}
                                </option>
                              );
                            }
                          )}
                        </Select>
                      ) : (
                        // <Input
                        //   type="text"
                        //   mt={2}
                        //   placeholder="Type to search sections"
                        //   onChange={(e) => setsearchSection(e.target.value)}
                        // ></Input>
                        // <Input
                        //   isDisabled
                        //   type="text"
                        //   mt={2}
                        //   bg="grey.300"
                        //   placeholder="Type to search sections"
                        // ></Input>

                        <Select placeholder="Select option">
                          {response[props.menu_index].section.map(
                            (x, index) => {
                              return (
                                <option value={x.sectionName}>
                                  {x.sectionName}
                                </option>
                              );
                            }
                          )}
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
                        console.log(event);
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
                  updatedSection(props?.subsection_index);
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
