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
import { MenuState } from "../../context/MenuContext";
import { useState } from "react";
import { Button } from "bootstrap";
import { useNavigate } from "react-router-dom";

const FeedbackDeleteModal = (props) => {
  console.log(props.index, "props index")
  const navigate = useNavigate();
  const { createfeedback, setCreateFeedback } = MenuState();
  const [feedbackFormList, setFeedbackFormList] = useState(createfeedback);

  const handleRemove = () => {
    createfeedback.splice(props.index, 1);
    setCreateFeedback([...createfeedback]);
    setFeedbackFormList(createfeedback);
    navigate({
      pathname: "/feedbacks",

    });
  };
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
            <CustomButton btnText={"Delete"} click={() => handleRemove()} mr={3} size={"sm"} />

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
