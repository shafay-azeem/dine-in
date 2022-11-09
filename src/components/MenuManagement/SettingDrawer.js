import React from "react";
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
} from "@chakra-ui/react";
import CustomButton from "../../CustomElements/CustomButton";

const SettingDrawer = (props) => {
  const [value, setValue] = React.useState("1");

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
        <DrawerHeader>Your Menu Name</DrawerHeader>

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
                  <Input type="text" />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel fontWeight="400">Description</FormLabel>
                  <Textarea />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel fontWeight="400">Note</FormLabel>
                  <Input type="text" placeholder="E.g: 20% VAT included" />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel fontWeight="400">Display the section</FormLabel>
                  <Switch />
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
                  <Radio value="1">Always</Radio>
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
                    Current Time: Wednesday, November 9th 2022, 01:38:25
                  </Text>

                  <FormControl mt={5}>
                    <FormLabel fontWeight="400">Start Date</FormLabel>
                    <Input
                      placeholder="Select Date and Time"
                      size="sm"
                      type="date"
                    />
                  </FormControl>

                  <FormControl mt={5}>
                    <FormLabel fontWeight="400">End Date</FormLabel>
                    <Input
                      placeholder="Select Date and Time"
                      size="sm"
                      type="date"
                    />
                  </FormControl>

                  <Radio value="3" mt={5}>
                    All Day
                  </Radio>

                  <FormControl mt={5}>
                    <FormLabel fontWeight="400">Start Date</FormLabel>
                    <Input
                      placeholder="Select Date and Time"
                      size="sm"
                      type="date"
                    />
                  </FormControl>

                  <FormControl mt={5}>
                    <FormLabel fontWeight="400">End Date</FormLabel>
                    <Input
                      placeholder="Select Date and Time"
                      size="sm"
                      type="date"
                    />
                  </FormControl>

                  <Radio value="4" mt={5} mb={4}>
                    Periodic
                  </Radio>

                  <SimpleGrid columns={3} spacing={10} ml={5}>
                    <Box>
                      <Radio mt={1}>Sunday</Radio>
                    </Box>

                    <Box>
                      <FormControl mt={1}>
                        <FormLabel fontWeight="400">Start Time</FormLabel>
                        <Input
                          placeholder="Select Date and Time"
                          size="sm"
                          type="time"
                        />
                      </FormControl>
                    </Box>

                    <Box>
                      <FormControl mt={1}>
                        <FormLabel fontWeight="400">End Time</FormLabel>
                        <Input
                          placeholder="Select Date and Time"
                          size="sm"
                          type="time"
                        />
                      </FormControl>
                    </Box>

                    <Box>
                      <Radio mt={1}>Monday</Radio>
                    </Box>

                    <Box>
                      <FormControl mt={1}>
                        <FormLabel fontWeight="400">Start Time</FormLabel>
                        <Input
                          placeholder="Select Date and Time"
                          size="sm"
                          type="time"
                        />
                      </FormControl>
                    </Box>
                    <Box>
                      <FormControl mt={1}>
                        <FormLabel fontWeight="400">End Time</FormLabel>
                        <Input
                          placeholder="Select Date and Time"
                          size="sm"
                          type="time"
                        />
                      </FormControl>
                    </Box>

                    <Box>
                      <Radio mt={1}>Tuesday</Radio>
                    </Box>
                    <Box>
                      <FormControl mt={1}>
                        <FormLabel fontWeight="400">Start Time</FormLabel>
                        <Input
                          placeholder="Select Date and Time"
                          size="sm"
                          type="time"
                        />
                      </FormControl>
                    </Box>
                    <Box>
                      <FormControl mt={1}>
                        <FormLabel fontWeight="400">End Time</FormLabel>
                        <Input
                          placeholder="Select Date and Time"
                          size="sm"
                          type="time"
                        />
                      </FormControl>
                    </Box>

                    <Box>
                      <Radio mt={1}>Wednesday</Radio>
                    </Box>

                    <Box>
                      <FormControl mt={1}>
                        <FormLabel fontWeight="400">Start Time</FormLabel>
                        <Input
                          placeholder="Select Date and Time"
                          size="sm"
                          type="time"
                        />
                      </FormControl>
                    </Box>
                    <Box>
                      <FormControl mt={1}>
                        <FormLabel fontWeight="400">End Time</FormLabel>
                        <Input
                          placeholder="Select Date and Time"
                          size="sm"
                          type="time"
                        />
                      </FormControl>
                    </Box>

                    <Box>
                      <Radio mt={1}>Thursday</Radio>
                    </Box>

                    <Box>
                      <FormControl mt={1}>
                        <FormLabel fontWeight="400">Start Time</FormLabel>
                        <Input
                          placeholder="Select Date and Time"
                          size="sm"
                          type="time"
                        />
                      </FormControl>
                    </Box>
                    <Box>
                      <FormControl mt={1}>
                        <FormLabel fontWeight="400">End Time</FormLabel>
                        <Input
                          placeholder="Select Date and Time"
                          size="sm"
                          type="time"
                        />
                      </FormControl>
                    </Box>

                    <Box>
                      <Radio mt={1}>Friday</Radio>
                    </Box>

                    <Box>
                      <FormControl mt={1}>
                        <FormLabel fontWeight="400">Start Time</FormLabel>
                        <Input
                          placeholder="Select Date and Time"
                          size="sm"
                          type="time"
                        />
                      </FormControl>
                    </Box>
                    <Box>
                      <FormControl mt={1}>
                        <FormLabel fontWeight="400">End Time</FormLabel>
                        <Input
                          placeholder="Select Date and Time"
                          size="sm"
                          type="time"
                        />
                      </FormControl>
                    </Box>

                    <Box>
                      <Radio mt={1}>Saturday</Radio>
                    </Box>

                    <Box>
                      <FormControl mt={1}>
                        <FormLabel fontWeight="400">Start Time</FormLabel>
                        <Input
                          placeholder="Select Date and Time"
                          size="sm"
                          type="time"
                        />
                      </FormControl>
                    </Box>
                    <Box>
                      <FormControl mt={1}>
                        <FormLabel fontWeight="400">End Time</FormLabel>
                        <Input
                          placeholder="Select Date and Time"
                          size="sm"
                          type="time"
                        />
                      </FormControl>
                    </Box>
                  </SimpleGrid>
                </RadioGroup>
              </TabPanel>
              {/* Availability */}
            </TabPanels>
          </Tabs>
        </DrawerBody>

        <DrawerFooter>
          <CustomButton
            click={props.onClose}
            btnText={"Cancel"}
            variant={"outline"}
            mr={3}
            size={"sm"}
          />
          <CustomButton btnText={"Save"} mr={3} size={"sm"} />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default SettingDrawer;
