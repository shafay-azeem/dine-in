import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";

const CustomerTable = () => {
  return (
    <>
      <TableContainer borderRadius={4}>
        <Table variant="simple">
          <Thead backgroundColor="#FAFAFA">
            <Tr>
              <Th>Customer</Th>
              {/* <Th>
                <Checkbox defaultChecked mr={5} />
                Customer
              </Th> */}
              <Th>Tags</Th>
              <Th>Email</Th>
              <Th>Phone</Th>
              <Th>Total Orders</Th>
              <Th>Last Visit</Th>
            </Tr>
          </Thead>
          <Tbody></Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default CustomerTable;
