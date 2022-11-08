import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";

const CustomTable = (props) => {
  return (
    <>
      <TableContainer borderRadius={4}>
        <Table variant="simple">
          <Thead backgroundColor="#FAFAFA">
            <Tr>
              <Th>{props.Customer}</Th>
              {/* <Th>
          <Checkbox defaultChecked mr={5} />
          Customer
        </Th> */}
              <Th>{props.Tags}</Th>
              <Th>{props.Email}</Th>
              <Th>{props.Phone}</Th>
              <Th>{props.TotalOrders}</Th>
              <Th>{props.LastVisit}</Th>
            </Tr>
          </Thead>
          <Tbody></Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default CustomTable;
