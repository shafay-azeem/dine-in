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
} from "@chakra-ui/react";
import { faXRay } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { MenuState } from "../../context/MenuContext";
import CustomButton from "../../CustomElements/CustomButton";
import Multiselect from "multiselect-react-dropdown";

const ItemDrawer = (props) => {
  console.log(props.menu_index, "menu----------");
  console.log(props?.section_index, "section---------");
  console.log(props?.item_index, "item----------");
  console.log(props?.ItemInMenu, "------------itemInMenu---------");

  const { response, setResponse } = MenuState();
  const forwardState = Number.isInteger(props?.subsection_index)
    ? response[props.menu_index].section[props?.section_index]?.subSection[
      props?.subsection_index
    ]?.sectionName
    : response[props.menu_index].section[props?.section_index]?.item[
      props?.item_index
    ]?.itemName;
  const initialState = props.subsection_push ? "" : forwardState;

  const [price, setPrice] = useState([]);
  const [rrr, setRrr] = useState([]);

  const [modifiers, setModifiers] = useState([]);
  const [name, setName] = useState(initialState);
  const [description, setDescription] = useState(
    response[props.menu_index].section[props?.section_index]?.item[
      props?.item_index
    ]?.itemDescription
  );
  const [select, setSelect] = useState(
    response[props.menu_index].section[props?.section_index]?.item[
      props?.item_index
    ]?.itemLabel
  );

  const [time, setTime] = useState(
    response[props.menu_index].section[props?.section_index]?.item[
      props?.item_index
    ]?.itemPrepTime
  );
  const [calories, setCalories] = useState(
    response[props.menu_index].section[props?.section_index]?.item[
      props?.item_index
    ]?.itemCalories
  );

  const [itemprice, setItemPrice] = useState(
    response[props.menu_index].section[props?.section_index]?.item[
      props?.item_index
    ]?.itemPrice
  );

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
  const [warningState, setWarningState] = useState(
    response[props.menu_index].section[props?.section_index]?.item[
      props?.item_index
    ]?.itemWarning
  );
  const [checked, setChecked] = useState(false);
  const [sold, setSold] = useState(false);

  function getTimestampInSeconds() {
    return Math.floor(Date.now() / 1000);
  }
  let itemData = {
    itemId: getTimestampInSeconds(),
    itemName: name,
    itemDescription: description,
    active: checked,
    itemLabel: select,
    itemWarning: warningState,
    itemPrepTime: time,
    itemPrice: itemprice,
    itemCalories: calories,
    itemTag: sold,
  };

  const updateItem = (x) => {
    if (x == null) {
      response[props.menu_index].itemMenu[props.item_index].itemName = name;
      setResponse([...response]);
      alert("Item with out section Updated Successfully");
    } else {
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
      ].itemLabel = select;
      response[props.menu_index].section[props.section_index].item[
        props.item_index
      ].itemWarning = warningState;
      response[props.menu_index].section[props.section_index].item[
        props.item_index
      ].itemPrice = itemprice;
      response[props.menu_index].section[props.section_index].item[
        props.item_index
      ].itemCalories = calories;
      response[props.menu_index].section[props.section_index].item[
        props.item_index
      ].itemTag = sold;

      setResponse([...response]);
      alert("Item Updated Successfully");
    }
  };

  const selectionMultiSelect = (event) => {
    setSelect(event);
    console.log(select, "select event");
  };

  const selectionMultiSelectwarning = (event) => {
    setWarningState(event);
  };

  const testfunc = (x) => {
    console.log(x, "conditonal parameter");

    if (x === true) {
      response[props.menu_index].section[props.section_index].subSection[props.subsection_index].item.push(itemData);
      alert("Single Push On basis Of Conditional Parameters");
      console.log(response, 'orig')
      console.log(response[props.menu_index].section[props.section_index].subSection, 'subsec');
    } else {
      response[props.menu_index].section[props.section_index].item.push(
        itemData
      );
      alert("data has been added");
    }
  };
  // console.log(caloriesConcat, "caloriesConcat", priceConcat, "setPriceConcat", "-------------", size, "soze")

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

  console.log(size, "+_+_+_+_+_+_+_+_+_+");
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
                    <Switch
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
                      <FormLabel fontWeight="400">Calories</FormLabel>
                      <Input
                        placeholder="Calories"
                        borderRadius={6}
                        width="160px"
                        mr={4}
                        value={calories}
                        onChange={(e) => setCalories(e.target.value)}
                      />
                    </HStack>
                  </FormControl>

                  <FormControl mt={3}>
                    <FormLabel fontWeight="400">Mark as Sold Out</FormLabel>
                    <Switch
                      checked={sold}
                      onChange={(e) => setSold(e.target.checked)}
                    />
                  </FormControl>

                  <FormControl mt={3}>
                    <FormLabel fontWeight="400">Section</FormLabel>
                    <Select></Select>
                  </FormControl>

                  <FormControl mt={3}>
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

                  <FormControl mt={3}>
                    <FormLabel fontWeight="400">Ingredient Warnings</FormLabel>
                    <Multiselect
                      isObject={false}
                      value={warningState}
                      onRemove={(event) => {
                        console.log(event);
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
                  {/* <CustomButton
                    click={addPriceOption}
                    btnText={"Add Price Option"}
                    variant={"outline"}
                    leftIcon={<BsPlusLg />}
                    mt={3}
                    size={"sm"}
                  /> */}
                  <Button onClick={() => addPriceOption()}>
                    Add Price Option
                  </Button>
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
