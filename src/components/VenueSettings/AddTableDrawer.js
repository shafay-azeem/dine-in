import { AddIcon } from "@chakra-ui/icons";
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
  HStack,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import CustomButton from "../../CustomElements/CustomButton";

const AddTableDrawer = (props) => {
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
          <DrawerHeader borderBottomWidth="1px">Add New Tables</DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <Box m={6}>
                <FormControl mt={5}>
                  <FormLabel>
                    How would you like to create new tables?
                  </FormLabel>
                  <RadioGroup defaultValue="Itachi">
                    <HStack spacing="24px">
                      <Radio value="Automatic Table Names">
                        Automatic Table Names
                      </Radio>
                      <Radio value="Custom Table Names">
                        Custom Table Names
                      </Radio>
                    </HStack>
                  </RadioGroup>
                </FormControl>

                <FormControl mt={5}>
                  <FormLabel fontWeight="400">Label (Suffix):</FormLabel>
                  <Input placeholder="" size="sm" borderRadius="8px" />
                </FormControl>

                <FormControl mt={5}>
                  <FormLabel fontWeight="400">Number of Tables:</FormLabel>
                  <NumberInput min={1} size="sm">
                    <NumberInputField borderRadius="8px" />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>

                <FormControl mt={3}>
                  <FormLabel fontWeight="400">Starting from:</FormLabel>
                  <Input placeholder="1" size="sm" borderRadius="8px" />
                </FormControl>
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={props.onClose}>
              Cancel
            </Button>
            <CustomButton btnText={"Create Tables"} />

          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default AddTableDrawer;
