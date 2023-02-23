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
  Box,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import React from "react";
import { MenuState } from "../../context/MenuContext";
const OrderDetailModal = (props) => {
  const { orders, setOrders } = MenuState();
  console.log(orders);

  let orderItemResponse = orders[props?.index]?.orderedItems;
  let customerName = orders[props?.index].customerName;
  let orderStatus = orders[props?.index].orderStatus;
  let paymentStatus = orders[props?.index].paymentStatus;
  let tableNumber = orders[props?.index].tableNumber;

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
              Customer Name : {customerName}
            </Text>

            {orderItemResponse?.map((x, index) => {
              return (
                <Box>
                  <Text fontWeight="500" mb="1rem">
                    Item Name : {x.item_Name}
                  </Text>
                  {/* <Grid templateColumns="repeat(5, 1fr)" gap={4} p={2}>
                    <GridItem colSpan={2} h="10" p={3}>
                      <Text fontSize="15px">{x.item_Name}</Text>
                    </GridItem>
                    <GridItem colStart={4} colEnd={6} h="10" p={3}>
                      <Text fontSize="15px">{x.item_Price}</Text>
                    </GridItem>
                  </Grid>
                  <Divider orientation="horizontal" /> */}
                </Box>
              );
            })}
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
