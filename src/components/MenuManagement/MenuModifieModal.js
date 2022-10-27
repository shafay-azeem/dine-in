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
  Input,
  Center,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const MenuModifieModal = (props) => {
  const [input, setInput] = useState("");
  const handleInputChange = (e) => setInput(e.target.value);
  const isError = input === "";

  return (
    <>
      <Modal isOpen={props.isOpen} onClose={props.onClose} size="4xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a Modifier Group</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Center>
              <FormControl isInvalid={isError}>
                <FormLabel fontWeight="400">Group Name</FormLabel>
                <Input
                  width="50%"
                  size="sm"
                  borderRadius="8px"
                  value={input}
                  onChange={handleInputChange}
                />
                {!isError ? (
                  <FormHelperText></FormHelperText>
                ) : (
                  <FormErrorMessage>Group Name is required.</FormErrorMessage>
                )}
              </FormControl>
            </Center>
            <Text mt={6}>Modifiers</Text>
            <Button
              leftIcon={<AddIcon />}
              colorScheme="teal"
              variant="solid"
              mt={2}
              size="xs"
            >
              Add more Modifier
            </Button>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} size="sm">
              Save
            </Button>
            <Button onClick={props.onClose} size="sm">
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MenuModifieModal;
