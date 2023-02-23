import {
  Checkbox,
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
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { ViewIcon } from "@chakra-ui/icons";
import OrderDetailModal from "../../Orders/OrderDetailModal";
import apiFunctions from "../../../global/GlobalFunction";
import { API_URL, BASE_URL } from "../../../global/Constant";
import { useEffect } from "react";
import { Stack } from "react-bootstrap";

const OrderTable = (props) => {
  let userId = localStorage.getItem("user_id");
  console.log(userId);
  let paymentStatus = props.paymentStatus;

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [checkedItems, setCheckedItems] = React.useState(false);
  const [orders, setOrders] = useState([]);
  const [value, setValue] = useState();

  useEffect(() => {
    getPaidUnpaidOrders();
  }, []);

  async function getPaidUnpaidOrders() {
    try {
      let getPaidUnpaidOrders = await apiFunctions.GET_REQUEST(
        BASE_URL +
          API_URL.GET_PAID_UNPAID_ORDERS +
          userId +
          `?paymentStatus=${paymentStatus}`
      );
      let res = getPaidUnpaidOrders.data.orders;
      setOrders(res.reverse());
      console.log(res, "res");
      return true;
    } catch (err) {
      console.log("An error occurred while fetching carts", err.message);
    }
  }

  return (
    <>
      <Grid templateColumns="repeat(5, 1fr)" gap={6} m={10}>
        <GridItem>
          <RadioGroup>
            <Stack spacing={5} direction="row">
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
            </Stack>
          </RadioGroup>
        </GridItem>

        {value == "2" ? (
          <Box>
            <GridItem w="100%" h="10">
              <Text mb="8px">Start Date</Text>
              <Input
                placeholder="Start Date"
                size="md"
                type="date"
                bg="white"
              />
            </GridItem>
            <GridItem w="100%" h="10">
              <Text mb="8px">End Date</Text>
              <Input placeholder="End Date" size="md" type="date" bg="white" />
            </GridItem>
          </Box>
        ) : null}

        {value == "1" ? (
          <Box>
            <GridItem w="100%" h="10">
              <Text mb="8px">Start Date</Text>
              <Input
                placeholder="Start Date"
                size="md"
                type="date"
                bg="white"
              />
            </GridItem>
          </Box>
        ) : null}
      </Grid>

      <TableContainer>
        <Table variant="simple">
          <Thead backgroundColor="#FAFAFA">
            <Tr>
              <Th>
                ID
                {/* <Checkbox
                  isChecked={checkedItems}
                  onChange={(e) => setCheckedItems(e.target.checked)}
                >
                  ID
                </Checkbox> */}
              </Th>
              <Th>Customer Name</Th>
              <Th>Table Number</Th>
              <Th>Instruction</Th>
              <Th>Order Status</Th>
              <Th>Payment Status</Th>
              <Th>SubTotal</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {orders?.map((x, index) => (
              <Tr key={index}>
                <Td>{x._id}</Td>
                <Td>{x.customerName}</Td>
                <Td>{x.tableNumber}</Td>
                <Td>{x.instructions}</Td>
                <Td>{x.orderStatus}</Td>
                <Td>{x.paymentStatus}</Td>
                <Td>{x.subtotal}</Td>
                <Td style={{ textAlign: "center", cursor: "pointer" }}>
                  <Box>
                    <Icon as={ViewIcon} onClick={onOpen} />
                  </Box>
                </Td>

                {isOpen ? (
                  <OrderDetailModal
                    isOpen={isOpen}
                    onOpen={onOpen}
                    onClose={onClose}
                  />
                ) : null}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default OrderTable;
