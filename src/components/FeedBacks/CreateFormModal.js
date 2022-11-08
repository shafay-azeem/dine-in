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
import CustomButton from "../../CustomElements/CustomButton";

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
            <CustomButton btnText={"Create a Form"} mr={3} size={"sm"} />

            <CustomButton
              click={props.onClose}
              btnText={"Cancel"}
              variant={"outline"}
              mr={3}
              size={"sm"}
            />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateFormModal;
