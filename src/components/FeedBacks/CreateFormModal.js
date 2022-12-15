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
import { MenuState } from "../../context/MenuContext";
import { useState } from "react";
import { Form } from "react-bootstrap";

const CreateFormModal = (props) => {
  const { createfeedback, setCreateFeedback } = MenuState();
  const [formName, setFormName] = useState();
  const [welcomeMessage, setWelcomeMessage] = useState();
  const [active, setActive] = useState(false);

  function getTimestampInSeconds() {
    return Math.floor(Date.now() / 1000);
  }

  let feedbackFormData = {
    id: getTimestampInSeconds(),
    formName: formName,
    welcomeMessage: welcomeMessage,
    active: false,
    formQuestions: [],
    createdDate: new Date().toLocaleDateString(),
    createdTime: new Date().toTimeString().slice(0, 8),
  };

  const formCreate = () => {
    createfeedback.push(feedbackFormData);
    console.log(createfeedback, "createfeedback");
    alert("FeedBack Form Created Successfully");
    //document.getElementById("myForm").reset();
  };

  return (
    <>
      <Modal isOpen={props.isOpen} onClose={props.onClose} size="2xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a Feedback Form</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Form id="myForm">
              <FormControl mt={6} isRequired>
                <FormLabel fontWeight="400">Form Name</FormLabel>
                <Input
                  placeholder="Customer Satisfaction"
                  onChange={(e) => setFormName(e.target.value)}
                />
              </FormControl>

              <FormControl mt={6}>
                <FormLabel fontWeight="400">
                  Welcome Message (Optional)
                </FormLabel>
                <Input
                  placeholder="Could you give us 60 secs?"
                  onChange={(e) => setWelcomeMessage(e.target.value)}
                />
              </FormControl>

              <Checkbox mt={6}>
                I agree to FineDine Privacy Policy terms on the data I collect
                for this feedback.
              </Checkbox>
            </Form>
          </ModalBody>

          <ModalFooter>
            <CustomButton
              btnText={"Create a Form"}
              mr={3}
              size={"sm"}
              click={() => {
                formCreate();
              }}
            />

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
