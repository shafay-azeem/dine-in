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
} from "@chakra-ui/react";
import CustomButton from "../../CustomElements/CustomButton";

const SettingDrawer = (props) => {
  return (
    <Drawer
      isOpen={props.isOpen}
      placement="right"
      onClose={props.onClose}
      size="md"
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
                      <Switch />
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
                      <Switch />
                      <FormHelperText>
                        You can change the title position of inner sections /
                        inner items
                      </FormHelperText>
                    </FormControl>
                  </Box>
                </SimpleGrid>
              </TabPanel>
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
