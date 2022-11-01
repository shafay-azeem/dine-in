import { PhoneIcon } from "@chakra-ui/icons";
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
  InputGroup,
  InputLeftElement,
  InputLeftAddon,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsFillPersonPlusFill, BsPlusLg, BsSearch } from "react-icons/bs";

const ItemDrawer = (props) => {
  const [price, setPrice] = useState([]);

  const addPriceOption = (event) => {
    setPrice(
      price.concat(
        <HStack m={5}>
          <FormControl>
            <FormLabel fontWeight="400">Name</FormLabel>
            <Input borderRadius="8px" placeholder="Name" />
          </FormControl>
          ,
          <FormControl mt={3}>
            <FormLabel fontWeight="400">Price</FormLabel>
            <InputGroup>
              <InputLeftAddon children="$" />
              <Input type="number" placeholder="0" />
            </InputGroup>
          </FormControl>
          ,
          <FormControl mt={3}>
            <FormLabel fontWeight="400">Calories</FormLabel>
            <InputGroup>
              <InputLeftAddon children="cal" />
              <Input type="number" placeholder="0" />
            </InputGroup>
          </FormControl>
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
                    <Input type="text" />
                  </FormControl>

                  <FormControl mt={3}>
                    <FormLabel fontWeight="400">Description</FormLabel>
                    <Textarea placeholder="Here is a sample placeholder" />
                  </FormControl>

                  <FormControl mt={3}>
                    <FormLabel fontWeight="400">Display the section</FormLabel>
                    <Switch />
                  </FormControl>

                  <FormControl mt={3}>
                    <FormLabel fontWeight="400">Mark as Sold Out</FormLabel>
                    <Switch />
                  </FormControl>

                  <FormControl mt={3}>
                    <FormLabel fontWeight="400">Section</FormLabel>
                    <Select></Select>
                  </FormControl>

                  <FormControl mt={3}>
                    <FormLabel fontWeight="400">Labels</FormLabel>
                    <Select placeholder="Search Labels">
                      <option>New</option>
                      <option>Signature</option>
                      <option>Special Presentation</option>
                    </Select>
                  </FormControl>

                  <FormControl mt={3}>
                    <FormLabel fontWeight="400">Ingredient Warnings</FormLabel>
                    <Select placeholder="Select ingredient warnings">
                      <option>Alcohol</option>
                      <option>Alcohol Free</option>
                    </Select>
                  </FormControl>

                  <FormControl mt={3}>
                    <FormLabel fontWeight="400">Recommended Items</FormLabel>
                    <Input type="text" placeholder="Type to search items" />
                  </FormControl>

                  <FormControl mt={3}>
                    <FormLabel fontWeight="400">Preparation Time</FormLabel>
                    <InputGroup>
                      <InputLeftAddon children="min(s)" />
                      <Input type="number" placeholder="0" w="30%" />
                    </InputGroup>
                  </FormControl>
                </TabPanel>
                <TabPanel>
                  <Button
                    leftIcon={<BsPlusLg />}
                    colorScheme="teal"
                    variant="outline"
                    size="sm"
                    mt={3}
                    onClick={addPriceOption}
                  >
                    Add Price Option
                  </Button>
                  {price}
                </TabPanel>
              </TabPanels>
            </Tabs>
          </DrawerBody>

          <DrawerFooter>
            <Checkbox defaultChecked mr="46%">
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

export default ItemDrawer;
