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
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { MenuState } from "../../context/MenuContext";
import CustomButton from "../../CustomElements/CustomButton";

const ItemDrawer = (props) => {
  console.log(props.menu_index, 'menu----------')
  console.log(props?.section_index, 'section---------')
  console.log(props?.item_index, 'item----------')
  console.log(props?.ItemInMenu, '------------itemInMenu---------')
  const { item, setItem, response, setResponse } = MenuState();
  const forwardState = Number.isInteger(props?.section_index) ? response[props.menu_index].section[props?.section_index]?.item[props?.item_index]?.itemName : response[props.menu_index].itemMenu[props?.item_index]?.itemName
  const initialState = props.ItemInMenu ? "" : forwardState


  const [price, setPrice] = useState([]);
  const [modifiers, setModifiers] = useState([]);
  const [name, setName] = useState(
    initialState
  );
  const [description, setDescription] = useState(
    response[props.menu_index].section[props?.section_index]?.item[props?.item_index]?.itemDescription
  );
  const [select, setSelect] = useState();
  const [ingredient, setIngredient] = useState();
  const [time, setTime] = useState();
  const [calories, setCalories] = useState();
  const [recommendedItem, setRecommendedItem] = useState();
  const [priceConcat, setPriceConcat] = useState();
  const [caloriesConcat, setCaloriesConcat] = useState();
  const [size, setSize] = useState();



  function getTimestampInSeconds() {
    return Math.floor(Date.now() / 1000);
  }
  let itemData = {
    itemId: getTimestampInSeconds(),
    itemName: name,
    itemDescription: description,
  };


  const updateItem = (x) => {
    if (x == null) {
      response[props.menu_index].itemMenu[props.item_index].itemName = name;
      // response[props.menu_index].item[props.item_index].itemDescription =
      // description;
      setResponse([...response]);
      alert("Item with out section Updated Successfully");

    } else {
      response[props.menu_index].section[props.section_index].item[props.item_index].itemName = name;
      response[props.menu_index].section[props.section_index].item[props.item_index].itemDescription =
        description;
      setResponse([...response]);
      alert("Item Updated Successfully");

    }

  };

  const testfunc = (x) => {
    console.log(x, 'conditonal parameter')

    if (x === true) {
      response[props.menu_index].itemMenu.push(itemData)
      alert("Single Push On basis Of Conditional Parameters")
      console.log(response[props.menu_index].itemMenu)
    } else {
      response[props.menu_index].section[props.section_index].item.push(itemData)
      alert("data has been added");
    }

  };

  const addPriceOption = (event) => {
    setPrice(
      price.concat(
        <HStack m={5}>
          <FormControl>
            <FormLabel fontWeight="400">Size</FormLabel>
            <Input
              borderRadius="8px"
              placeholder="Size"
              onChange={(e) => setSize(e.target.value)}
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
        </HStack>
      )
    );
  };

  const addModifiersOption = (event) => {
    setModifiers(
      modifiers.concat(
        <HStack m={5}>
          <FormControl>
            <FormLabel fontWeight="400">Modifier Group</FormLabel>
            <Input borderRadius="8px" placeholder="Type to search" />
          </FormControl>
          ,
          <FormControl mt={3}>
            <FormLabel fontWeight="400">Min</FormLabel>
            <Input borderRadius="8px" placeholder="0" type="number" />
          </FormControl>
          ,
          <FormControl mt={3}>
            <FormLabel fontWeight="400">Max</FormLabel>
            <Input borderRadius="8px" placeholder="0" type="number" />
          </FormControl>
          ,<Checkbox defaultChecked>Required</Checkbox>
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
                    <Select
                      placeholder="Search Labels"
                      onChange={(e) => setSelect(e.target.value)}
                    >
                      <option value="new">New</option>
                      <option value="signature">Signature</option>
                    </Select>
                  </FormControl>

                  <FormControl mt={3}>
                    <FormLabel fontWeight="400">Ingredient Warnings</FormLabel>
                    <Select
                      placeholder="Select ingredient warnings"
                      onChange={(e) => setIngredient(e.target.value)}
                    >
                      <option value="Alcohol">Alcohol</option>
                      <option value="Alcohol Free">Alcohol Free</option>
                    </Select>
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
                        onChange={(e) => setTime(e.target.value)}
                      />
                    </InputGroup>
                  </FormControl>
                </TabPanel>
                <TabPanel>
                  <CustomButton
                    click={addPriceOption}
                    btnText={"Add Price Option"}
                    variant={"outline"}
                    leftIcon={<BsPlusLg />}
                    mt={3}
                    size={"sm"}
                  />
                  {price}
                </TabPanel>
                <TabPanel>
                  <CustomButton
                    click={addModifiersOption}
                    btnText={"Add Modifiers Option"}
                    variant={"outline"}
                    leftIcon={<BsPlusLg />}
                    mt={3}
                    size={"sm"}
                  />
                  {modifiers}
                </TabPanel>
                <TabPanel>
                  <FormControl>
                    <FormLabel fontWeight="400">
                      Display the Nutrition Info on the menu
                    </FormLabel>
                    <Switch />
                  </FormControl>

                  <FormControl mt={3}>
                    <FormLabel fontWeight="400">Serving Size</FormLabel>
                    <Input type="text" />
                  </FormControl>

                  <Grid templateColumns="repeat(5, 1fr)" gap={4} mt={3}>
                    <GridItem colSpan={2} h="10">
                      <FormControl mt={3}>
                        <FormLabel fontWeight="400">Calories</FormLabel>
                        <NumberInput>
                          <NumberInputField
                            placeholder="cal"
                            onChange={(e) => setCalories(e.target.value)}
                          />
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
                        <NumberInput>
                          <NumberInputField placeholder="cal" />
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
                      <NumberInput>
                        <NumberInputField placeholder="gr" />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </GridItem>
                    <GridItem h="10">
                      <GridItem>
                        <NumberInput>
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
                      <NumberInput>
                        <NumberInputField placeholder="gr" />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </GridItem>
                    <GridItem h="10">
                      <GridItem>
                        <NumberInput>
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
                      <NumberInput>
                        <NumberInputField placeholder="gr" />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </GridItem>
                    <GridItem h="10">
                      <GridItem>
                        <NumberInput>
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
                      <NumberInput>
                        <NumberInputField placeholder="mg" />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </GridItem>
                    <GridItem h="10">
                      <GridItem>
                        <NumberInput>
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
                      <NumberInput>
                        <NumberInputField placeholder="mg" />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </GridItem>
                    <GridItem h="10">
                      <GridItem>
                        <NumberInput>
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
                      <NumberInput>
                        <NumberInputField placeholder="gr" />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </GridItem>
                    <GridItem h="10">
                      <GridItem>
                        <NumberInput>
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
                      <NumberInput>
                        <NumberInputField placeholder="gr" />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </GridItem>
                    <GridItem h="10">
                      <GridItem>
                        <NumberInput>
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
                      <NumberInput>
                        <NumberInputField placeholder="gr" />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </GridItem>
                    <GridItem h="10">
                      <GridItem>
                        <NumberInput>
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
                      <NumberInput>
                        <NumberInputField placeholder="mg" />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </GridItem>
                    <GridItem h="10">
                      <GridItem>
                        <NumberInput>
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
                      <NumberInput>
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
                      <NumberInput>
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
                      <NumberInput>
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
                      <NumberInput>
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
                  updateItem(props?.section_index);
                }}
              >
                Update
              </Button>
            )

              : (
                <Button
                  colorScheme="blue"
                  onClick={() => {
                    testfunc(props?.ItemInMenu);
                  }}
                >
                  Save
                </Button>

              )

            }
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ItemDrawer;
