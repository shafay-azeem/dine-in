import {
  Box,
  Button,
  Divider,
  Grid,
  GridItem,
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

  let questionResponses = feedback[props?.index]?.responses;
  console.log(feedback, "feedback");
  return (
    <div>
      <Modal isOpen={props.isOpen} onClose={props.onClose} size="5xl">
        <ModalOverlay />
        {feedback?.map((y, index) => {
          return (
            <ModalContent>
              <ModalHeader>Form {index + 1}</ModalHeader>
              <Divider orientation="horizontal" />

              <ModalCloseButton />

              <ModalBody pb={6}>
                <Text fontWeight="500" mb="1rem">
                  Date : {y.createAt}
                </Text>

                <Text fontWeight="500" mb="1rem">
                  Form : {y.formName}
                </Text>

                {y.response?.map((x, index) => {
                  return (
                    <Box>
                      <Grid templateColumns="repeat(5, 1fr)" gap={4} p={2}>
                        <GridItem colSpan={2} h="10" p={3}>
                          <Text fontSize="15px">{x.question}</Text>
                        </GridItem>
                        <GridItem colStart={4} colEnd={6} h="10" p={3}>
                          <Text fontSize="15px">{x.answer}</Text>
                        </GridItem>
                      </Grid>
                      <Divider orientation="horizontal" />
                    </Box>
                  );
                })}
              </ModalBody>
              <Divider orientation="horizontal" />
              <ModalFooter>
                <Button
                  colorScheme="blue"
                  mr={3}
                  onClick={props.onClose}
                  size="md"
                >
                  OK
                </Button>
              </ModalFooter>
            </ModalContent>
          );
        })}
      </Modal>
    </div>
  );
};

export default ViewFeedBacks;
