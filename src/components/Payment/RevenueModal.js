import { Button } from "@chakra-ui/button";

import { Box, Text } from "@chakra-ui/layout";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { API_URL, BASE_URL } from "../../global/Constant";
import apiFunctions from "../../global/GlobalFunction";

const RevenueModal = (props) => {
  let userId = localStorage.getItem("user_id");
  const [amount, setAmount] = useState();
  const [loading, setLoading] = useState(false);
  let currencySymbol = localStorage.getItem("currencySymbol");

  async function totalRevenue() {
    try {
      let filterOrdersByDate = await apiFunctions.GET_REQUEST(
        BASE_URL + API_URL.TOTAL_REVENUE + userId
      );
      let res = filterOrdersByDate.data.totalAmount;
      setAmount(res);
      setLoading(true);

      return true;
    } catch (err) {
      console.log("An error occurred while fetching carts", err.message);
    }
  }

  useEffect(() => {
    totalRevenue();
  }, []);
  return (
    <>
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent className="center-modal">
          {loading ? (
            <Box>
              <ModalHeader>Total Revenue</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <Text>
                  Total Revenue {currencySymbol} {amount}
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

export default RevenueModal;
