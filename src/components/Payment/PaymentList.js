import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Input } from "@chakra-ui/input";
import { Box, Grid, GridItem, HStack, Text } from "@chakra-ui/layout";
import { Radio, RadioGroup } from "@chakra-ui/radio";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/table";
import { TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Stack } from "react-bootstrap";
import { API_URL, BASE_URL } from "../../global/Constant";
import apiFunctions from "../../global/GlobalFunction";
import PaymentDailyBasisModal from "./PaymentDailyBasisModal";
import PendingPaymentModal from "./PendingPaymentModal";
import RevenueModal from "./RevenueModal";
import RevenueRangeModal from "./RevenueRangeModal";

const PaymentList = () => {
  const [value, setValue] = useState();
  const [startDate, setStartDate] = useState();
  const [payment, getPayment] = useState([]);
  const [endDate, setEndDate] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const {
    isOpen: PaymentSingleIsOpen,
    onOpen: PaymentSingleOnOpen,
    onClose: PaymentSingleOnClose,
  } = useDisclosure();

  const {
    isOpen: RevenueRangeModalIsOpen,
    onOpen: RevenueRangeModalOnOpen,
    onClose: RevenueRangeModalOnClose,
  } = useDisclosure();

  const {
    isOpen: PendingPaymentModalIsOpen,
    onOpen: PendingPaymentModalOnOpen,
    onClose: PendingPaymentModalOnClose,
  } = useDisclosure();

  let userId = localStorage.getItem("user_id");

  async function getAllPayment() {
    try {
      let filterOrdersByDate = await apiFunctions.GET_REQUEST(
        BASE_URL + API_URL.GET_ALL_PAYMENT_BY_USERID + userId
      );
      let res = filterOrdersByDate.data.payments;
      console.log(res, "hh");
      getPayment(res);
      setLoading(true);
      return true;
    } catch (err) {
      console.log("An error occurred while fetching carts", err.message);
    }
  }

  async function getMultiDatePayment() {
    try {
      let filterOrdersByDate = await apiFunctions.GET_REQUEST(
        BASE_URL +
          API_URL.GET_MULTI__DATE_PAYMENT +
          userId +
          `?startDate=${startDate}&endDate=${endDate}`
      );
      let res = filterOrdersByDate.data.payments;

      getPayment(res.reverse());
      return true;
    } catch (err) {
      console.log("An error occurred while fetching carts", err.message);
    }
  }

  async function getSingleDatePayment() {
    try {
      let filterOrdersByDate = await apiFunctions.GET_REQUEST(
        BASE_URL +
          API_URL.GET_SINGLE_DATE_PAYMENT +
          userId +
          `?date=${startDate}`
      );
      let res = filterOrdersByDate.data.payments;
      console.log(res, "hh");
      getPayment(res.reverse());

      return true;
    } catch (err) {
      console.log("An error occurred while fetching carts", err.message);
    }
  }

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  useEffect(() => {
    if (startDate && value == "1") {
      getSingleDatePayment();
    } else {
      if (startDate && endDate) {
        getMultiDatePayment();
      } else {
        getAllPayment();
      }
    }
  }, [startDate, endDate]);

  return (
    <>
      <Grid>
        <GridItem w="100%" bg="white" height="120%">
          <Text ml="10" fontWeight="500" fontSize="25" mt={5}>
            Payment
          </Text>
        </GridItem>
      </Grid>

      <Grid templateColumns="repeat(4, 1fr)" gap={6} mt={7}>
        <GridItem w="100%" h="10" textAlign="center">
          <Button onClick={onOpen} bg="blue.500" color="white">
            Total Revenue
          </Button>
        </GridItem>
        <GridItem w="100%" h="10" textAlign="center">
          <Button onClick={PaymentSingleOnOpen} bg="blue.500" color="white">
            Payment Daily Basis
          </Button>
        </GridItem>
        <GridItem w="100%" h="10" textAlign="center">
          <Button onClick={RevenueRangeModalOnOpen} bg="blue.500" color="white">
            Revenue Range
          </Button>
        </GridItem>
        <GridItem w="100%" h="10" textAlign="center">
          <Button
            onClick={PendingPaymentModalOnOpen}
            bg="blue.500"
            color="white"
          >
            Pending Payment
          </Button>
        </GridItem>
      </Grid>

      <Box m="10" mt={5}>
        <Tabs w="100%">
          <TabPanels>
            <TabPanel backgroundColor="white">
              {/* Filter Data */}
              <Box>
                <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                  <GridItem
                    w="100%"
                    h="10"
                    className="d-flex align-items-center"
                  >
                    <RadioGroup>
                      <HStack spacing={5} direction="row">
                        <Radio
                          colorScheme="green"
                          value="1"
                          onChange={(e) => setValue(e.target.value)}
                        >
                          Payments On Daily Basis
                        </Radio>
                        <Radio
                          colorScheme="green"
                          value="2"
                          onChange={(e) => setValue(e.target.value)}
                        >
                          Specific Range Of Payments
                        </Radio>
                      </HStack>
                    </RadioGroup>
                  </GridItem>

                  {value == "2" ? (
                    <>
                      <GridItem w="100%" h="20">
                        <Text mb="8px">Start Date</Text>
                        <Input
                          placeholder="Start Date"
                          size="md"
                          type="date"
                          bg="white"
                          onChange={(e) => setStartDate(e.target.value)}
                        />
                      </GridItem>
                      <GridItem w="100%" h="20">
                        <Text mb="8px">End Date</Text>
                        <Input
                          placeholder="End Date"
                          size="md"
                          type="date"
                          bg="white"
                          onChange={(e) => setEndDate(e.target.value)}
                        />
                      </GridItem>
                    </>
                  ) : null}

                  <Box>
                    {value == "1" ? (
                      <>
                        <GridItem w="100%" h="20">
                          <Text mb="8px">Start Date</Text>
                          <Input
                            placeholder="Start Date"
                            size="md"
                            type="date"
                            bg="white"
                            onChange={(e) => setStartDate(e.target.value)}
                          />
                        </GridItem>
                      </>
                    ) : null}
                  </Box>
                </Grid>
              </Box>

              {/* Filter Data */}

              <TableContainer mt={5}>
                <Table variant="simple">
                  <Thead backgroundColor="#FAFAFA">
                    <Tr>
                      <Th>Payment Id</Th>
                      <Th>Email</Th>
                      <Th>Phone Number</Th>
                      <Th>Payment Method</Th>
                      <Th>Transaction Id</Th>
                      <Th>Amount</Th>
                      <Th>PaymentStatus</Th>
                      <Th>Date</Th>
                    </Tr>
                  </Thead>
                  {loading ? (
                    <Tbody>
                      {payment?.map((x, index) => (
                        <Tr key={index}>
                          <Td className="td-fontsize">{x._id}</Td>
                          <Td className="td-fontsize">{x.email}</Td>
                          <Td className="td-fontsize">{x.phone_Number}</Td>
                          <Td className="td-fontsize">{x.payment_method}</Td>
                          <Td className="td-fontsize">{x.transaction_id}</Td>
                          <Td className="td-fontsize">{x.amount}</Td>
                          <Td className="td-fontsize">{x.payment_status}</Td>
                          <Td className="td-fontsize">
                            {formatDate(x.createdAt.toString())}
                          </Td>
                        </Tr>
                      ))}
                    </Tbody>
                  ) : (
                    <div className="loading-screen">
                      <div className="loading-spinner mt-5"> </div>
                    </div>
                  )}

                  {isOpen ? (
                    <RevenueModal
                      isOpen={isOpen}
                      onOpen={onOpen}
                      onClose={onClose}
                    />
                  ) : null}

                  {PaymentSingleIsOpen ? (
                    <PaymentDailyBasisModal
                      isOpen={PaymentSingleIsOpen}
                      onOpen={PaymentSingleOnOpen}
                      onClose={PaymentSingleOnClose}
                    />
                  ) : null}

                  {RevenueRangeModalIsOpen ? (
                    <RevenueRangeModal
                      isOpen={RevenueRangeModalIsOpen}
                      onOpen={RevenueRangeModalOnOpen}
                      onClose={RevenueRangeModalOnClose}
                    />
                  ) : null}

                  {PendingPaymentModalIsOpen ? (
                    <PendingPaymentModal
                      isOpen={PendingPaymentModalIsOpen}
                      onOpen={PendingPaymentModalOnOpen}
                      onClose={PendingPaymentModalOnClose}
                    />
                  ) : null}
                </Table>
              </TableContainer>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
};

export default PaymentList;
