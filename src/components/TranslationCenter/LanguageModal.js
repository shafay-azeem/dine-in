import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Select,
} from "@chakra-ui/react";

const LanguageModal = (props) => {
  return (
    <>
      <Modal isOpen={props.isOpen} onClose={props.onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Choose languages</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Select placeholder="Select languages">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </ModalBody>

          <ModalFooter>
            <Button
              variant="outline"
              colorScheme="blue"
              mr={3}
              size="md"
              onClick={props.onClose}
            >
              Cancel
            </Button>
            <Button variant="solid" size="md" colorScheme="blue">
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LanguageModal;
