import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { MenuState } from "../../context/MenuContext";

const ViewFeedBacks = (props) => {
  const { feedback, setFeedback } = MenuState();

  console.log(props.index, "index");
  console.log(feedback[props.index].responses, "feedback");
  let questionResponses = feedback[props?.index]?.responses;
  return (
    <div>
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {questionResponses?.map((x, index) => {
              return (
                <Text key={index}>
                  Questions : {x.q2} Answers : {x.q1}
                </Text>
              );
            })}
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ViewFeedBacks;
