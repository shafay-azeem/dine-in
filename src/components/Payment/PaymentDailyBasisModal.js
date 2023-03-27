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
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import { Text } from "@chakra-ui/layout";
import apiFunctions from "../../global/GlobalFunction";
import { API_URL, BASE_URL } from "../../global/Constant";
import { useState } from "react";
import { useEffect } from "react";

const PaymentDailyBasisModal = (props) => {
  const [startDate, setStartDate] = useState();
  let userId = localStorage.getItem("user_id");
  const [amount, setAmount] = useState();
  let currencySymbol = localStorage.getItem("currencySymbol");

  async function revenueRange() {
    try {
      let filterOrdersByDate = await apiFunctions.GET_REQUEST(
        BASE_URL +
          API_URL.GET_REVENUE_ON_DAILY_BASIS_PAYMENT +
          userId +
          `?date=${startDate}`
      );
      let res = filterOrdersByDate.data.totalRevenue;
      setAmount(res);

      return true;
    } catch (err) {
      console.log("An error occurred while fetching carts", err.message);
    }
  }

  useEffect(() => {
    if (startDate) {
      revenueRange();
    }
  }, [startDate]);

  return (
    <>
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Payment On Daily Baisis</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Date</FormLabel>
              <Input
                size="md"
                type="date"
                onChange={(e) => setStartDate(e.target.value)}
                max={new Date().toISOString().slice(0, 10)}
              />
            </FormControl>

            <Text mt={5}>
              Amount {currencySymbol} {amount}
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PaymentDailyBasisModal;
