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

const OrderTable = (props) => {
  const [checkedItems, setCheckedItems] = React.useState(false);

  // setArr(props.data)
  // console.log(props.data[2])



  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <Thead backgroundColor="#FAFAFA">
            <Tr>
              <Th>
                <Checkbox
                  isChecked={checkedItems}
                  onChange={(e) => setCheckedItems(e.target.checked)}
                >
                  ID
                </Checkbox>
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
            {props.data.map((x, index) => (<Tr key={index}>
              <Td>{x.DailyNo}</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
            </Tr>))}
          </Tbody>


        </Table>
      </TableContainer>
    </>
  );
};

export default OrderTable;
