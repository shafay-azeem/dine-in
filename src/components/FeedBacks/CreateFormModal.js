import React, { useEffect } from "react";
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
import { API_URL, BASE_URL } from "../../global/Constant";
import apiFunctions from "../../global/GlobalFunction";

import { useToast } from "@chakra-ui/react";

const CreateFormModal = (props) => {
  const toast = useToast();
  const { createfeedback, setCreateFeedback, createForm, setCreateForm } =
    MenuState();
  const [formName, setFormName] = useState();
  const [welcomeMessage, setWelcomeMessage] = useState();
  const [active, setActive] = useState(false);
  // const [createForm, setCreateForm] = useState(false);

  function getTimestampInSeconds() {
    return Math.floor(Date.now() / 1000);
  }

  // let feedbackFormData = {
  //   id: getTimestampInSeconds(),
  //   formName: formName,
  //   welcomeMessage: welcomeMessage,
  //   active: false,
  //   formQuestions: [],
  //   createdDate: new Date().toLocaleDateString(),
  //   createdTime: new Date().toTimeString().slice(0, 8),
  // };

  let feedbackFormData = {
    formName: formName,
  };

  const formCreate = async () => {
    if (!formName) {
      //alert("Please Enter All Fields");
      toast({
        position: "top",
        title: `Form Name Is Required`,
        status: "warning",
        duration: 1000,
        isClosable: true,
      });
      return;
    }
    await apiFunctions
      .POST_REQUEST(BASE_URL + API_URL.CREATE_FEEDBACK_FORM, feedbackFormData)
      .then((res) => {
        if (res.data.success == true) {
          toast({
            position: "top",
            title: `${res.data.message}`,
            status: "success",
            duration: 1000,
            isClosable: true,
          });
          setCreateForm(true);
          return true;
        } else {
          toast({
            position: "top",
            title: `There Some Error`,
            status: "error",
            duration: 1000,
            isClosable: true,
          });
          return false;
        }
      });
    // createfeedback.push(feedbackFormData);
    // setCreateFeedback([...createfeedback]);
    // alert("FeedBack Form Created Successfully");

    // //document.getElementById("myForm").reset();
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
                  // onChange={(e) => setWelcomeMessage(e.target.value)}
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
