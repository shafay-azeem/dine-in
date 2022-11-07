import {
  Table,
  TableContainer,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

const ModifiersTable = () => {
  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <Thead backgroundColor="#FAFAFA">
            <Tr>
              <Th>Group Name</Th>
              <Th>Modifiers</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Text textAlign="center">No Data</Text>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ModifiersTable;
