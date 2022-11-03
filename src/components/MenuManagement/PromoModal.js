import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
  Stack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Select,
  Switch,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";

const PromoModal = (props) => {
  const [input, setInput] = useState("");
  const [value, setValue] = React.useState("1");
  const [Percentage, setPercentage] = useState(true);

  function amountfunc() {
    setPercentage(false);
  }

  function percentagefunc() {
    setPercentage(true);
  }

  const isError = input === "";
  return (
    <>
      <Modal isOpen={props.isOpen} onClose={props.onClose} size="2xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a Promo Code</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl isInvalid={isError}>
              <FormLabel fontWeight="400">Discount Code</FormLabel>
              <Input
                width="100%"
                size="sm"
                borderRadius="8px"
                value={input}
                placeholder="SUMMER30"
              />
              {!isError ? (
                <FormHelperText></FormHelperText>
              ) : (
                <FormErrorMessage>Discount Code is required.</FormErrorMessage>
              )}
            </FormControl>

            <FormControl mt={5}>
              <FormLabel fontWeight="400">Description</FormLabel>
              <Input size="sm" borderRadius="8px" />
            </FormControl>

            <FormControl mt={5}>
              <FormLabel fontWeight="400">Discount Off</FormLabel>
              <RadioGroup onChange={setValue} value={value}>
                <Stack direction="row">
                  <Radio value="1" onChange={percentagefunc}>
                    Percentage
                  </Radio>
                  <Radio value="2" onChange={amountfunc}>
                    Amount
                  </Radio>
                </Stack>
              </RadioGroup>
            </FormControl>
            {Percentage ? (
              <NumberInput mt={5} min={2}>
                <NumberInputField placeholder="Percentage" />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            ) : (
              <NumberInput mt={5} min={3}>
                <NumberInputField placeholder="Amount" />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            )}

            <FormControl mt={5}>
              <FormLabel fontWeight="400">Order Mode</FormLabel>
              <Select>
                <option>All</option>
                <option>Dine In</option>
                <option>Delivery</option>
                <option>Pick Up</option>
              </Select>
            </FormControl>

            <FormControl mt={5}>
              <FormLabel fontWeight="400">Min. Order Value</FormLabel>
              <NumberInput min={2}>
                <NumberInputField placeholder="$" />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>

            <FormControl mt={5}>
              <FormLabel fontWeight="400">Active</FormLabel>
              <Switch />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save Draft
            </Button>
            <Button onClick={props.onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PromoModal;
