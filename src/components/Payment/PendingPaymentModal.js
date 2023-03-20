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
import { Box, Text } from "@chakra-ui/layout";

const PendingPaymentModal = (props) => {
  let userId = localStorage.getItem("user_id");
  const [pendingAmount, setPendingAmount] = useState();
  const [loading, setLoading] = useState(false);
  let currencySymbol = localStorage.getItem("currencySymbol");

  async function pendingAllAmount() {
    try {
      let filterOrdersByDate = await apiFunctions.GET_REQUEST(
        BASE_URL + API_URL.PENDING_AMOUNT_ALL + userId
      );
      let res = filterOrdersByDate.data.pendingAmount;
      setPendingAmount(res);
      setLoading(true);

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
        <ModalContent className="center-modal">
          {loading ? (
            <Box>
              <ModalHeader>Pending Amount</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <Text>
                  Amount {currencySymbol} {pendingAmount}
                </Text>
              </ModalBody>
            </Box>
          ) : (
            <div className="loading-screen-modal">
              <div className="loading-spinner-modal"> </div>
            </div>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default PendingPaymentModal;
