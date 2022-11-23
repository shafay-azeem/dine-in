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

const SectionDrawer = (props) => {
  const [checkedItems, setCheckedItems] = React.useState(false);

  const [value, setValue] = React.useState("1");
  const [valuetrue, setValueTrue] = React.useState();
  const { response, setResponse } = MenuState();
  const [name, setName] = useState(
    response[props.menu_index].section[props?.section_index]?.sectionName
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
  const [close, setClose] = useState(false);

  const [checked, setChecked] = useState(false)

  // function enabelDisable() {
  //   if (value === "1") {
  //     setValueTrue(true);
  //   } else {
  //     setValueTrue(false);
  //   }
  // }
  console.log(checked, "============")


  function getTimestampInSeconds() {
    return Math.floor(Date.now() / 1000);
  }

  let sectionData = {
    sectionId: getTimestampInSeconds(),
    sectionName: name,
    sectionDescription: description,
    sectionNote: note,
    sectionStatus: checked,
    item: [],
  };

  const testfunc = () => {
    // var section = []
    // section.push(sectionData)
    // // console.log(response, 'rrrr')
    response[props.menu_index].section.push(sectionData);
    setResponse([...response]);
    // (...response)

    // var updatedList = [...response[props.menu_index].section.push(sectionData)];
    // response.splice(1, 0, section);
    // setResponse([...response[props.menu_index].slice(0, props.menu_index), section, ...response[props.menu_index].slice(props.menu_index)]);
    // console.log(response, 'section')
    // // // response[props?.menu_index]?.push(section);
    // // console.log(response, "response in section drawer")
    alert("data has been added");
  };

  const updatedSection = () => {
    response[props.menu_index].section[props.section_index].sectionName = name;
    response[props.menu_index].section[props.section_index].sectionDescription =
      description;
    response[props.menu_index].section[props.section_index].sectionNote = note;
    setResponse([...response]);
    alert("Section Updated Successfully");
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
                    <Switch checked={checked} onChange={e => setChecked(e.target.checked)} />
                  </FormControl>

                  <FormControl mt={3}>
                    <Checkbox
                      isChecked={checkedItems}
                      onChange={(e) => setCheckedItems(e.target.checked)}
                    >
                      Use as a sub-section
                    </Checkbox>

                    {checkedItems ? (
                      <Input
                        type="text"
                        mt={2}
                        placeholder="Type to search sections"
                        onChange={(e) => setsearchSection(e.target.value)}
                      ></Input>
                    ) : (
                      <Input
                        isDisabled
                        type="text"
                        mt={2}
                        bg="grey.300"
                        placeholder="Type to search sections"
                      ></Input>
                    )}
                  </FormControl>
                </TabPanel>
                <TabPanel>
                  <FormControl>
                    <FormLabel fontWeight="400">Labels</FormLabel>
                    <Select onChange={(e) => setSelect(e.target.value)}>
                      <option value="new">New</option>
                      <option value="signature">Signature</option>
                    </Select>
                  </FormControl>

                  <FormControl mt={5}>
                    <FormLabel fontWeight="400">Alphabetical Order</FormLabel>
                    <Switch />
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
                  updatedSection();
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
