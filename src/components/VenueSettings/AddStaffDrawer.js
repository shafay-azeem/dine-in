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

const AddStaffDrawer = (props) => {
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
                    <Input pr="1.5rem" borderRadius="6" />
                    <InputRightElement width="4.5rem">
                      <Tooltip label="Generate" placement="top">
                        <Button h="1.75rem" size="sm">
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
