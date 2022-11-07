import {
  Checkbox,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

const OrderTable = () => {
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
              <Th>Daily No</Th>
              <Th>Status</Th>
              <Th>Type</Th>
              <Th>Customer</Th>
              <Th>Table</Th>
              <Th>Update Time </Th>
              <Th>Sent Time </Th>
              <Th>Total</Th>
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
                <Td>{x.UpdateTime}</Td>
                <Td>{x.SentTime}</Td>
                <Td>{x.Total}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default OrderTable;
