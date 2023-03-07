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
  ModalFooter,
} from "@chakra-ui/react";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { MenuState } from "../../context/MenuContext";
import { BsCheck2 } from "react-icons/bs";
const OrderDetailModal = (props) => {
  const { orders, setOrders } = MenuState();
  const [scrollBehavior, setScrollBehavior] = React.useState("inside");

  let orderItemResponse = orders[props?.index]?.orderedItems;
  let customerName = orders[props?.index].customerName;
  let address = orders[props?.index].address;
  let instructions = orders[props?.index].instructions;

  let subtotal = orders[props?.index].subtotal;

  let orderStatus = orders[props?.index].orderStatus;
  let paymentStatus = orders[props?.index].paymentStatus;
  let tableNumber = orders[props?.index].tableNumber;

  // console.log(orderItemResponse);

  return (
    <Modal
      isOpen={props.isOpen}
      onClose={props.onClose}
      size="4xl"
      scrollBehavior={scrollBehavior}
    >
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
        <ModalHeader
          position="fixed"
          className="bg-light bg-white "
          style={{ zIndex: 99 }}
        >
          <div fontWeight="bold" mb="1rem" fontSize="lg">
            Customer Name: {customerName}
          </div>

          {address ? (
            <div fontWeight="bold" mb="1rem" fontSize="lg">
              Address: {address}
            </div>
          ) : null}

          <div fontWeight="bold" mb="1rem" fontSize="lg">
            Instructions: {instructions}
          </div>
        </ModalHeader>
        {/* 
        <Divider orientation="horizontal" /> */}

        <ModalCloseButton />

        <ModalBody pt={12} className="w-100">
          <Row className="w-100 pt-3">
            {orderItemResponse?.map((x, index) => {
              return (
                <div key={index} className="col-12">
                  <Row className="py-2">
                    <div
                      className="col-2"
                      style={{
                        // width: "150px",
                        height: "150px",
                        backgroundImage: `url(${x.item_Img})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>
                    <div className="col-5">
                      <Text fontWeight="medium" fontSize={18}>
                        {x.item_Name}
                      </Text>

                      <Text fontWeight="medium" mb="0.5rem">
                        Quantity: {x.item_Qty}
                      </Text>
                      {/* <Text fontWeight="medium" mb="0.5rem">
                        Size: {x.item_Size}
                      </Text> */}

                      <Text fontWeight="medium" mb="0.5rem">
                        Price: {x.item_Price}
                      </Text>

                      <div fontWeight="medium" mb="0.5rem">
                        <BsCheck2 className="d-inline text-success me-2" />
                        {x.item_Size}
                      </div>

                      <div className="text-danger text-xl">
                        Total: {x.itemPrice_Total}
                      </div>
                    </div>
                    <div className="col-5">
                      {x.Modifier?.map((s, index) => {
                        return (
                          <GridItem colSpan={4} key={index}>
                            <Text fontWeight="medium" fontSize={18}>
                              Modifier
                            </Text>

                            <Text fontWeight="medium" mb="0.5rem">
                              Modifier Name : {s.Modifier_Name}
                            </Text>

                            <Text fontWeight="medium" mb="0.5rem">
                              Quantity: {s.Modifier_Qty}
                            </Text>

                            <Text fontWeight="medium" mb="0.5rem">
                              Price: {s.Modifier_Price}
                            </Text>
                          </GridItem>
                        );
                      })}
                    </div>
                  </Row>
                  <hr />
                </div>

                // {index !== orderItemResponse.length - 1 && <Divider my={2} />}
              );
            })}
          </Row>
        </ModalBody>

        <ModalFooter className="bg-light bg-white w-100">
          <div className="d-flex justify-content-between w-100 ">
            <span
              style={{
                fontWeight: "600",
                fontSize: "20px",
                textAlign: "end",
              }}
              className="text-black"
            >
              Sub Total
            </span>
            <span
              style={{
                fontWeight: "600",
                fontSize: "20px",
                textAlign: "end",
              }}
            >
              Rs {subtotal}
            </span>
          </div>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default OrderDetailModal;
