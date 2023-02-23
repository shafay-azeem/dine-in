import React from "react";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { useEffect } from "react";
import { useState } from "react";
import apiFunctions from "../../global/GlobalFunction";
import { API_URL, BASE_URL } from "../../global/Constant";
import { Button } from "@chakra-ui/button";
import { Text } from "@chakra-ui/layout";

const PendingPaymentModal = (props) => {
  let userId = localStorage.getItem("user_id");
  const [pendingAmount, setPendingAmount] = useState();

  async function pendingAllAmount() {
    try {
      let filterOrdersByDate = await apiFunctions.GET_REQUEST(
        BASE_URL + API_URL.PENDING_AMOUNT_ALL + userId
      );
      let res = filterOrdersByDate.data.pendingAmount;
      setPendingAmount(res);

      return true;
    } catch (err) {
      console.log("An error occurred while fetching carts", err.message);
    }
  }

  useEffect(() => {
    pendingAllAmount();
  }, []);

  return (
    <>
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Pending Amount</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Text>Amount Rs {pendingAmount}</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              OK
            </Button>
            <Button onClick={props.onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PendingPaymentModal;
