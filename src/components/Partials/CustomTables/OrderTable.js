import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Icon,
  Box,
  useDisclosure,
  Grid,
  GridItem,
  RadioGroup,
  Input,
  Text,
  Radio,
  HStack,
  Button,
  InputRightElement,
  Tooltip,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import OrderDetailModal from "../../Orders/OrderDetailModal";
import apiFunctions from "../../../global/GlobalFunction";
import { API_URL, BASE_URL } from "../../../global/Constant";
import { useEffect } from "react";
import { MenuState } from "../../../context/MenuContext";
import Pagination from "../Pagination";
import ChangeStatusModal from "../../Orders/ChangeStatusModal";
import { createSearchParams, useNavigate } from "react-router-dom";
import OrderReceipt from "../../Orders/OrderReceipt";

const OrderTable = (props) => {
  const [count, setCount] = useState();
  const [id, setId] = useState();
  const navigate = useNavigate();

  const { statusUpdate, setStatusUpdate } = MenuState();
  let userId = localStorage.getItem("user_id");
  let paymentStatus = props.paymentStatus;

  let type = props.type === null ? undefined : props?.type;

  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    isOpen: isOpenStatus,
    onOpen: onOpenStatus,
    onClose: onCloseStatus,
  } = useDisclosure();

  const { orders, setOrders } = MenuState();
  const [value, setValue] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [loading, setLoading] = useState(false);
  const [totalOrders, setTotalOrders] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  useEffect(() => {
    if (startDate && value == "1") {
      setLoading(false);
      filterOrdersByDate();
    } else {
      if (startDate && endDate) {
        setLoading(false);
        rangeOrders();
      } else {
        getPaidUnpaidOrders();
      }
    }
  }, [startDate, endDate, currentPage, type, statusUpdate]);

  async function getPaidUnpaidOrders() {
    try {
      let getPaidUnpaidOrders = await apiFunctions.GET_REQUEST(
        BASE_URL +
          API_URL.GET_PAID_UNPAID_ORDERS +
          userId +
          `?paymentStatus=${paymentStatus}&page=${currentPage}&type=${type}`
      );
      let res = getPaidUnpaidOrders.data.orders;

      setOrders(res);
      setTotalOrders(getPaidUnpaidOrders.data.totalOrders);
      setLoading(true);

      return true;
    } catch (err) {
      console.log("An error occurred while fetching carts", err.message);
    }
  }

  async function filterOrdersByDate() {
    try {
      let filterOrdersByDate = await apiFunctions.GET_REQUEST(
        BASE_URL +
          API_URL.FILTER_ORDER_BY_DATE +
          userId +
          `?paymentStatus=${paymentStatus}&date=${startDate}&page=${currentPage}&type=${type}`
      );
      let res = filterOrdersByDate.data.orders;

      setOrders(res);
      setTotalOrders(filterOrdersByDate.data.totalOrders);
      setLoading(true);
      return true;
    } catch (err) {
      console.log("An error occurred while fetching carts", err.message);
    }
  }

  async function rangeOrders() {
    try {
      let filterOrdersByDate = await apiFunctions.GET_REQUEST(
        BASE_URL +
          API_URL.GET_ORDER_BY_RANGE +
          userId +
          `?paymentStatus=${paymentStatus}&startDate=${startDate}&endDate=${endDate}&page=${currentPage}&type=${type}`
      );
      let res = filterOrdersByDate.data.orders;

      setOrders(res);
      setTotalOrders(filterOrdersByDate.data.totalOrders);
      setLoading(true);
      return true;
    } catch (err) {
      console.log("An error occurred while fetching carts", err.message);
    }
  }

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const getIndex = (index) => {
    setCount(index);
  };

  const getId = (id) => {
    setId(id);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    console.log(pageNumber, "pageNumber");
  };

  return (
    <>
      <Box>
        <GridItem w="100%" colSpan={1}>
          <Text fontWeight={600}>{totalOrders} results Listed</Text>
        </GridItem>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <GridItem w="100%" h="10" className="d-flex align-items-center">
            <RadioGroup>
              <HStack spacing={5} direction="row">
                <Radio
                  colorScheme="green"
                  value="1"
                  onChange={(e) => setValue(e.target.value)}
                >
                  Order On Daily Basis
                </Radio>
                <Radio
                  colorScheme="green"
                  value="2"
                  onChange={(e) => setValue(e.target.value)}
                >
                  Specific Range Of Orders
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
                  max={new Date().toISOString().slice(0, 10)}
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
                  max={new Date().toISOString().slice(0, 10)}
                />
              </GridItem>
              <GridItem w="310%" align="end" mt={-5}>
                <Button
                  colorScheme="teal"
                  onClick={() => {
                    setStartDate("");
                    setEndDate("");
                    document
                      .querySelectorAll('input[type="date"]')
                      .forEach((input) => (input.value = ""));
                  }}
                >
                  Clear
                </Button>
              </GridItem>
            </>
          ) : null}

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
                  max={new Date().toISOString().slice(0, 10)}
                />
              </GridItem>
              <GridItem w="50%" h="20" mt={8}>
                <Button
                  colorScheme="teal"
                  onClick={() => {
                    setStartDate("");
                    document.querySelector('input[type="date"]').value = "";
                  }}
                >
                  Clear
                </Button>
              </GridItem>
            </>
          ) : null}
        </Grid>
      </Box>

      <TableContainer mt={5}>
        <Table variant="simple">
          <Thead backgroundColor="#FAFAFA">
            <Tr>
              <Th>ID</Th>
              <Th>Customer Name</Th>
              <Th>Order Number</Th>
              <Th>Date</Th>
              <Th>Order Status</Th>
              <Th>Payment Status</Th>
              <Th>Type</Th>
              <Th>SubTotal</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          {loading ? (
            <Tbody>
              {orders?.map((x, index) => (
                <Tr key={index}>
                  <Td>{x._id}</Td>
                  <Td>{x.customerName}</Td>
                  <Td>{x.uniqueOrderId}</Td>
                  <Td>{formatDate(x.createdAt.toString())}</Td>
                  <Td>{x.orderStatus}</Td>
                  <Td>{x.paymentStatus}</Td>
                  <Td>{x.type}</Td>
                  <Td>{x.subtotal}</Td>
                  <Td style={{ textAlign: "center", cursor: "pointer" }}>
                    <HStack>
                      <Box onClick={() => getIndex(index)}>
                        <Tooltip label="View Your Order Detail" placement="top">
                          <Icon onClick={onOpen} as={ViewIcon} />
                        </Tooltip>
                      </Box>

                      <Box onClick={() => getId(x._id)}>
                        <Tooltip label="Change Status" placement="top">
                          <Icon onClick={onOpenStatus} as={EditIcon} />
                        </Tooltip>
                      </Box>

                      <Box>
                        <Tooltip label="Order Receipt" placement="top">
                          <Icon
                            as={EditIcon}
                            onClick={() =>
                              window.open(`/orderReceipt/${x._id}`, "_blank")
                            }
                          />
                        </Tooltip>
                      </Box>
                    </HStack>
                  </Td>
                </Tr>
              ))}

              {/* <OrderReceipt className={true ? "display: none" : ""} id={id} /> */}

              {isOpen ? (
                <OrderDetailModal
                  index={count}
                  isOpen={isOpen}
                  onOpen={onOpen}
                  onClose={onClose}
                />
              ) : null}

              {isOpenStatus ? (
                <ChangeStatusModal
                  id={id}
                  isOpen={isOpenStatus}
                  onOpen={onOpenStatus}
                  onClose={onCloseStatus}
                />
              ) : null}
            </Tbody>
          ) : (
            <div className="loading-screen">
              <div className="loading-spinner"> </div>
            </div>
          )}
        </Table>
      </TableContainer>

      <Pagination
        total={totalOrders}
        currentPage={currentPage}
        perPage={perPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default OrderTable;
