import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Stack,
  Tooltip,
} from "@chakra-ui/react";
import { AiTwotoneBulb } from "react-icons/ai";
import React from "react";
import { useState } from "react";

const AddStaffDrawer = (props) => {
  const [milliseconds, setMilliseconds] = useState(0);
  // const [tempDate, setTempDate] = useState("");
  var tempDate;
  function generateNum() {
    console.log(milliseconds);
    setMilliseconds(new Date().getTime());
    tempDate = milliseconds.toString().split("");
    console.log(tempDate, "tt");
    return tempDate;
  }

  const epochlengthconverter = () => {
    tempDate = milliseconds.toString().split("");
    return ` ${tempDate[0]}${tempDate[1]}${tempDate[8]}${tempDate[9]}${tempDate[10]}${tempDate[3]}${tempDate[6]}`;
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
          <DrawerHeader borderBottomWidth="1px">Add Staff Member</DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <Box m={6}>
                <FormControl mt={5}>
                  <FormLabel fontWeight="400">ID</FormLabel>
                  <Input placeholder="ID" size="md" borderRadius="8px" />
                </FormControl>

                <FormControl mt={5}>
                  <FormLabel fontWeight="400">First Name</FormLabel>
                  <Input
                    placeholder="First Name"
                    size="md"
                    borderRadius="8px"
                  />
                </FormControl>

                <FormControl mt={5}>
                  <FormLabel fontWeight="400">Last Name</FormLabel>
                  <Input placeholder="Last Name" size="md" borderRadius="8px" />
                </FormControl>

                <FormControl mt={5}>
                  <FormLabel fontWeight="400">Pincode</FormLabel>
                  <InputGroup>
                    <Input pr="1.5rem" borderRadius="6" value={tempDate} />
                    <InputRightElement width="4.5rem">
                      <Tooltip label="Generate" placement="top">
                        <Button h="1.75rem" size="sm" onClick={generateNum}>
                          <AiTwotoneBulb />
                        </Button>
                      </Tooltip>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>

                <FormControl mt={5}>
                  <FormLabel fontWeight="400">Check Name</FormLabel>
                  <Input
                    placeholder="Check Name"
                    size="md"
                    borderRadius="8px"
                  />
                </FormControl>

                <FormControl mt={5}>
                  <FormLabel fontWeight="400">Status</FormLabel>
                  <Select size="md" borderRadius="8px">
                    <option>Active</option>
                    <option>Deactive</option>
                  </Select>
                </FormControl>
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={props.onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Create Tables</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default AddStaffDrawer;
