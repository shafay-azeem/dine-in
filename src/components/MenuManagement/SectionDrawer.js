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
import { BsFillGridFill, BsListTask } from "react-icons/bs";

const SectionDrawer = (props) => {

  const [checkedItems, setCheckedItems] = React.useState(false)
  console.log(checkedItems)
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
                    <Input type="text" />
                  </FormControl>

                  <FormControl mt={3}>
                    <FormLabel fontWeight="400">Description</FormLabel>
                    <Textarea placeholder="Here is a sample placeholder" />
                  </FormControl>

                  <FormControl mt={3}>
                    <FormLabel fontWeight="400">Note</FormLabel>
                    <Input type="text" />
                  </FormControl>

                  <FormControl mt={3}>
                    <FormLabel fontWeight="400">Display the section</FormLabel>
                    <Switch />
                  </FormControl>

                  <FormControl mt={3}>
                    <Checkbox isChecked={checkedItems}
                      onChange={(e) => setCheckedItems(e.target.checked)}>Use as a sub-section</Checkbox>

                    {checkedItems ? (<Input type="text" mt={2} ></Input>) : (
                      <Input isDisabled type="text" mt={2} bg="grey"></Input>
                    )}

                  </FormControl>
                </TabPanel>
                <TabPanel>
                  <FormControl>
                    <FormLabel fontWeight="400">Labels</FormLabel>
                    <Select>
                      <option>New</option>
                      <option>Signature</option>
                    </Select>
                  </FormControl>

                  <FormControl mt={5}>
                    <FormLabel fontWeight="400">Alphabetical Order</FormLabel>
                    <Switch />
                  </FormControl>

                  <RadioGroup mt={5}>
                    <Stack direction="row">
                      <Radio value="1">List</Radio>
                      <Radio value="2">Grid</Radio>
                    </Stack>
                  </RadioGroup>

                  <FormControl mt={5}>
                    <FormLabel fontWeight="400">Number of Columns</FormLabel>
                    <Select>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </Select>
                  </FormControl>

                  <FormControl mt={5}>
                    <FormLabel fontWeight="400">Hide grid titles</FormLabel>
                    <Switch />
                  </FormControl>
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
