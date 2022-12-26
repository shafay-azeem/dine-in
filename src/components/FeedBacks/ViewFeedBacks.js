import {
  Box,
  Button,
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

  console.log(props.index, "index");
  console.log(feedback[props.index].responses, "feedback");
  let questionResponses = feedback[props?.index]?.responses;
  return (
    <div>
      <Modal isOpen={props.isOpen} onClose={props.onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {questionResponses?.map((x, index) => {
              return (
                <Box>
                  <Grid templateColumns="repeat(5, 1fr)" gap={4}>
                    <GridItem colSpan={2} h="10">
                      <Text>{x.q2}</Text>
                    </GridItem>
                    <GridItem colStart={4} colEnd={6} h="10">
                      {x.q1}
                    </GridItem>
                  </Grid>
                </Box>
              );
            })}
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ViewFeedBacks;
