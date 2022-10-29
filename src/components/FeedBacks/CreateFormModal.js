import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
  Checkbox,
} from "@chakra-ui/react";

const CreateFormModal = (props) => {
  return (
    <>
      <Modal isOpen={props.isOpen} onClose={props.onClose} size="2xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a Feedback Form</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl mt={6} isRequired>
              <FormLabel fontWeight="400">Form Name</FormLabel>
              <Input placeholder="Customer Satisfaction" />
            </FormControl>

            <FormControl mt={6}>
              <FormLabel fontWeight="400">Welcome Message (Optional)</FormLabel>
              <Input placeholder="Could you give us 60 secs?" />
            </FormControl>
            <Checkbox mt={6}>
              I agree to FineDine Privacy Policy terms on the data I collect for
              this feedback.
            </Checkbox>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Create a Form
            </Button>
            <Button onClick={props.onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateFormModal;
