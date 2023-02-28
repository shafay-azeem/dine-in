import {
  Divider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  Box,
  Grid,
  Image,
  GridItem,
} from "@chakra-ui/react";
import React from "react";
import { MenuState } from "../../context/MenuContext";
const OrderDetailModal = (props) => {
  const { orders, setOrders } = MenuState();

  let orderItemResponse = orders[props?.index]?.orderedItems;
  let customerName = orders[props?.index].customerName;
  let orderStatus = orders[props?.index].orderStatus;
  let paymentStatus = orders[props?.index].paymentStatus;
  let tableNumber = orders[props?.index].tableNumber;

  // console.log(orderItemResponse);

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose} size="6xl">
      <ModalOverlay />

      <ModalContent
        css={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          overflowY: "auto",
          maxHeight: "60vh",
        }}
      >
        <ModalHeader></ModalHeader>
        {/* 
        <Divider orientation="horizontal" /> */}

        <ModalCloseButton />

        <ModalBody pb={6}>
          <Text fontWeight="bold" mb="1rem" fontSize="lg">
            Customer Name: {customerName}
          </Text>

          {orderItemResponse?.map((x, index) => {
            return (
              <Box key={index} py={2}>
                <Grid templateColumns="repeat(6, 1fr)" gap={4}>
                  <GridItem colSpan={2}>
                    <Image
                      src={x.item_Img}
                      alt={x.item_Name}
                      boxSize="300px"
                      objectFit="cover"
                      mx="auto"
                      my={4}
                    />
                  </GridItem>
                  <GridItem colSpan={4} mt={4}>
                    <Text fontWeight="bold">{x.item_Name}</Text>

                    <Text fontWeight="medium" mb="0.5rem">
                      Quantity: {x.item_Qty}
                    </Text>
                    <Text fontWeight="medium" mb="0.5rem">
                      Size: {x.item_Size}
                    </Text>
                    <Text fontWeight="medium" mb="0.5rem">
                      Price: {x.item_Price}
                    </Text>
                    <Text fontWeight="medium" mb="0.5rem">
                      Total Price: {x.itemPrice_Total}
                    </Text>
                  </GridItem>

                  {x.Modifier?.map((s, index) => {
                    return (
                      <GridItem colSpan={4} mt={4} key={index}>
                        <Text fontWeight="bold">{s.Modifier_Name}</Text>

                        <Text fontWeight="medium" mb="0.5rem">
                          Quantity: {s.Modifier_Qty}
                        </Text>

                        <Text fontWeight="medium" mb="0.5rem">
                          Price: {s.Modifier_Price}
                        </Text>
                      </GridItem>
                    );
                  })}
                </Grid>
                {index !== orderItemResponse.length - 1 && <Divider my={2} />}
              </Box>
            );
          })}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default OrderDetailModal;
