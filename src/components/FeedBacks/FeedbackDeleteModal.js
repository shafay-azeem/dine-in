import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
} from "@chakra-ui/react";
import CustomButton from "../../CustomElements/CustomButton";

const FeedbackDeleteModal = (props) => {
  return (
    <>
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Are you sure?</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={2}>
            <Text mb="1rem">
              Do you really want to delete Sample Form? It will be removed
              permanently.
            </Text>
          </ModalBody>

          <ModalFooter>
            <CustomButton btnText={"Delete"} mr={3} size={"sm"} />
            <CustomButton
              click={props.onClose}
              btnText={"Cancel"}
              variant={"outline"}
              size={"sm"}
            />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FeedbackDeleteModal;
