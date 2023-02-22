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
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { ViewIcon } from "@chakra-ui/icons";
import OrderDetailModal from "../../Orders/OrderDetailModal";

const OrderTable = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [checkedItems, setCheckedItems] = React.useState(false);

  const data = [
    {
      ID: 1,
      DailyNo: 101,
      Status: "Approved",
      Type: "Order",
      Customer: "Shafay",
      Table: "xyz",
      UpdateTime: "8:00",
      SentTime: "9:00",
      Total: 2000,
    },
    {
      ID: 2,
      DailyNo: 101,
      Status: "Approved",
      Type: "Order",
      Customer: "Faizan",
      Table: "xyz",
      UpdateTime: "8:00",
      SentTime: "9:00",
      Total: 2000,
    },
    {
      ID: 3,
      DailyNo: 101,
      Status: "Approved",
      Type: "Order",
      Customer: "Maisam",
      Table: "xyz",
      UpdateTime: "8:00",
      SentTime: "9:00",
      Total: 2000,
    },
  ];

  return (
    <>
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
            {data.map((x, index) => (
              <Tr key={index}>
                <Td>{x.ID}</Td>
                <Td>{x.DailyNo}</Td>
                <Td>{x.Status}</Td>
                <Td>{x.Type}</Td>
                <Td>{x.Customer}</Td>
                <Td>{x.Table}</Td>
                <Td>{x.Table}</Td>
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
