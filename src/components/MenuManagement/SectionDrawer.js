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
  HStack,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { BsFillGridFill, BsListTask } from "react-icons/bs";

const SectionDrawer = (props) => {
  const [checkedItems, setCheckedItems] = React.useState(false);

  const [value, setValue] = React.useState("1");
  const [valuetrue, setValueTrue] = React.useState();
  const [name, setName] = useState()


  function enabelDisable() {
    if (value === "1") {
      setValueTrue(true);
    } else {
      setValueTrue(false);
    }
  }
  const [menu, setMenu] = useState([
    {
      id: 0,
      menuId: "01",
      menuName: "menu one",
      menuDescription: "i am menu",
      discountNote: "10%",
      createdDate: "10/11/2022",
      createdTime: "12:00",
      endDate: "11/11/2022",
      endTime: "12:00",
      sectionActive: false,

      section: [
        {
          sectionId: 101,
          sectionName: "Pasta",
          sectionDescription: "i am section",
          label: ["New", "Signature"],
          active: false,
          subSection: false,
          itemActive: false,
          item: [
            {
              itemId: 201,
              itemName: "Pasta",
              itemDescription: "i am section",
              label: ["New", "Signature"],
              itemPrice: [
                { size: "large", price: 2.0, calories: 356 },
                { size: "medium", price: 4.0, calories: 315 },
                { size: "small", price: 6.0, calories: 215 },
              ],
              calories: 355,
              ingredient: ["milk", "cheese"],
              recommendedItems: ["tomoto", "potato"],
              preparationTime: 20,
            },
          ],
        },
      ],
    },
  ]);

  function handleChange(event) {
    setName(event.target.value);
  }


  let data = {
    id: 0,
    menuId: "01",
    menuName: name,
    menuDescription: "i am menu",
    discountNote: "10%",
    createdDate: "10/11/2022",
    createdTime: "12:00",
    endDate: "11/11/2022",
    endTime: "12:00",
    sectionActive: false,

    section: [
      {
        sectionId: 101,
        sectionName: "Pasta",
        sectionDescription: "i am section",
        label: ["New", "Signature"],
        active: false,
        subSection: false,
        itemActive: false,
        item: [
          {
            itemId: 201,
            itemName: "Pasta",
            itemDescription: "i am section",
            label: ["New", "Signature"],
            itemPrice: [
              { size: "large", price: 2.0, calories: 356 },
              { size: "medium", price: 4.0, calories: 315 },
              { size: "small", price: 6.0, calories: 215 },
            ],
            calories: 355,
            ingredient: ["milk", "cheese"],
            recommendedItems: ["tomoto", "potato"],
            preparationTime: 20,
          },
        ],
      },
    ],
  }


  console.log(data.menuName, 'menu')

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
                    <Input type="text" onChange={(e) => setName(e.target.value)} />
                  </FormControl>

                  <FormControl mt={3}>
                    <FormLabel fontWeight="400">Description</FormLabel>
                    <Textarea placeholder="Here is a sample placeholder" onChange={(e) => setDescription(e.target.value)} />
                  </FormControl>

                  <FormControl mt={3}>
                    <FormLabel fontWeight="400">Note</FormLabel>
                    <Input type="text" onChange={(e) => setNote(e.target.value)} />
                  </FormControl>

                  <FormControl mt={3}>
                    <FormLabel fontWeight="400">Display the section</FormLabel>
                    <Switch onChange={(e) => setSwitch(e.target.value)} />
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
                    <Select onChange={(e) => setSelect(e.target.value)} >
                      <option value="new">New</option>
                      <option value="signature" >Signature</option>
                    </Select>
                  </FormControl>

                  <FormControl mt={5}>
                    <FormLabel fontWeight="400">Alphabetical Order</FormLabel>
                    <Switch />
                  </FormControl>

                  <RadioGroup mt={5} onChange={setValue} value={value}>
                    <Stack direction="row">
                      <Radio value="1" onChange={enabelDisable}>
                        List
                      </Radio>
                      <Radio value="2" onChange={enabelDisable}>
                        Grid
                      </Radio>
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
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SectionDrawer;
