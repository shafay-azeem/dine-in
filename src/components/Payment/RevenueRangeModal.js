import React from "react";
import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { Text } from "@chakra-ui/layout";
import apiFunctions from "../../global/GlobalFunction";
import { API_URL, BASE_URL } from "../../global/Constant";
import { useState } from "react";
import { useEffect } from "react";

const RevenueRangeModal = (props) => {
  let userId = localStorage.getItem("user_id");
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [amount, setAmount] = useState();

  // console.log(startDate);
  async function revenueRange() {
    try {
      let filterOrdersByDate = await apiFunctions.GET_REQUEST(
        BASE_URL +
          API_URL.REVENUE_RANGE +
          userId +
          `?startDate=${startDate}&endDate=${endDate}`
      );
      let res = filterOrdersByDate.data.totalRevenue;
      setAmount(res);

      return true;
    } catch (err) {
      console.log("An error occurred while fetching carts", err.message);
    }
  }

  useEffect(() => {
    if (startDate && endDate) {
      revenueRange();
    }
  }, [startDate, endDate]);
  return (
    <>
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Revenue Range</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Start Date</FormLabel>
              <Input
                size="md"
                type="date"
                onChange={(e) => setStartDate(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>EndDate</FormLabel>
              <Input
                size="md"
                type="date"
                onChange={(e) => setEndDate(e.target.value)}
              />
            </FormControl>

            <Text mt={5}>Amount Rs {amount}</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default RevenueRangeModal;
