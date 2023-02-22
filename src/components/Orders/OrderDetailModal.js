import {
  Button,
  Divider,
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

const OrderDetailModal = (props) => {
  return (
    <div>
      <Modal isOpen={props.isOpen} onClose={props.onClose} size="5xl">
        <ModalOverlay />

        <ModalContent>
          <ModalHeader></ModalHeader>
          <Divider orientation="horizontal" />

          <ModalCloseButton />

          <ModalBody pb={6}>
            <Text fontWeight="500" mb="1rem">
              {/* Date : {formatDate(feedbackInfo.createAt.toString())} */}
            </Text>

            <Text fontWeight="500" mb="1rem">
              {/* Form : {feedbackInfo.formName} */}
            </Text>

            {/* {questionResponses?.map((x, index) => {
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
            })} */}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={props.onClose} size="md">
              OK
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default OrderDetailModal;
